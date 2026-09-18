import React, { useState, useEffect } from "react";
import {
  CheckCircle2,
  Calendar,
  Clock,
  CreditCard,
  User,
  ShieldCheck,
  Upload,
  Copy,
  Check,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  DollarSign,
  AlertCircle,
  HelpCircle,
  Phone,
} from "lucide-react";
import {
  PAYMENT_METHODS,
  TEACHER_INFO,
  SUBJECTS_DATA,
  SUPPORTED_CURRENCIES,
  CurrencyCode,
} from "../data";
import { BookingFormState, BookingStep, CurrencyRatesResponse } from "../types";

interface BookingSystemProps {
  initialSubject?: string;
}

export const BookingSystem: React.FC<BookingSystemProps> = ({ initialSubject = "" }) => {
  const [currentStep, setCurrentStep] = useState<BookingStep>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [completedHandoffUrl, setCompletedHandoffUrl] = useState<string | null>(null);
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
  const [rateNote, setRateNote] = useState<string>("");

  // Booking Form State
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
    preferredFrequency: "1 Demo Session (30 min)",

    demoFeeUSD: 3,
    targetCurrency: "USD",
    convertedAmount: "$3.00 USD",
    paymentMethod: "Nayapay",
    transactionReference: "",
    paymentScreenshotFile: null,
    paymentScreenshotPreview: null,
    proofUrl: null,

    selectedDate: "",
    selectedTime: "11:00 AM (PKT)",
    studentTimeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC",
    additionalMessage: "",
  });

  // Keep subject in sync if initialSubject prop changes
  useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  // Fetch live exchange rates on mount
  useEffect(() => {
    fetch("/api/exchange-rates")
      .then((res) => res.json())
      .then((data: CurrencyRatesResponse) => {
        if (data.rates) {
          setCurrencyRates(data.rates);
          if (data.note) setRateNote(data.note);
        }
      })
      .catch(() => {
        // Fallbacks already in state
      });
  }, []);

  // Recalculate converted amount when currency changes
  useEffect(() => {
    const rate = currencyRates[selectedCurrency] || 1;
    const amount = (formData.demoFeeUSD * rate).toFixed(selectedCurrency === "PKR" ? 0 : 2);
    const symbol = SUPPORTED_CURRENCIES.find((c) => c.code === selectedCurrency)?.symbol || "$";
    const formatted = `${symbol}${amount} ${selectedCurrency}`;

    setFormData((prev) => ({
      ...prev,
      targetCurrency: selectedCurrency,
      convertedAmount: formatted,
    }));
  }, [selectedCurrency, currencyRates, formData.demoFeeUSD]);

  const copyToClipboard = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size < 10MB
    if (file.size > 10 * 1024 * 1024) {
      alert("File size exceeds 10MB. Please choose a smaller image.");
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

  // Step 1 validation
  const isStep1Valid =
    formData.studentName.trim().length > 1 &&
    formData.email.trim().includes("@") &&
    formData.studentWhatsApp.trim().length > 6 &&
    formData.subject.trim().length > 0;

  // Step 2 validation
  const isStep2Valid =
    Boolean(formData.transactionReference.trim()) ||
    Boolean(formData.paymentScreenshotFile) ||
    Boolean(formData.paymentScreenshotPreview);

  // Step 3 validation
  const isStep3Valid = Boolean(formData.selectedDate) && Boolean(formData.selectedTime);

  // Final Step 4: Submission Handshake
  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      let uploadedProofUrl = formData.proofUrl;

      // 1. If screenshot file exists, upload to server first
      if (formData.paymentScreenshotFile && !uploadedProofUrl) {
        const uploadBody = new FormData();
        uploadBody.append("screenshot", formData.paymentScreenshotFile);
        uploadBody.append("reference", formData.transactionReference || "NoRef");

        try {
          const uploadRes = await fetch("/api/upload-proof", {
            method: "POST",
            body: uploadBody,
          });
          const uploadData = await uploadRes.json();
          if (uploadData.success && uploadData.proofUrl) {
            uploadedProofUrl = uploadData.proofUrl;
          }
        } catch (uploadErr) {
          console.warn("Screenshot upload skipped or failed, continuing handshake", uploadErr);
        }
      }

      // 2. Call backend handshake
      const handshakePayload = {
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
        learningGoal: formData.learningGoal || "General Improvement",
        examName: formData.examName || "N/A",
        examDate: formData.examDate || "Flexible",
        preferredFrequency: formData.preferredFrequency,
        demoFeeUSD: formData.demoFeeUSD,
        convertedAmount: formData.convertedAmount,
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

      setCompletedHandoffUrl(data.redirectUrl);
      setCurrentStep(4);

      // Open WhatsApp automatically
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

  // Available dates: Next 14 days
  const availableDates: { value: string; label: string }[] = [];
  const today = new Date();
  for (let i = 1; i <= 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const iso = d.toISOString().split("T")[0];
    const formatted = d.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
    availableDates.push({ value: iso, label: formatted });
  }

  // Pre-configured timeslots
  const timeSlots = [
    "09:00 AM (PKT)",
    "10:00 AM (PKT)",
    "11:30 AM (PKT)",
    "02:00 PM (PKT)",
    "03:30 PM (PKT)",
    "05:00 PM (PKT)",
    "06:30 PM (PKT)",
    "08:00 PM (PKT)",
    "09:00 PM (PKT)",
  ];

  return (
    <section id="booking" className="w-full py-20 md:py-28 bg-slate-900 dark:bg-slate-950 text-white relative transition-colors">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800/80">
            Official Demo Booking System
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Schedule Your 1-on-1 Demo Session
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            Complete the 3-step verification to reserve your trial slot and connect directly with Ahmad Raza.
          </p>
        </div>

        {/* Multi-step Progress Bar */}
        <div className="w-full max-w-5xl mx-auto bg-slate-800/70 dark:bg-slate-900/80 p-4 rounded-2xl border border-slate-700/80 dark:border-slate-800 mb-8 backdrop-blur-sm">
          <div className="grid grid-cols-4 gap-2 text-center text-xs">
            <button
              onClick={() => setCurrentStep(1)}
              className={`flex flex-col items-center gap-1 cursor-pointer ${
                currentStep >= 1 ? "text-blue-400 font-bold" : "text-slate-400"
              }`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${
                  currentStep === 1
                    ? "bg-blue-600 text-white"
                    : currentStep > 1
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-700 text-slate-300"
                }`}
              >
                {currentStep > 1 ? <Check className="w-3.5 h-3.5" /> : "1"}
              </div>
              <span className="hidden sm:inline">Student Details</span>
            </button>

            <button
              onClick={() => isStep1Valid && setCurrentStep(2)}
              disabled={!isStep1Valid}
              className={`flex flex-col items-center gap-1 ${
                isStep1Valid ? "cursor-pointer" : "cursor-not-allowed opacity-50"
              } ${currentStep >= 2 ? "text-blue-400 font-bold" : "text-slate-400"}`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${
                  currentStep === 2
                    ? "bg-blue-600 text-white"
                    : currentStep > 2
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-700 text-slate-300"
                }`}
              >
                {currentStep > 2 ? <Check className="w-3.5 h-3.5" /> : "2"}
              </div>
              <span className="hidden sm:inline">Demo Fee ($3)</span>
            </button>

            <button
              onClick={() => isStep1Valid && isStep2Valid && setCurrentStep(3)}
              disabled={!isStep1Valid || !isStep2Valid}
              className={`flex flex-col items-center gap-1 ${
                isStep1Valid && isStep2Valid ? "cursor-pointer" : "cursor-not-allowed opacity-50"
              } ${currentStep >= 3 ? "text-blue-400 font-bold" : "text-slate-400"}`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${
                  currentStep === 3
                    ? "bg-blue-600 text-white"
                    : currentStep > 3
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-700 text-slate-300"
                }`}
              >
                {currentStep > 3 ? <Check className="w-3.5 h-3.5" /> : "3"}
              </div>
              <span className="hidden sm:inline">Date & Time</span>
            </button>

            <div
              className={`flex flex-col items-center gap-1 ${
                currentStep === 4 ? "text-emerald-400 font-bold" : "text-slate-400"
              }`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${
                  currentStep === 4 ? "bg-emerald-600 text-white" : "bg-slate-700 text-slate-300"
                }`}
              >
                4
              </div>
              <span className="hidden sm:inline">Confirmation</span>
            </div>
          </div>
        </div>

        {/* Main Step Cards Container */}
        <div className="w-full max-w-5xl mx-auto bg-slate-800 dark:bg-slate-900 rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-700 dark:border-slate-800 shadow-2xl">
          {/* STEP 1: STUDENT INFORMATION */}
          {currentStep === 1 && (
            <div id="booking-step-1" className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-slate-700 pb-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-400" />
                  <span>Step 1: Student Information</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Please provide your contact details so teacher Ahmad Raza can review your subject needs.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    Student Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="e.g. Sarah Khan"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="student@example.com"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>

                {/* WhatsApp / Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    Student WhatsApp / Mobile (with country code) <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.studentWhatsApp}
                    onChange={(e) => setFormData({ ...formData, studentWhatsApp: e.target.value })}
                    placeholder="e.g. +92 300 1234567 or +1 415 555 2671"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>

                {/* Country / Location */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    Your Country
                  </label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="e.g. United States, Pakistan, UK, UAE"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>

                {/* Age Group */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    Student Age Group
                  </label>
                  <select
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 text-sm"
                  >
                    <option value="Child (Under 13)">Child (Under 13)</option>
                    <option value="Teenager (13 - 17)">Teenager (13 - 17)</option>
                    <option value="Adult (18+)">Adult (18+)</option>
                  </select>
                </div>

                {/* Guardian Name (if under 18) */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    Guardian / Parent Name (if student is under 18)
                  </label>
                  <input
                    type="text"
                    value={formData.guardianName}
                    onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                    placeholder="Guardian full name"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>

                {/* Subject Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    Subject Needed <span className="text-red-400">*</span>
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 text-sm font-medium"
                  >
                    {SUBJECTS_DATA.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                    <option value="General GED Preparation">General GED Preparation (All Subjects)</option>
                    <option value="Custom Consultation / Other">Custom Consultation / Other</option>
                  </select>
                </div>

                {/* Preferred Language */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    Preferred Instruction Language
                  </label>
                  <select
                    value={formData.preferredLanguage}
                    onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 text-sm"
                  >
                    <option value="English & Urdu (Bilingual)">English & Urdu (Bilingual)</option>
                    <option value="English Only">English Only</option>
                    <option value="Urdu Only">Urdu Only</option>
                  </select>
                </div>

                {/* Learning Goal */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    Main Learning Goal or Difficult Topics
                  </label>
                  <input
                    type="text"
                    value={formData.learningGoal}
                    onChange={(e) => setFormData({ ...formData, learningGoal: e.target.value })}
                    placeholder="e.g. Passing GED Math algebra next month, learning Tajweed Makharij, or mastering SEO"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>
              </div>

              {/* Step 1 CTA */}
              <div className="pt-6 border-t border-slate-700 flex justify-end">
                <button
                  type="button"
                  disabled={!isStep1Valid}
                  onClick={() => setCurrentStep(2)}
                  className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all ${
                    isStep1Valid
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md cursor-pointer"
                      : "bg-slate-700 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  <span>Continue to Step 2: Payment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: DEMO FEE PAYMENT & CURRENCY CONVERTER */}
          {currentStep === 2 && (
            <div id="booking-step-2" className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-slate-700 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-blue-400" />
                    <span>Step 2: Demo Fee & Payment Method</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Demo fee: <strong>$3 USD (30-Minute Trial Class)</strong>. Pay via your preferred local or international channel.
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-blue-950 text-blue-400 rounded-full border border-blue-800 w-fit">
                  Fee: $3 USD
                </span>
              </div>

              {/* Currency Selector & Converted Rate Display */}
              <div className="bg-slate-900/90 p-4 sm:p-5 rounded-2xl border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    Select Your Currency (Auto Converted)
                  </div>
                  <div className="flex items-center gap-3">
                    <select
                      value={selectedCurrency}
                      onChange={(e) => setSelectedCurrency(e.target.value as CurrencyCode)}
                      className="bg-slate-800 border border-slate-600 rounded-xl px-3 py-2 text-white font-bold text-sm focus:outline-none focus:border-blue-500"
                    >
                      {SUPPORTED_CURRENCIES.map((cur) => (
                        <option key={cur.code} value={cur.code}>
                          {cur.code} — {cur.name} ({cur.symbol})
                        </option>
                      ))}
                    </select>
                    <div className="text-xl sm:text-2xl font-black text-emerald-400">
                      {formData.convertedAmount}
                    </div>
                  </div>
                  {rateNote && (
                    <div className="text-[11px] text-slate-400 mt-1">
                      {rateNote}
                    </div>
                  )}
                </div>

                <div className="text-xs text-slate-400 max-w-xs bg-slate-800/80 p-3 rounded-xl border border-slate-700/60">
                  <span className="font-semibold text-slate-200">Note:</span> Convert and transfer equivalent amount to the payment account below, then attach the receipt reference or screenshot.
                </div>
              </div>

              {/* Payment Methods Tabs */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">
                  Choose Payment Account
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                  {PAYMENT_METHODS.map((pm) => (
                    <button
                      key={pm.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: pm.name })}
                      className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                        formData.paymentMethod === pm.name
                          ? "bg-blue-600 text-white border-blue-500 shadow-sm"
                          : "bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-700"
                      }`}
                    >
                      <div className="font-bold text-sm">{pm.name}</div>
                      <div className="text-[10px] opacity-80">{pm.country}</div>
                    </button>
                  ))}
                </div>

                {/* Selected Method Details Card */}
                {(() => {
                  const method =
                    PAYMENT_METHODS.find((m) => m.name === formData.paymentMethod) ||
                    PAYMENT_METHODS[0];

                  return (
                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-700 space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-base">{method.name}</span>
                          <span className="text-[10px] font-semibold bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                            {method.type}
                          </span>
                        </div>
                        <span className="text-xs text-blue-400 font-medium">{method.country}</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Account Title */}
                        <div className="bg-slate-800/80 p-3 rounded-xl flex items-center justify-between">
                          <div>
                            <div className="text-[10px] text-slate-400 uppercase font-semibold">
                              Account Title
                            </div>
                            <div className="text-sm font-bold text-white mt-0.5">
                              {method.accountTitle}
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => copyToClipboard(method.accountTitle, `title-${method.id}`)}
                            className="p-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white transition-colors cursor-pointer"
                            title="Copy Account Title"
                          >
                            {copiedField === `title-${method.id}` ? (
                              <Check className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>

                        {/* Account Number / Email */}
                        <div className="bg-slate-800/80 p-3 rounded-xl flex items-center justify-between">
                          <div>
                            <div className="text-[10px] text-slate-400 uppercase font-semibold">
                              {method.id === "bank-alfalah" ? "Account Number" : method.id === "payoneer" ? "Payoneer Email" : "Mobile / Account"}
                            </div>
                            <div className="text-sm font-bold text-blue-300 mt-0.5 font-mono">
                              {method.accountNumber}
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => copyToClipboard(method.accountNumber, `num-${method.id}`)}
                            className="p-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white transition-colors cursor-pointer"
                            title="Copy Account Number"
                          >
                            {copiedField === `num-${method.id}` ? (
                              <Check className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>

                      {method.instructions && (
                        <p className="text-xs text-slate-400 italic">
                          💡 {method.instructions}
                        </p>
                      )}
                    </div>
                  );
                })()}
              </div>

              {/* Payment Proof Submission */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                {/* Transaction ID / Reference */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    Transaction Reference / ID <span className="text-slate-400">(Optional if uploading screenshot)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.transactionReference}
                    onChange={(e) => setFormData({ ...formData, transactionReference: e.target.value })}
                    placeholder="e.g. TXN-894125 or sender bank reference"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm font-mono"
                  />
                </div>

                {/* Screenshot Upload */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    Attach Payment Screenshot / Receipt
                  </label>
                  <label className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 border border-dashed border-slate-600 hover:border-blue-500 rounded-xl px-4 py-3 cursor-pointer transition-colors text-sm text-slate-300">
                    <Upload className="w-4 h-4 text-blue-400" />
                    <span className="truncate">
                      {formData.paymentScreenshotFile
                        ? formData.paymentScreenshotFile.name
                        : "Upload receipt image"}
                    </span>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Screenshot Preview */}
              {formData.paymentScreenshotPreview && (
                <div className="flex items-center gap-3 p-3 bg-slate-900 rounded-xl border border-slate-700 w-fit">
                  <img
                    src={formData.paymentScreenshotPreview}
                    alt="Payment Proof Preview"
                    className="w-12 h-12 rounded object-cover border border-slate-700"
                  />
                  <div className="text-xs">
                    <div className="font-semibold text-white">Screenshot Attached</div>
                    <div className="text-emerald-400">Ready to transmit with booking</div>
                  </div>
                </div>
              )}

              {/* Step 2 CTAs */}
              <div className="pt-6 border-t border-slate-700 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white text-sm font-semibold cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  disabled={!isStep2Valid}
                  onClick={() => setCurrentStep(3)}
                  className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all ${
                    isStep2Valid
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md cursor-pointer"
                      : "bg-slate-700 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  <span>Continue to Step 3: Select Time</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: DATE & TIME SELECTION (TIMETABLE) */}
          {currentStep === 3 && (
            <div id="booking-step-3" className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-slate-700 pb-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <span>Step 3: Select Class Date & Time</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Working hours: <strong>Monday to Saturday, 08:00 AM – 10:00 PM (PKT)</strong>. Choose a slot that suits your schedule.
                </p>
              </div>

              {/* Date selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">
                  Choose Preferred Date <span className="text-red-400">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
                  {availableDates.map((d) => {
                    const isSelected = formData.selectedDate === d.value;
                    return (
                      <button
                        key={d.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, selectedDate: d.value })}
                        className={`p-2.5 rounded-xl text-center border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-blue-600 text-white border-blue-500 font-bold shadow-sm"
                            : "bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-700"
                        }`}
                      >
                        <div className="text-xs font-semibold">{d.label.split(",")[0]}</div>
                        <div className="text-[11px] opacity-80">{d.label.split(",")[1]}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slot selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">
                  Select Time Slot (Pakistan Standard Time) <span className="text-red-400">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {timeSlots.map((slot) => {
                    const isSelected = formData.selectedTime === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setFormData({ ...formData, selectedTime: slot })}
                        className={`p-3 rounded-xl text-center border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                          isSelected
                            ? "bg-blue-600 text-white border-blue-500 font-bold shadow-sm"
                            : "bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-700"
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5 opacity-70" />
                        <span className="text-xs sm:text-sm">{slot}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Google Calendar Alternative option */}
              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-xs text-slate-300">
                  Prefer direct calendar integration? You can also check teacher's live availability via Google Calendar appointment scheduler.
                </div>
                <a
                  href={TEACHER_INFO.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 bg-slate-800 hover:bg-slate-700 px-3.5 py-2 rounded-lg transition-colors shrink-0"
                >
                  <span>Open Google Calendar</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Additional message / Question */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                  Questions or Notes for Ahmad Raza (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.additionalMessage}
                  onChange={(e) => setFormData({ ...formData, additionalMessage: e.target.value })}
                  placeholder="e.g. I need special focus on quadratic equations, or prefer lessons on Zoom."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>

              {/* Error Message */}
              {submissionError && (
                <div className="p-4 rounded-xl bg-red-950/80 border border-red-800 text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{submissionError}</span>
                </div>
              )}

              {/* Step 3 CTAs */}
              <div className="pt-6 border-t border-slate-700 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white text-sm font-semibold cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  disabled={!isStep3Valid || isSubmitting}
                  onClick={handleFinalSubmit}
                  className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all ${
                    isStep3Valid && !isSubmitting
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg cursor-pointer"
                      : "bg-slate-700 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? (
                    <span>Processing Handshake...</span>
                  ) : (
                    <>
                      <span>Complete Booking & Connect on WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: CONFIRMATION & WHATSAPP HANDSHAKE */}
          {currentStep === 4 && (
            <div id="booking-step-4" className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  Booking Transmitted Successfully!
                </h3>
                <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.studentName}</strong>. Your 1-on-1 demo for <strong className="text-blue-400">{formData.subject}</strong> on <strong className="text-white">{formData.selectedDate} at {formData.selectedTime}</strong> has been structured.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 text-left max-w-md mx-auto text-xs space-y-2.5">
                <div className="flex justify-between pb-2 border-b border-slate-800 font-bold text-slate-200">
                  <span>Student Name:</span>
                  <span className="text-white">{formData.studentName}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Selected Subject:</span>
                  <span className="text-white font-medium">{formData.subject}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Demo Fee:</span>
                  <span className="text-emerald-400 font-bold">{formData.convertedAmount}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Payment Channel:</span>
                  <span className="text-white">{formData.paymentMethod}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Reserved Schedule:</span>
                  <span className="text-blue-300 font-medium">
                    {formData.selectedDate} ({formData.selectedTime})
                  </span>
                </div>
              </div>

              {/* WhatsApp Connection Button */}
              {completedHandoffUrl && (
                <div className="pt-2 flex flex-col items-center gap-3 max-w-md mx-auto">
                  <a
                    href={completedHandoffUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base py-4 px-6 rounded-xl shadow-lg transition-all cursor-pointer"
                  >
                    <span>Open Teacher WhatsApp Chat</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <p className="text-xs text-slate-400">
                    If WhatsApp did not open automatically, click the button above to send your pre-formatted booking details directly to Ahmad Raza.
                  </p>
                </div>
              )}

              <div className="pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => {
                    setCurrentStep(1);
                    setCompletedHandoffUrl(null);
                  }}
                  className="text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Book Another Demo Session
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
