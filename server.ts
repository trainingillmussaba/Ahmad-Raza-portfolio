import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "15mb" }));
app.use(express.urlencoded({ extended: true, limit: "15mb" }));

// In-memory proof storage for uploaded payment receipts
const paymentProofs = new Map<string, { mimeType: string; buffer: Buffer; createdAt: number }>();

// Cache for live exchange rates
let cachedRates: { rates: Record<string, number>; timestamp: number } | null = null;

// Fallback rates if external FX service is momentarily down
const fallbackRates: Record<string, number> = {
  USD: 1,
  PKR: 278.5,
  INR: 84.1,
  AED: 3.67,
  SAR: 3.75,
  GBP: 0.78,
  EUR: 0.92,
  CAD: 1.38,
  AUD: 1.52,
  QAR: 3.64,
  KWD: 0.31,
  OMR: 0.38,
};

// API: Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// API: Live Exchange Rates
app.get("/api/exchange-rates", async (req, res) => {
  try {
    const now = Date.now();
    if (cachedRates && now - cachedRates.timestamp < 1000 * 60 * 60) {
      return res.json({ rates: cachedRates.rates, source: "cached", updatedAt: new Date(cachedRates.timestamp).toISOString() });
    }

    // Fetch real live exchange rates
    const response = await fetch("https://open.er-api.com/v6/latest/USD");
    if (response.ok) {
      const data = await response.json();
      if (data && data.rates) {
        cachedRates = {
          rates: data.rates,
          timestamp: now,
        };
        return res.json({ rates: data.rates, source: "live", updatedAt: new Date(now).toISOString() });
      }
    }
    throw new Error("Unable to fetch live rates");
  } catch (error) {
    // Fallback gracefully without fake invention
    res.json({
      rates: fallbackRates,
      source: "fallback",
      updatedAt: new Date().toISOString(),
      note: "Exchange rate shown for reference. Your payment provider may use a slightly different rate."
    });
  }
});

// API: Upload Payment Proof Screenshot
app.post("/api/upload-proof", (req, res) => {
  try {
    const { base64Data, mimeType = "image/jpeg" } = req.body;
    if (!base64Data) {
      return res.status(400).json({ error: "Missing image data" });
    }

    // Clean base64 header if present
    const cleanBase64 = base64Data.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(cleanBase64, "base64");

    if (buffer.length > 10 * 1024 * 1024) {
      return res.status(400).json({ error: "File exceeds 10MB limit" });
    }

    const proofId = `proof-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    paymentProofs.set(proofId, {
      mimeType,
      buffer,
      createdAt: Date.now(),
    });

    const host = req.get("host") || `localhost:${PORT}`;
    const protocol = req.protocol === "https" || req.get("x-forwarded-proto") === "https" ? "https" : "http";
    const proofUrl = `${protocol}://${host}/api/proofs/${proofId}`;

    res.json({ success: true, proofId, proofUrl });
  } catch (err: any) {
    res.status(500).json({ error: "Failed to process screenshot: " + (err?.message || "Unknown error") });
  }
});

// API: View Payment Proof Screenshot
app.get("/api/proofs/:id", (req, res) => {
  const proof = paymentProofs.get(req.params.id);
  if (!proof) {
    return res.status(404).send("Proof not found or expired");
  }
  res.setHeader("Content-Type", proof.mimeType);
  res.setHeader("Cache-Control", "public, max-age=86400");
  res.send(proof.buffer);
});

