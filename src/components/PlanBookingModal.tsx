import React, { useState, useEffect } from "react";
import {
  X,
  Check,
  CreditCard,
  Calendar,
  Clock,
  User,
  ShieldCheck,
  Upload,
  Copy,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  DollarSign,
  AlertCircle,
  HelpCircle,
  Phone,
  Sparkles,
  CheckCircle2,
  Lock,
} from "lucide-react";
import {
  PAYMENT_METHODS,
  TEACHER_INFO,
  SUBJECTS_DATA,
  SUPPORTED_CURRENCIES,
  CurrencyCode,
} from "../data";
import { SelectedPlanInfo, BookingFormState, CurrencyRatesResponse } from "../types";

interface PlanBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: SelectedPlanInfo | null;
  initialSubject?: string;
}

export const PlanBookingModal: React.FC<PlanBookingModalProps> = ({
  isOpen,
  onClose,
  plan,
  initialSubject = "",
}) => {
  if (!isOpen || !plan) return null;

  // Step flow: 1: Student Details -> 2: Time Slot / Schedule -> 3: Payment & Verification -> 4: WhatsApp Confirmation
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Currency conversion state
  const [currencyRates, setCurrencyRates] = useState<Record<string, number>>({
    USD: 1,
    PKR: 279,
    GBP: 0.79,
    EUR: 0.92,
    CAD: 1.36,
    AUD: 1.53,
    AED: 3.67,
    SAR: 3.75,
  });
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>("USD");

  // Form state
  const [formData, setFormData] = useState<BookingFormState>({
    studentName: "",
    email: "",
    studentWhatsApp: "",
    country: "",
    age: "Adult (18+)",
    guardianName: "",
    gradeOrQualification: "",
    department: "Science",
    subject: initialSubject || "GED Mathematical Reasoning",
    preferredLanguage: "English & Urdu (Bilingual)",
    currentLevel: "",
    learningGoal: "",
    examName: "GED",
    examDate: "",
    preferredFrequency: plan.type === "monthly" ? "Monthly Subscription" : "Regular Hourly Sessions",

    packageName: `${plan.type === "monthly" ? "Monthly" : "Hourly"} ${plan.name} Plan ($${plan.price}${plan.period})`,
    billingType: plan.type,
    demoFeeUSD: plan.price,
    targetCurrency: "USD",
    convertedAmount: `$${plan.price}.00 USD`,
    paymentMethod: "Nayapay",
    transactionReference: "",
    paymentScreenshotFile: null,
    paymentScreenshotPreview: null,
    proofUrl: null,

    selectedDate: "",
    selectedTime: "11:30 AM (PKT)",
    studentTimeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC",
    additionalMessage: "",
  });

  // Fetch exchange rates once
  useEffect(() => {
    fetch("/api/exchange-rates")
      .then((res) => res.json())
      .then((data: CurrencyRatesResponse) => {
        if (data.rates) {
          setCurrencyRates(data.rates);
        }
      })
      .catch(() => {});
  }, []);

  // Update converted price when currency or plan changes
  useEffect(() => {
    const rate = currencyRates[selectedCurrency] || 1;
    const amount = (plan.price * rate).toFixed(selectedCurrency === "PKR" ? 0 : 2);
    const symbol = SUPPORTED_CURRENCIES.find((c) => c.code === selectedCurrency)?.symbol || "$";
    const formatted = `${symbol}${amount} ${selectedCurrency}`;

    setFormData((prev) => ({
      ...prev,
      demoFeeUSD: plan.price,
      packageName: `${plan.type === "monthly" ? "Monthly" : "Hourly"} ${plan.name} Plan ($${plan.price}${plan.period})`,
      billingType: plan.type,
      targetCurrency: selectedCurrency,
      convertedAmount: formatted,
    }));
  }, [selectedCurrency, currencyRates, plan]);

  // Set default initial date to tomorrow
  useEffect(() => {
    if (!formData.selectedDate) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setFormData((prev) => ({ ...prev, selectedDate: tomorrow.toISOString().split("T")[0] }));
    }
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Copy helper
  const copyToClipboard = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2500);
  };

  // Screenshot upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      alert("File size exceeds 10MB limit. Please choose a smaller image.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setFormData((prev) => ({
        ...prev,
        paymentScreenshotFile: file,
        paymentScreenshotPreview: reader.result as string,
      }));
    };
    reader.readAsDataURL(file);
  };

  // Validation
  const isStep1Valid =
    formData.studentName.trim().length > 1 &&
    formData.studentWhatsApp.trim().length > 5 &&
    formData.email.trim().includes("@") &&
    formData.subject.trim().length > 0;

  const isStep2Valid = Boolean(formData.selectedDate) && Boolean(formData.selectedTime);

  const isStep3Valid =
    Boolean(formData.transactionReference.trim()) ||
    Boolean(formData.paymentScreenshotFile) ||
    Boolean(formData.paymentScreenshotPreview);

  // Submit and redirect to WhatsApp
  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      let uploadedProofUrl = formData.proofUrl;

      // 1. Upload screenshot if selected
      if (formData.paymentScreenshotFile && !uploadedProofUrl) {
        const uploadBody = new FormData();
        uploadBody.append("screenshot", formData.paymentScreenshotFile);
        uploadBody.append("reference", formData.transactionReference || "NoRef");

        try {
          const uploadRes = await fetch("/api/upload-proof", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              base64Data: formData.paymentScreenshotPreview,
              mimeType: formData.paymentScreenshotFile.type,
            }),
          });
          const uploadData = await uploadRes.json();
          if (uploadData.success && uploadData.proofUrl) {
            uploadedProofUrl = uploadData.proofUrl;
          }
        } catch (uploadErr) {
          console.warn("Screenshot upload skipped or failed, continuing", uploadErr);
        }
      }

      // 2. Call backend handshake
      const handshakePayload = {
        packageName: `${plan.type === "monthly" ? "Monthly" : "Hourly"} ${plan.name} Plan ($${plan.price}${plan.period})`,
        billingType: plan.type === "monthly" ? "Monthly Plan" : "Hourly Plan",
        feeUSD: plan.price,
        studentName: formData.studentName,
        email: formData.email,
        studentWhatsApp: formData.studentWhatsApp,
        country: formData.country || "Not specified",
        age: formData.age,
        guardianName: formData.guardianName || "N/A",
        gradeOrQualification: formData.gradeOrQualification || "N/A",
        department: formData.department,
        subject: formData.subject,
        preferredLanguage: formData.preferredLanguage,
        currentLevel: formData.currentLevel || "Not specified",
        learningGoal: formData.learningGoal || `Enrollment in ${plan.name} Plan`,
        examName: formData.examName || "N/A",
        examDate: formData.examDate || "Flexible",
        preferredFrequency: formData.preferredFrequency,
        demoFeeUSD: plan.price,
        convertedAmount: formData.convertedAmount,
        targetCurrency: selectedCurrency,
        paymentMethod: formData.paymentMethod,
        transactionReference: formData.transactionReference || "Pending",
        proofUrl: uploadedProofUrl,
        selectedDate: formData.selectedDate,
        selectedTime: formData.selectedTime,
        studentTimeZone: formData.studentTimeZone,
        additionalMessage: formData.additionalMessage,
      };

      const res = await fetch("/api/booking-handshake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(handshakePayload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Unable to complete booking handshake.");
      }

      setRedirectUrl(data.redirectUrl);
      setStep(4);

      // Auto redirect to WhatsApp
      if (data.redirectUrl) {
        window.open(data.redirectUrl, "_blank");
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setSubmissionError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate next 14 available dates
  const availableDates: { value: string; label: string; weekday: string }[] = [];
  const today = new Date();
  for (let i = 1; i <= 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const iso = d.toISOString().split("T")[0];
    const weekday = d.toLocaleDateString("en-US", { weekday: "short" });
    const formatted = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    availableDates.push({ value: iso, label: formatted, weekday });
  }

  // Pre-configured time slots
  const timeSlots = [
    { time: "09:00 AM (PKT)", label: "Morning" },
    { time: "10:30 AM (PKT)", label: "Morning" },
    { time: "11:30 AM (PKT)", label: "Morning" },
    { time: "02:00 PM (PKT)", label: "Afternoon" },
    { time: "03:30 PM (PKT)", label: "Afternoon" },
    { time: "05:00 PM (PKT)", label: "Afternoon" },
    { time: "06:30 PM (PKT)", label: "Evening" },
    { time: "08:00 PM (PKT)", label: "Evening" },
    { time: "09:30 PM (PKT)", label: "Night" },
  ];

  const planBadgeColor =
    plan.type === "monthly"
      ? "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-800"
      : "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl my-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh]">
        {/* MODAL HEADER: Plan Spotlight & Exact Price Display */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-blue-950 text-white p-5 sm:p-6 border-b border-slate-800 shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span
                  className={`text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${planBadgeColor}`}
                >
                  {plan.type === "monthly" ? "Monthly Package" : "Hourly Tutoring"}
                </span>
                {plan.badge && (
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 shadow-xs">
                    ★ {plan.badge}
                  </span>
                )}
                <span className="text-xs text-slate-400">1-on-1 with Ahmad Raza</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2">
                <span>{plan.name} Package</span>
                <span className="text-blue-400 font-semibold text-base sm:text-lg">
                  ({plan.type === "monthly" ? "Monthly" : "Hourly"})
                </span>
              </h2>

              {plan.bestFor && (
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl line-clamp-1">
                  {plan.bestFor}
                </p>
              )}
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              id="plan-modal-close-btn"
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all shrink-0 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* EXACT PRICE SPOTLIGHT BANNER */}
          <div className="mt-4 p-3.5 sm:p-4 rounded-2xl bg-white/10 dark:bg-slate-950/60 border border-white/15 dark:border-slate-800/80 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-baseline gap-2">
              <span className="text-xs uppercase font-bold text-slate-300 tracking-wider">
                Exact Package Fee:
              </span>
              <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                ${plan.price}
              </span>
              <span className="text-blue-300 font-semibold text-sm sm:text-base">
                {plan.period}
              </span>
              {selectedCurrency !== "USD" && (
                <span className="text-xs sm:text-sm font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-lg ml-2">
                  ≈ {formData.convertedAmount}
                </span>
              )}
            </div>

            {/* Live Currency Selector */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-300 font-medium whitespace-nowrap">
                Pay in:
              </span>
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value as CurrencyCode)}
                className="bg-slate-800 text-white text-xs font-bold rounded-lg px-2.5 py-1.5 border border-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
              >
                {SUPPORTED_CURRENCIES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.code} ({c.symbol})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 4-Step Progress Indicator */}
          <div className="grid grid-cols-4 gap-2 mt-4 pt-4 border-t border-slate-800/80 text-center text-xs font-semibold">
            <div
              className={`flex items-center justify-center gap-1.5 py-1 px-2 rounded-lg ${
                step === 1
                  ? "bg-blue-600 text-white"
                  : step > 1
                  ? "bg-emerald-600/30 text-emerald-300"
                  : "bg-slate-800/50 text-slate-400"
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-white/20 text-[10px] flex items-center justify-center font-bold">
                {step > 1 ? "✓" : "1"}
              </span>
              <span className="hidden sm:inline">1. Details</span>
            </div>

            <div
              className={`flex items-center justify-center gap-1.5 py-1 px-2 rounded-lg ${
                step === 2
                  ? "bg-blue-600 text-white"
                  : step > 2
                  ? "bg-emerald-600/30 text-emerald-300"
                  : "bg-slate-800/50 text-slate-400"
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-white/20 text-[10px] flex items-center justify-center font-bold">
                {step > 2 ? "✓" : "2"}
              </span>
              <span className="hidden sm:inline">2. Time Slot</span>
            </div>

            <div
              className={`flex items-center justify-center gap-1.5 py-1 px-2 rounded-lg ${
                step === 3
                  ? "bg-blue-600 text-white"
                  : step > 3
                  ? "bg-emerald-600/30 text-emerald-300"
                  : "bg-slate-800/50 text-slate-400"
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-white/20 text-[10px] flex items-center justify-center font-bold">
                {step > 3 ? "✓" : "3"}
              </span>
              <span className="hidden sm:inline">3. Payment</span>
            </div>

            <div
              className={`flex items-center justify-center gap-1.5 py-1 px-2 rounded-lg ${
                step === 4 ? "bg-emerald-600 text-white" : "bg-slate-800/50 text-slate-400"
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-white/20 text-[10px] flex items-center justify-center font-bold">
                4
              </span>
              <span className="hidden sm:inline">4. WhatsApp</span>
            </div>
          </div>
        </div>

        {/* MODAL BODY (SCROLLABLE) */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
          {submissionError && (
            <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Submission Notice</p>
                <p className="text-xs mt-0.5">{submissionError}</p>
              </div>
            </div>
          )}

          {/* STEP 1: STUDENT DETAILS & GOALS */}
          {step === 1 && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Step 1: Student Information
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Enter your contact information so Ahmad Raza can prepare your personalized lessons.
                  </p>
                </div>
                <div className="hidden sm:block text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60">
                  Fixed Rate: ${plan.price} {plan.period}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Student Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sara Ali"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    WhatsApp Number (with Country Code) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +92 300 1234567 or +1 415..."
                    value={formData.studentWhatsApp}
                    onChange={(e) => setFormData({ ...formData, studentWhatsApp: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="student@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                {/* Subject / Course */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject / Course <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none cursor-pointer"
                  >
                    <option value="GED Mathematical Reasoning">GED — Mathematical Reasoning</option>
                    <option value="GED Reasoning Through Language Arts (RLA)">GED — English / RLA</option>
                    <option value="GED Science">GED — Science</option>
                    <option value="GED Social Studies">GED — Social Studies</option>
                    <option value="Quran With Tajweed">Quran With Tajweed & Reading</option>
                    <option value="Diploma in Web Design & Digital Marketing">Diploma in Web Design & Digital Marketing</option>
                  </select>
                </div>

                {/* Preferred Language */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Instruction Language
                  </label>
                  <select
                    value={formData.preferredLanguage}
                    onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none cursor-pointer"
                  >
                    <option value="English & Urdu (Bilingual)">Bilingual (English & Urdu - Recommended)</option>
                    <option value="English Only">English Only</option>
                    <option value="Urdu Only">Urdu Only</option>
                  </select>
                </div>

                {/* Student Level / Background */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Current Level / Grade
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. GED Candidate / High School / Beginner"
                    value={formData.gradeOrQualification}
                    onChange={(e) => setFormData({ ...formData, gradeOrQualification: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Learning Goals */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Your Learning Goal or Target Exam Date
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Aiming to pass GED Math in 4 weeks, need help with word problems and quadratic equations."
                  value={formData.learningGoal}
                  onChange={(e) => setFormData({ ...formData, learningGoal: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                />
              </div>

              {/* Included in this plan summary */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Key Features in {plan.name} Plan:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                  {plan.features.slice(0, 6).map((f, i) => {
                    const text = typeof f === "string" ? f : f.text;
                    return (
                      <div key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="line-clamp-1">{text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: AVAILABLE SESSION TIMES & TIME SLOT SELECTION */}
          {step === 2 && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Step 2: Select Session Date & Time Slot
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Pick your preferred start date and time slot for your 1-on-1 tutoring sessions.
                  </p>
                </div>
                <div className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60">
                  Instant Availability
                </div>
              </div>

              {/* Timezone Notice */}
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/50 flex items-center justify-between text-xs text-blue-900 dark:text-blue-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Teacher Time: <strong>Asia/Karachi (GMT+5)</strong></span>
                </div>
                <span className="text-slate-500 dark:text-slate-400">
                  Your Timezone: <strong>{formData.studentTimeZone}</strong>
                </span>
              </div>

              {/* Date Selection: Visual Chips */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  1. Choose Date <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                  {availableDates.slice(0, 7).map((d) => (
                    <button
                      key={d.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, selectedDate: d.value })}
                      className={`p-2 rounded-xl text-center border transition-all cursor-pointer ${
                        formData.selectedDate === d.value
                          ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                          : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-blue-400"
                      }`}
                    >
                      <div className="text-[10px] uppercase font-bold opacity-80">{d.weekday}</div>
                      <div className="text-xs font-extrabold mt-0.5">{d.label}</div>
                    </button>
                  ))}
                </div>
                {/* Secondary date picker if user wants beyond the first week */}
                <div className="mt-2.5 flex items-center gap-2 text-xs">
                  <span className="text-slate-500 dark:text-slate-400">Or pick specific date:</span>
                  <input
                    type="date"
                    value={formData.selectedDate}
                    onChange={(e) => setFormData({ ...formData, selectedDate: e.target.value })}
                    className="px-2.5 py-1 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Available Time Slots */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  2. Choose Available Time Slot <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.time}
                      type="button"
                      onClick={() => setFormData({ ...formData, selectedTime: slot.time })}
                      className={`p-2.5 rounded-xl text-left border transition-all flex items-center justify-between cursor-pointer ${
                        formData.selectedTime === slot.time
                          ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                          : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-blue-400"
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold">{slot.time}</div>
                        <div
                          className={`text-[10px] ${
                            formData.selectedTime === slot.time ? "text-blue-100" : "text-slate-400"
                          }`}
                        >
                          {slot.label} Slot
                        </div>
                      </div>
                      {formData.selectedTime === slot.time && (
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional message / schedule preference */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Frequency or Scheduling Preference
                </label>
                <select
                  value={formData.preferredFrequency}
                  onChange={(e) => setFormData({ ...formData, preferredFrequency: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  <option value="Demo / Trial Session First">First 30-Min Trial Session First</option>
                  <option value="3 Classes / Week (Regular)">3 Classes / Week (Recommended)</option>
                  <option value="5 Classes / Week (Intensive)">5 Classes / Week (Intensive Prep)</option>
                  <option value="Weekend Classes Only">Weekend Only (Saturday & Sunday)</option>
                  <option value="Custom Flexible Schedule">Custom Flexible Schedule</option>
                </select>
              </div>
            </div>
          )}

          {/* STEP 3: PAYMENT & VERIFICATION */}
          {step === 3 && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Step 3: Secure Payment & Verification
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Transfer the fee using your preferred method and provide your Transaction ID (TID) or screenshot.
                  </p>
                </div>
              </div>

              {/* Payment Summary Box */}
              <div className="p-4 rounded-2xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                    Selected Package
                  </div>
                  <div className="text-base font-extrabold text-white">
                    {plan.type === "monthly" ? "Monthly" : "Hourly"} {plan.name} Plan
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    Session on {formData.selectedDate} at {formData.selectedTime}
                  </div>
                </div>

                <div className="sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-800">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                    Total Amount Due
                  </div>
                  <div className="text-2xl font-black text-white">
                    ${plan.price} USD
                  </div>
                  {selectedCurrency !== "USD" && (
                    <div className="text-xs font-semibold text-emerald-400">
                      ≈ {formData.convertedAmount}
                    </div>
                  )}
                </div>
              </div>

              {/* Payment Method Cards */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Select Payment Method:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                  {PAYMENT_METHODS.map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: method.name })}
                      className={`p-2.5 rounded-xl text-center border text-xs font-bold transition-all cursor-pointer ${
                        formData.paymentMethod === method.name
                          ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                          : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-blue-400"
                      }`}
                    >
                      {method.name}
                    </button>
                  ))}
                </div>

                {/* Account details for chosen payment method */}
                {(() => {
                  const currentMethod =
                    PAYMENT_METHODS.find((m) => m.name === formData.paymentMethod) || PAYMENT_METHODS[0];
                  return (
                    <div className="p-4 rounded-2xl bg-blue-50/60 dark:bg-slate-800/70 border border-blue-200/80 dark:border-slate-700 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900 dark:text-white">
                          {currentMethod.name} Account Details:
                        </span>
                        <span className="text-[11px] font-semibold text-blue-700 dark:text-blue-400">
                          {currentMethod.country}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block font-semibold uppercase">
                              Account Title
                            </span>
                            <span className="font-bold text-slate-800 dark:text-slate-100">
                              {currentMethod.accountTitle}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => copyToClipboard(currentMethod.accountTitle, "title")}
                            className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 cursor-pointer"
                            title="Copy Title"
                          >
                            {copiedField === "title" ? (
                              <Check className="w-4 h-4 text-emerald-500" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>

                        <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block font-semibold uppercase">
                              Account / Number
                            </span>
                            <span className="font-bold font-mono text-slate-800 dark:text-slate-100">
                              {currentMethod.accountNumber}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => copyToClipboard(currentMethod.accountNumber, "number")}
                            className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 cursor-pointer"
                            title="Copy Account Number"
                          >
                            {copiedField === "number" ? (
                              <Check className="w-4 h-4 text-emerald-500" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>

                      {currentMethod.instructions && (
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                          ℹ {currentMethod.instructions}
                        </p>
                      )}
                    </div>
                  );
                })()}
              </div>

              {/* Transaction Reference & Screenshot Upload */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Transaction ID / Reference (TID) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. TRX-982314 or Bank Reference"
                    value={formData.transactionReference}
                    onChange={(e) => setFormData({ ...formData, transactionReference: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Enter the reference from your bank/wallet SMS or receipt.
                  </p>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Upload Payment Screenshot (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="plan-modal-screenshot-input"
                    />
                    <label
                      htmlFor="plan-modal-screenshot-input"
                      className="flex items-center justify-center gap-2 w-full px-3.5 py-2.5 text-xs font-semibold rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-500 transition-colors cursor-pointer"
                    >
                      <Upload className="w-4 h-4 text-blue-500" />
                      <span>
                        {formData.paymentScreenshotFile
                          ? formData.paymentScreenshotFile.name
                          : "Choose Receipt Screenshot"}
                      </span>
                    </label>
                  </div>
                  {formData.paymentScreenshotPreview && (
                    <div className="mt-2 flex items-center gap-2">
                      <img
                        src={formData.paymentScreenshotPreview}
                        alt="Receipt preview"
                        className="w-10 h-10 object-cover rounded-lg border border-slate-200"
                      />
                      <span className="text-[11px] text-emerald-600 font-medium">
                        ✓ Image attached
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: WHATSAPP REDIRECTION & CONFIRMATION */}
          {step === 4 && (
            <div className="space-y-6 text-center py-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Payment Submitted & Reserved
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-3">
                  Booking Confirmed for {formData.studentName}!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-md mx-auto">
                  Your reservation for the <strong>{plan.name} Package</strong> (${plan.price} {plan.period}) is ready. We are redirecting you to WhatsApp to connect directly with Ahmad Raza.
                </p>
              </div>

              {/* Receipt Snapshot Card */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-left max-w-md mx-auto text-xs space-y-2">
                <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-slate-500">Package:</span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {plan.type === "monthly" ? "Monthly" : "Hourly"} {plan.name} (${plan.price}{plan.period})
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-slate-500">Subject:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {formData.subject}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-slate-500">Session Schedule:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {formData.selectedDate} at {formData.selectedTime}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-slate-500">Transaction ID (TID):</span>
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
                    {formData.transactionReference}
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Payment Method:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {formData.paymentMethod}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                {redirectUrl && (
                  <a
                    href={redirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="plan-modal-whatsapp-btn"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                    <span>Open WhatsApp to Finalize Now</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all cursor-pointer"
                >
                  Done / Close Window
                </button>
              </div>
            </div>
          )}
        </div>

        {/* MODAL FOOTER: NAVIGATION BUTTONS */}
        {step < 4 && (
          <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3 shrink-0">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((prev) => (prev - 1) as 1 | 2 | 3)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-xs sm:text-sm hover:bg-slate-100 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-medium text-xs sm:text-sm cursor-pointer"
              >
                Cancel
              </button>
            )}

            <div className="flex items-center gap-3">
              {step === 1 && (
                <button
                  type="button"
                  disabled={!isStep1Valid}
                  onClick={() => setStep(2)}
                  className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white shadow-md transition-all ${
                    isStep1Valid
                      ? "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                      : "bg-slate-400 dark:bg-slate-700 cursor-not-allowed opacity-60"
                  }`}
                >
                  <span>Select Time Slot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              {step === 2 && (
                <button
                  type="button"
                  disabled={!isStep2Valid}
                  onClick={() => setStep(3)}
                  className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white shadow-md transition-all ${
                    isStep2Valid
                      ? "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                      : "bg-slate-400 dark:bg-slate-700 cursor-not-allowed opacity-60"
                  }`}
                >
                  <span>Proceed to Payment (${plan.price})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              {step === 3 && (
                <button
                  type="button"
                  disabled={!isStep3Valid || isSubmitting}
                  onClick={handleFinalSubmit}
                  className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white shadow-md transition-all ${
                    isStep3Valid && !isSubmitting
                      ? "bg-emerald-600 hover:bg-emerald-700 cursor-pointer"
                      : "bg-slate-400 dark:bg-slate-700 cursor-not-allowed opacity-60"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Confirming...</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4" />
                      <span>Confirm & Open WhatsApp</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
