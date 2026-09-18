export interface SelectedPlanInfo {
  id: string;
  name: string; // "Basic" | "Standard" | "Premium"
  type: "hourly" | "monthly";
  price: number; // 3, 4, 5, or 30, 60, 90
  period: string; // "/hr" or "/month"
  badge?: string;
  summary?: string;
  bestFor?: string;
  features: (string | { text: string; status: string })[];
}

export interface BookingFormState {
  // Step 1: Student Information
  studentName: string;
  email: string;
  studentWhatsApp: string;
  country: string;
  age: string;
  guardianName: string;
  gradeOrQualification: string;
  department: string;
  subject: string;
  preferredLanguage: string;
  currentLevel: string;
  learningGoal: string;
  examName: string;
  examDate: string;
  preferredFrequency: string;

  // Step 2: Payment & Fee
  packageName?: string;
  billingType?: "hourly" | "monthly";
  demoFeeUSD: number;
  targetCurrency: string;
  convertedAmount: string;
  paymentMethod: string;
  transactionReference: string;
  paymentScreenshotFile: File | null;
  paymentScreenshotPreview: string | null;
  proofUrl: string | null;

  // Step 3: Date & Time
  selectedDate: string;
  selectedTime: string;
  studentTimeZone: string;
  additionalMessage: string;
}

export type BookingStep = 1 | 2 | 3 | 4;

export interface CurrencyRatesResponse {
  rates: Record<string, number>;
  source: string;
  updatedAt: string;
  note?: string;
}