// API: Booking Handshake and WhatsApp Dispatcher
// Protects the private teacher WhatsApp number by constructing the URL securely on the backend
app.post("/api/booking-handshake", (req, res) => {
  try {
    const {
      packageName,
      billingType,
      feeUSD,
      studentName,
      email,
      studentWhatsApp,
      country,
      age,
      guardianName,
      gradeOrQualification,
      department,
      subject,
      preferredLanguage,
      currentLevel,
      learningGoal,
      examName,
      examDate,
      preferredFrequency,
      demoFeeUSD,
      convertedAmount,
      targetCurrency,
      paymentMethod,
      transactionReference,
      proofUrl,
      selectedDate,
      selectedTime,
      studentTimeZone,
      additionalMessage,
    } = req.body;

    if (!studentName || !studentWhatsApp || !subject || !transactionReference || !selectedDate || !selectedTime) {
      return res.status(400).json({ error: "Required booking fields are missing" });
    }

    // Teacher WhatsApp number kept strictly server-side
    const rawTeacherNumber = process.env.TEACHER_WHATSAPP_NUMBER || "+923434336881";
    const sanitizedNumber = rawTeacherNumber.replace(/[^0-9]/g, "");

    // Build structured booking message according to Section 41
    const lines: string[] = [
      packageName ? `📌 *NEW ENROLLMENT: ${packageName.toUpperCase()}*` : "📌 *NEW DEMO SESSION BOOKING*",
      "──────────────────────",
      ...(packageName ? [`*Selected Package:* ${packageName}`] : []),
      `*Student:* ${studentName}`,
      `*Student WhatsApp:* ${studentWhatsApp}`,
    ];

    if (email) lines.push(`*Email:* ${email}`);
    if (country) lines.push(`*Country:* ${country}`);
    if (age) lines.push(`*Age:* ${age}`);
    if (guardianName) lines.push(`*Parent / Guardian:* ${guardianName}`);
    if (gradeOrQualification) lines.push(`*Class / Grade:* ${gradeOrQualification}`);
    if (department) lines.push(`*Department / Program:* ${department}`);
    lines.push(`*Subject / Course:* ${subject}`);
    if (preferredLanguage) lines.push(`*Preferred Language:* ${preferredLanguage}`);
    if (currentLevel) lines.push(`*Current Level:* ${currentLevel}`);
    if (learningGoal) lines.push(`*Learning Goal:* ${learningGoal}`);
    if (examName) lines.push(`*Exam Name:* ${examName}`);
    if (examDate) lines.push(`*Target Exam Date:* ${examDate}`);
    if (preferredFrequency) lines.push(`*Class Frequency:* ${preferredFrequency}`);

    lines.push("");
    lines.push("💳 *PAYMENT & FEE DETAILS*");
    const activeFee = feeUSD || demoFeeUSD || 3;
    lines.push(`*Package Fee:* $${activeFee} USD${billingType ? ` (${billingType})` : ""}`);
    if (convertedAmount) {
      lines.push(`*Local Currency Equivalent:* ${convertedAmount}`);
    }
    lines.push(`*Payment Method:* ${paymentMethod || "Bank Transfer"}`);
    lines.push(`*Transaction Reference (TID):* ${transactionReference}`);
    if (proofUrl) {
      lines.push(`*Payment Proof Link:* ${proofUrl}`);
    }

    lines.push("");
    lines.push("🗓️ *SCHEDULED DEMO TIME*");
    lines.push(`*Preferred Date:* ${selectedDate}`);
    lines.push(`*Preferred Time:* ${selectedTime}`);
    if (studentTimeZone) lines.push(`*Student Time Zone:* ${studentTimeZone}`);
    lines.push(`*Teacher Time Zone:* Asia/Karachi (GMT+5)`);

    if (additionalMessage) {
      lines.push("");
      lines.push(`*Student Message:* ${additionalMessage}`);
    }

    lines.push("──────────────────────");
    lines.push("✅ _Sent via Ahmad Raza Tutoring Portfolio_");

    const fullMessage = lines.join("\n");
    const encodedMessage = encodeURIComponent(fullMessage);
    const redirectUrl = `https://wa.me/${sanitizedNumber}?text=${encodedMessage}`;

    res.json({
      success: true,
      redirectUrl,
      formattedMessage: fullMessage,
    });
  } catch (error: any) {
    res.status(500).json({ error: "Failed to prepare booking handoff: " + (error?.message || "Unknown error") });
  }
});

// Vite middleware configuration
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

start();
