export type LanguageCode = "en" | "ur" | "hi" | "fr" | "ar" | "es" | "de" | "zh";

export interface LanguageOption {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  dir: "ltr" | "rtl";
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸", dir: "ltr" },
  { code: "ur", name: "Urdu", nativeName: "اردو", flag: "🇵🇰", dir: "rtl" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳", dir: "ltr" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷", dir: "ltr" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦", dir: "rtl" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸", dir: "ltr" },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  { code: "zh", name: "Chinese", nativeName: "简体中文", flag: "🇨🇳", dir: "ltr" },
];

export interface TranslationDictionary {
  // Nav
  navAbout: string;
  navClasses: string;
  navCourses: string;
  navDemoVideo: string;
  navReviews: string;
  navPricing: string;
  navFaq: string;
  navStudentLms: string;
  navBookDemo: string;
  navCertified: string;
  navTagline: string;

  // Hero
  heroTrustBadge: string;
  heroHeadline1: string;
  heroHeadline2: string;
  heroSubtitle: string;
  heroBookDemo: string;
  heroViewClasses: string;
  heroWatchIntro: string;
  heroStatExperience: string;
  heroStatExperienceLabel: string;
  heroStatGed: string;
  heroStatGedLabel: string;
  heroStatBilingual: string;
  heroStatBilingualLabel: string;
  heroStatRating: string;
  heroStatRatingLabel: string;
  heroAvailableDemo: string;
  heroRatingVerified: string;
  heroOneOnOne: string;
  heroLiveOnline: string;

  // Trust Strip
  trustTitle: string;

  // About
  aboutBadge: string;
  aboutTitle: string;
  aboutSubtitle: string;
  aboutP1: string;
  aboutP2: string;
  aboutP3: string;
  aboutFact1Title: string;
  aboutFact1Desc: string;
  aboutFact2Title: string;
  aboutFact2Desc: string;
  aboutFact3Title: string;
  aboutFact3Desc: string;
  aboutFact4Title: string;
  aboutFact4Desc: string;
  aboutWatchVideo: string;
  aboutScheduleTrial: string;

  // Teacher Choice
  choiceBadge: string;
  choiceTitle: string;
  choiceSubtitle: string;
  choice1Title: string;
  choice1Desc: string;
  choice2Title: string;
  choice2Desc: string;
  choice3Title: string;
  choice3Desc: string;
  choice4Title: string;
  choice4Desc: string;

  // Subjects
  subjectsBadge: string;
  subjectsTitle: string;
  subjectsSubtitle: string;
  filterAll: string;
  filterGed: string;
  filterQuran: string;
  filterMarketing: string;
  bookDemoForSubject: string;

  // Popular Courses
  coursesBadge: string;
  coursesTitle: string;
  coursesSubtitle: string;
  courseEnroll: string;
  courseDuration: string;
  courseLessons: string;

  // Facilities
  facilitiesBadge: string;
  facilitiesTitle: string;
  facilitiesSubtitle: string;

  // Expertise
  expertiseBadge: string;
  expertiseTitle: string;
  expertiseSubtitle: string;

  // Qualifications
  qualificationsBadge: string;
  qualificationsTitle: string;
  qualificationsSubtitle: string;
  viewCertificate: string;
  verifiedOfficial: string;

  // Demo Video
  videoBadge: string;
  videoTitle: string;
  videoSubtitle: string;
  videoPlaylistHeader: string;
  videoAskFaq: string;

  // Reviews
  reviewsBadge: string;
  reviewsTitle: string;
  reviewsSubtitle: string;
  reviewsScore: string;
  reviewsVerifiedBadge: string;

  // Pricing
  pricingBadge: string;
  pricingTitle: string;
  pricingSubtitle: string;
  pricingHourly: string;
  pricingMonthly: string;
  pricingPerHour: string;
  pricingPerMonth: string;
  pricingPopular: string;
  pricingChoosePlan: string;

  // Process
  processBadge: string;
  processTitle: string;
  processSubtitle: string;

  // Booking
  bookingBadge: string;
  bookingTitle: string;
  bookingSubtitle: string;
  stepContact: string;
  stepPayment: string;
  stepSchedule: string;
  stepConfirm: string;
  bookingFullName: string;
  bookingEmail: string;
  bookingPhone: string;
  bookingSubject: string;
  bookingGrade: string;
  bookingGoals: string;
  bookingNextPayment: string;
  bookingBack: string;
  bookingNextSchedule: string;
  bookingConfirmSend: string;
  bookingReceiptOptional: string;
  bookingSelectCurrency: string;
  bookingPaymentMethod: string;
  bookingSelectDate: string;
  bookingSelectTime: string;

  // LMS
  lmsBadge: string;
  lmsTitle: string;
  lmsSubtitle: string;
  lmsAccessBtn: string;
  lmsActivePortal: string;

  // FAQ
  faqBadge: string;
  faqTitle: string;
  faqSubtitle: string;

  // Final CTA
  ctaBadge: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaPrimaryBtn: string;
  ctaSecondaryBtn: string;
  ctaWhatsApp: string;

  // Footer
  footerAbout: string;
  footerQuickLinks: string;
  footerSubjects: string;
  footerContact: string;
  footerRights: string;
  footerTimezoneNotice: string;

  // Theme & Language
  themeLight: string;
  themeDark: string;
  languageSelect: string;
}

export const TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  en: {
    navAbout: "About",
    navClasses: "Classes",
    navCourses: "Courses",
    navDemoVideo: "Demo Video",
    navReviews: "Reviews",
    navPricing: "Pricing",
    navFaq: "FAQ",
    navStudentLms: "Student LMS",
    navBookDemo: "Book a Demo",
    navCertified: "Certified",
    navTagline: "GED & Quran Online Tutor",

    heroTrustBadge: "Certified GED & Quran Tutor | 4 Years of Online Teaching Experience",
    heroHeadline1: "Learn With Clarity.",
    heroHeadline2: "Prepare With Confidence.",
    heroSubtitle: "Get clear, step-by-step lessons in GED subjects, Quran with Tajweed, and Digital Marketing. Lessons are personalized to your level, goals, and learning needs.",
    heroBookDemo: "Book a Demo Class ($3)",
    heroViewClasses: "View My Classes",
    heroWatchIntro: "Watch Introduction",
    heroStatExperience: "4 Years",
    heroStatExperienceLabel: "Online Teaching",
    heroStatGed: "GED Focused",
    heroStatGedLabel: "Exam Preparation",
    heroStatBilingual: "Bilingual",
    heroStatBilingualLabel: "English & Urdu",
    heroStatRating: "5.0 Rating",
    heroStatRatingLabel: "From Students",
    heroAvailableDemo: "Available for Demo Lessons",
    heroRatingVerified: "5.0 / 5.0 Verified Student Rating",
    heroOneOnOne: "Personalized 1-on-1",
    heroLiveOnline: "Online Live Classes",

    trustTitle: "Teaching on Leading Global Learning Platforms",

    aboutBadge: "About Ahmad Raza",
    aboutTitle: "Passionate Online Educator Committed to Student Growth",
    aboutSubtitle: "With over 4 years of dedicated teaching experience across premier online platforms, I help students achieve academic breakthroughs through patient, structured, and goal-oriented lessons.",
    aboutP1: "Hello, I am Ahmad Raza. I hold a Bachelor of Science in Computer Science and an advanced certification in Islamic Studies & Quranic Tajweed. Over the past four years, I have mentored hundreds of students worldwide in preparing for the GED examination and perfecting their Quranic recitation.",
    aboutP2: "My teaching philosophy emphasizes conceptual clarity over rote memorization. Whether you are solving algebraic equations, analyzing textual passages, or mastering the articulation points of Arabic letters, every lesson is adapted to your unique learning style.",
    aboutP3: "I provide an engaging, supportive environment equipped with interactive digital whiteboards, real exam practice modules, and ongoing progress tracking via our custom LMS portal.",
    aboutFact1Title: "Student-Centric Approach",
    aboutFact1Desc: "Every curriculum is customized to address the student's individual strengths and knowledge gaps.",
    aboutFact2Title: "Exam Strategy Focus",
    aboutFact2Desc: "Proven testing strategies, timing shortcuts, and official practice questions for high scores.",
    aboutFact3Title: "Bilingual Instruction",
    aboutFact3Desc: "Comfortably taught in English, Urdu, or a bilingual balance for seamless comprehension.",
    aboutFact4Title: "Transparent Progress",
    aboutFact4Desc: "Regular feedback sessions, homework reviews, and parent updates for total peace of mind.",
    aboutWatchVideo: "Watch Intro Video",
    aboutScheduleTrial: "Schedule a Trial Class",

    choiceBadge: "Why Choose Teacher Ahmad Raza",
    choiceTitle: "Proven Teaching Methods That Deliver Real Results",
    choiceSubtitle: "Here is why students and parents across the globe trust my 1-on-1 tutoring sessions.",
    choice1Title: "High-Yield Curriculum",
    choice1Desc: "Direct focus on questions and concepts that appear most frequently on official examinations.",
    choice2Title: "Patient & Interactive",
    choice2Desc: "Safe, encouraging atmosphere where questions are welcomed and no doubt is left unaddressed.",
    choice3Title: "Digital Whiteboard Notes",
    choice3Desc: "High-resolution whiteboard notes and formula sheets provided immediately after every lesson.",
    choice4Title: "Continuous Support",
    choice4Desc: "Direct WhatsApp communication for quick question resolution between scheduled classes.",

    subjectsBadge: "Subjects & Classes",
    subjectsTitle: "Expert Tutoring Across Core Disciplines",
    subjectsSubtitle: "Comprehensive 1-on-1 programs tailored for exam success, religious fluency, and career skills.",
    filterAll: "All Programs",
    filterGed: "GED Exam Prep",
    filterQuran: "Quran & Tajweed",
    filterMarketing: "Digital Marketing",
    bookDemoForSubject: "Book Demo for This Subject",

    coursesBadge: "Popular Courses",
    coursesTitle: "Structured Learning Paths Designed for Mastery",
    coursesSubtitle: "Select from our most popular curriculums, complete with homework exercises, mock exams, and resources.",
    courseEnroll: "Enroll in Course",
    courseDuration: "Duration",
    courseLessons: "Lessons",

    facilitiesBadge: "Learning Facilities",
    facilitiesTitle: "Modern Tools for an Immersive Virtual Classroom",
    facilitiesSubtitle: "Every lesson is powered by professional digital tools ensuring high engagement and interactive learning.",

    expertiseBadge: "Teacher Expertise",
    expertiseTitle: "Deep Domain Knowledge & Proven Pedagogical Skills",
    expertiseSubtitle: "A strong academic background combined with years of practical 1-on-1 online instructional experience.",

    qualificationsBadge: "Degrees & Qualifications",
    qualificationsTitle: "Verified Academic Credentials and Certifications",
    qualificationsSubtitle: "Demonstrated competence through recognized university degrees and accredited instructional certificates.",
    viewCertificate: "View Verified Certificate",
    verifiedOfficial: "Officially Verified Credential",

    videoBadge: "Live Classroom Experience",
    videoTitle: "Watch a Live Demo Lesson & Explanation",
    videoSubtitle: "See firsthand how concepts are simplified, annotated on the digital whiteboard, and explained with utmost clarity.",
    videoPlaylistHeader: "Demo & Explanatory Lessons",
    videoAskFaq: "Have Questions? Check FAQs",

    reviewsBadge: "Student Testimonials",
    reviewsTitle: "Trusted by Students & Families Worldwide",
    reviewsSubtitle: "Read authentic feedback from learners who achieved their goals under Ahmad Raza's guidance.",
    reviewsScore: "5.0 out of 5.0 Star Rating",
    reviewsVerifiedBadge: "100% Verified Reviews",

    pricingBadge: "Simple & Transparent Pricing",
    pricingTitle: "Affordable Investment in Quality Education",
    pricingSubtitle: "Choose between flexible pay-as-you-go hourly rates or discounted monthly mastery packages.",
    pricingHourly: "Hourly Rates ($3 - $5/hr)",
    pricingMonthly: "Monthly Packages ($30 - $90/mo)",
    pricingPerHour: "/ hour",
    pricingPerMonth: "/ month",
    pricingPopular: "Most Popular",
    pricingChoosePlan: "Select This Plan",

    processBadge: "How It Works",
    processTitle: "Simple 4-Step Journey to Academic Success",
    processSubtitle: "Getting started is straightforward, transparent, and completely risk-free.",

    bookingBadge: "Demo Booking System",
    bookingTitle: "Book Your 30-Minute Demo Session ($3 USD)",
    bookingSubtitle: "Schedule a 1-on-1 diagnostic lesson to discuss your syllabus, assess your baseline, and map out your schedule.",
    stepContact: "Student Details",
    stepPayment: "Fee & Payment",
    stepSchedule: "Date & Time",
    stepConfirm: "Confirmation",
    bookingFullName: "Student Full Name",
    bookingEmail: "Email Address",
    bookingPhone: "WhatsApp Number (with Country Code)",
    bookingSubject: "Selected Subject",
    bookingGrade: "Academic Level / Grade",
    bookingGoals: "Specific Goals or Weak Areas",
    bookingNextPayment: "Proceed to Payment Details",
    bookingBack: "Back",
    bookingNextSchedule: "Choose Date & Time Slot",
    bookingConfirmSend: "Complete Booking via WhatsApp",
    bookingReceiptOptional: "Payment Screenshot / Transaction ID (Optional)",
    bookingSelectCurrency: "Currency Converter",
    bookingPaymentMethod: "Select Payment Method",
    bookingSelectDate: "Select Preferred Date",
    bookingSelectTime: "Select Preferred Time Slot",

    lmsBadge: "Student Portal",
    lmsTitle: "Integrated Learning Management System (LMS)",
    lmsSubtitle: "Registered students get 24/7 access to recorded lectures, lesson summaries, digital quizzes, and homework portals on Illmussaba.",
    lmsAccessBtn: "Access Student LMS Account",
    lmsActivePortal: "Illmussaba LMS Live Portal",

    faqBadge: "Frequently Asked Questions",
    faqTitle: "Answers to Everything You Need to Know",
    faqSubtitle: "Got questions before starting? Find comprehensive answers regarding curriculum, scheduling, and payments.",

    ctaBadge: "Start Your Learning Journey",
    ctaTitle: "Ready to Achieve Top Exam Scores & Fluency?",
    ctaSubtitle: "Book your 30-minute demo class today and experience personalized, high-clarity 1-on-1 online tutoring.",
    ctaPrimaryBtn: "Book a Demo Class Now ($3)",
    ctaSecondaryBtn: "Explore All Subjects",
    ctaWhatsApp: "Chat on WhatsApp Directly",

    footerAbout: "Certified online tutor specializing in GED exam preparation, Quranic recitation with Tajweed, and practical Digital Marketing.",
    footerQuickLinks: "Quick Navigation",
    footerSubjects: "Subjects Offered",
    footerContact: "Direct Contact",
    footerRights: "All rights reserved.",
    footerTimezoneNotice: "Classes are scheduled based on Asia/Karachi (GMT+5) with automatic conversion to your local time.",

    themeLight: "Light Mode",
    themeDark: "Dark Mode",
    languageSelect: "Select Language",
  },
  ur: {
    navAbout: "تعارف",
    navClasses: "کلاسز",
    navCourses: "کورسز",
    navDemoVideo: "ڈیمو ویڈیو",
    navReviews: "طلباء کے تاثرات",
    navPricing: "فیس و پیکجز",
    navFaq: "عمومی سوالات",
    navStudentLms: "طالب علم پورٹل",
    navBookDemo: "ڈیمو بک کریں",
    navCertified: "تصدیق شدہ",
    navTagline: "جی ای ڈی اور قرآن کے آن لائن ٹیوٹر",

    heroTrustBadge: "سرٹیفائیڈ جی ای ڈی اور قرآن ٹیوٹر | 4 سالہ آن لائن تدریسی تجربہ",
    heroHeadline1: "مکمل وضاحت کے ساتھ سیکھیں۔",
    heroHeadline2: "پورے اعتماد سے تیاری کریں۔",
    heroSubtitle: "جی ای ڈی مضامین، تجوید کے ساتھ قرآن پاک اور ڈیجیٹل مارکیٹنگ کے آسان اور مرحلہ وار اسباق۔ ہر سبق آپ کے مقاصد اور ضروریات کے مطابق تیار کیا جاتا ہے۔",
    heroBookDemo: "ڈیمو کلاس بک کریں ($3)",
    heroViewClasses: "تمام کلاسز دیکھیں",
    heroWatchIntro: "تعارفی ویڈیو دیکھیں",
    heroStatExperience: "4 سال",
    heroStatExperienceLabel: "آن لائن تدریس",
    heroStatGed: "جی ای ڈی اسپیشلسٹ",
    heroStatGedLabel: "امتحانی تیاری",
    heroStatBilingual: "دو لسانی تدریس",
    heroStatBilingualLabel: "اردو اور انگریزی",
    heroStatRating: "5.0 ریٹنگ",
    heroStatRatingLabel: "مطمئن طلباء",
    heroAvailableDemo: "ڈیمو کلاسز کیلئے دستیاب",
    heroRatingVerified: "5.0 / 5.0 تصدیق شدہ ریٹنگ",
    heroOneOnOne: "مخصوص ون آن ون تدریس",
    heroLiveOnline: "براہ راست آن لائن کلاسز",

    trustTitle: "عالمی تدریسی پلیٹ فارمز پر تصدیق شدہ تجربہ",

    aboutBadge: "استاد احمد رضا کے بارے میں",
    aboutTitle: "طلباء کی کامیابی کیلئے پرعزم اور تجربہ کار آن لائن استاد",
    aboutSubtitle: "معروف عالمی پلیٹ فارمز پر 4 سال سے زائد کے تدریسی تجربے کے ساتھ، میں آسان اور جامع طریقوں سے طلباء کو کامیابی دلاتا ہوں۔",
    aboutP1: "میرا نام احمد رضا ہے۔ میں نے کمپیوٹر سائنس میں بی ایس کیا ہے اور اسلامی علوم و تجوید القرآن میں باقاعدہ سند حاصل کی ہے۔ پچھلے چار سالوں میں، میں نے دنیا بھر کے طلباء کو جی ای ڈی امتحانات اور تلاوتِ قرآن میں رہنمائی فراہم کی ہے۔",
    aboutP2: "میرا طریقہ تدریس رٹنے کی بجائے مفہوم کو سمجھانے پر مبنی ہے۔ چاہے ریاضی کے مشکل فارمولے ہوں یا عربی حروف کے مخارج، ہر سبق طالب علم کی فہم کے مطابق پڑھایا جاتا ہے۔",
    aboutP3: "طلباء کیلئے ایک پرسکون اور دوستانہ ماحول فراہم کیا جاتا ہے جس میں ڈیجیٹل وائٹ بورڈ اور باقاعدہ ایل ایم ایس پورٹل کے ذریعے پیشرفت جانچی جاتی ہے۔",
    aboutFact1Title: "طالب علم دوست طریقہ کار",
    aboutFact1Desc: "ہر طالب علم کی ضرورت اور کمزوریوں کو مدنظر رکھتے ہوئے خصوصی تدریسی منصوبہ بندی۔",
    aboutFact2Title: "امتحانی حکمت عملی",
    aboutFact2Desc: "امتحان میں اچھے نمبر حاصل کرنے کیلئے موثر مشق اور وقت کی بچت کے فارمولے۔",
    aboutFact3Title: "اردو اور انگریزی میں تدریس",
    aboutFact3Desc: "آسان فہم زبان میں اسباق تاکہ طالب علم بلا جھجھک سوال پوچھ سکے۔",
    aboutFact4Title: "شفاف اور باقاعدہ رپورٹ",
    aboutFact4Desc: "والدین اور طلباء کیلئے باقاعدہ فیڈ بیک اور کارکردگی کا جائزہ۔",
    aboutWatchVideo: "تعارفی ویڈیو دیکھیں",
    aboutScheduleTrial: "ڈیمو کلاس کا وقت طے کریں",

    choiceBadge: "احمد رضا کا انتخاب کیوں کریں؟",
    choiceTitle: "آزمودہ تدریسی طریقے جو یقینی نتائج لاتے ہیں",
    choiceSubtitle: "دنیا بھر کے طلباء اور والدین میری ون آن ون کلاسز پر کیوں اعتماد کرتے ہیں۔",
    choice1Title: "امتحانی نصاب پر خاص توجہ",
    choice1Desc: "امتحانات میں بار بار پوچھے جانے والے سوالات اور کلیدی تصورات کی گہری مشق۔",
    choice2Title: "صبر اور توجہ سے رہنمائی",
    choice2Desc: "دوستانہ ماحول جہاں سوال پوچھنے پر حوصلہ افزائی کی جاتی ہے اور ہر الجھن دور کی جاتی ہے۔",
    choice3Title: "ڈیجیٹل وائٹ بورڈ نوٹس",
    choice3Desc: "ہر کلاس کے فوراً بعد تمام تحریری نوٹس اور فارمولہ شیٹس فراہم کی جاتی ہیں۔",
    choice4Title: "کلاس کے بعد بھی رابطہ",
    choice4Desc: "واٹس ایپ کے ذریعے اسباق کے بارے میں فوری رہنمائی کی سہولت۔",

    subjectsBadge: "مضامین اور کلاسز",
    subjectsTitle: "اہم شعبہ جات میں ماہرانہ تدریس",
    subjectsSubtitle: "امتحانی کامیابی، دینی تعلیم اور پیشہ ورانہ مہارتوں کیلئے مکمل ون آن ون کورسز۔",
    filterAll: "تمام پروگرامز",
    filterGed: "جی ای ڈی امتحانی تیاری",
    filterQuran: "قرآن و تجوید",
    filterMarketing: "ڈیجیٹل مارکیٹنگ",
    bookDemoForSubject: "اس مضمون کیلئے ڈیمو بک کریں",

    coursesBadge: "مقبول کورسز",
    coursesTitle: "منظم اور جامع تعلیمی کورسز",
    coursesSubtitle: "ہمارے مقبول ترین کورسز میں سے انتخاب کریں جس میں ہوم ورک اور ٹیسٹ شامل ہیں۔",
    courseEnroll: "کورس میں داخلہ لیں",
    courseDuration: "مدت",
    courseLessons: "اسباق",

    facilitiesBadge: "تدریسی سہولیات",
    facilitiesTitle: "جدید آن لائن کلاس روم کی سہولیات",
    facilitiesSubtitle: "ہر سبق جدید ترین ٹیکنالوجی اور ڈیجیٹل ٹولز کی مدد سے پڑھایا جاتا ہے۔",

    expertiseBadge: "استاد کی مہارت",
    expertiseTitle: "مضبوط تعلیمی پس منظر اور تدریسی تجربہ",
    expertiseSubtitle: "جدید مضامین اور اسلامی تعلیمات دونوں میں یکساں مہارت۔",

    qualificationsBadge: "اسناد و ڈگریاں",
    qualificationsTitle: "تصدیق شدہ تعلیمی اسناد اور سرٹیفکیٹس",
    qualificationsSubtitle: "تسلیم شدہ یونیورسٹی ڈگری اور سرٹیفیکیشنز۔",
    viewCertificate: "تصدیق شدہ سرٹیفکیٹ دیکھیں",
    verifiedOfficial: "باقاعدہ تصدیق شدہ سند",

    videoBadge: "براہ راست کلاس کا نمونہ",
    videoTitle: "ڈیمو کلاس کی ویڈیو ملاحظہ فرمائیں",
    videoSubtitle: "دیکھیں کہ اسباق کو کس قدر آسانی اور ڈیجیٹل وائٹ بورڈ کے ذریعے سمجھایا جاتا ہے۔",
    videoPlaylistHeader: "ڈیمو اسباق کی پلے لسٹ",
    videoAskFaq: "کوئی سوال ہے؟ عمومی سوالات دیکھیں",

    reviewsBadge: "طلباء کی آراء",
    reviewsTitle: "دنیا بھر کے طلباء کا اعتماد",
    reviewsSubtitle: "احمد رضا سے پڑھنے والے طلباء کے حقیقی تاثرات پڑھیں۔",
    reviewsScore: "5.0 میں سے 5.0 ریٹنگ",
    reviewsVerifiedBadge: "100% تصدیق شدہ آراء",

    pricingBadge: "آسان اور مناسب فیس",
    pricingTitle: "معیاری تعلیم کیلئے مناسب اخراجات",
    pricingSubtitle: "گھنٹہ وار فیس یا رعایتی ماہانہ پیکج میں سے اپنی سہولت کے مطابق انتخاب کریں۔",
    pricingHourly: "فی گھنٹہ ریٹ ($3 تا $5)",
    pricingMonthly: "ماہانہ پیکجز ($30 تا $90)",
    pricingPerHour: "فی گھنٹہ",
    pricingPerMonth: "فی مہینہ",
    pricingPopular: "سب سے مقبول",
    pricingChoosePlan: "اس پلان کا انتخاب کریں",

    processBadge: "طریقہ کار",
    processTitle: "کامیابی کا 4 مرحلہ وار آسان سفر",
    processSubtitle: "کلاسز کا آغاز نہایت آسان، شفاف اور قابلِ بھروسہ ہے۔",

    bookingBadge: "ڈیمو بکنگ سسٹم",
    bookingTitle: "30 منٹ کی ڈیمو کلاس بک کریں ($3 USD)",
    bookingSubtitle: "اپنے کورس اور شیڈول کے بارے میں گفتگو کیلئے 1-on-1 سیشن حاصل کریں۔",
    stepContact: "طالب علم کی معلومات",
    stepPayment: "فیس اور ادائیگی",
    stepSchedule: "تاریخ اور وقت",
    stepConfirm: "تصدیق",
    bookingFullName: "طالب علم کا مکمل نام",
    bookingEmail: "ای میل ایڈریس",
    bookingPhone: "واٹس ایپ نمبر (ملکی کوڈ کے ساتھ)",
    bookingSubject: "منتخب مضمون",
    bookingGrade: "تعلیمی درجہ یا کلاس",
    bookingGoals: "آپ کے مقاصد یا کمزور مضامین",
    bookingNextPayment: "فیس کی تفصیلات پر جائیں",
    bookingBack: "پیچھے",
    bookingNextSchedule: "تاریخ اور وقت منتخب کریں",
    bookingConfirmSend: "واٹس ایپ پر بکنگ مکمل کریں",
    bookingReceiptOptional: "ادائیگی کی تصویر یا ٹرانزیکشن آئی ڈی (اختیاری)",
    bookingSelectCurrency: "کرنسی کنورٹر",
    bookingPaymentMethod: "ادائیگی کا طریقہ منتخب کریں",
    bookingSelectDate: "پسندیدہ تاریخ منتخب کریں",
    bookingSelectTime: "پسندیدہ وقت کا انتخاب کریں",

    lmsBadge: "طالب علم پورٹل",
    lmsTitle: "المصطفیٰ ایل ایم ایس پورٹل",
    lmsSubtitle: "داخلہ لینے والے طلباء کیلئے ریکارڈ شدہ لیکچرز، خلاصے اور امتحانی پریکٹس 24 گھنٹے دستیاب۔",
    lmsAccessBtn: "طلباء پورٹل میں لاگ ان کریں",
    lmsActivePortal: "فعال ایل ایم ایس پورٹل",

    faqBadge: "عمومی سوالات",
    faqTitle: "اکثر پوچھے جانے والے سوالات کے جوابات",
    faqSubtitle: "کلاسز کے آغاز سے متعلق آپ کے تمام سوالات کے واضح جوابات۔",

    ctaBadge: "تعلیم کا نیا سفر شروع کریں",
    ctaTitle: "کیا آپ شاندار کامیابی کیلئے تیار ہیں؟",
    ctaSubtitle: "آج ہی 30 منٹ کی آزمائشی کلاس بک کریں اور معیاری ون آن ون تدریس کا تجربہ کریں۔",
    ctaPrimaryBtn: "ابھی ڈیمو بک کریں ($3)",
    ctaSecondaryBtn: "تمام مضامین دیکھیں",
    ctaWhatsApp: "براہ راست واٹس ایپ پر رابطہ کریں",

    footerAbout: "جی ای ڈی، تجوید القرآن اور ڈیجیٹل مارکیٹنگ کے تصدیق شدہ ماہر استاد۔",
    footerQuickLinks: "فوری لنکس",
    footerSubjects: "دستیاب مضامین",
    footerContact: "رابطہ کی تفصیلات",
    footerRights: "تمام حقوق محفوظ ہیں۔",
    footerTimezoneNotice: "کلاسز کا وقت پاکستان کے معیاری وقت (GMT+5) کے مطابق ہے جو خودکار طور پر آپ کے مقامی وقت میں تبدیل ہو جاتا ہے۔",

    themeLight: "لائٹ موڈ",
    themeDark: "ڈارک موڈ",
    languageSelect: "زبان منتخب کریں",
  },
  hi: {
    navAbout: "परिचय",
    navClasses: "कक्षाएं",
    navCourses: "पाठ्यक्रम",
    navDemoVideo: "डेमो वीडियो",
    navReviews: "समीक्षाएं",
    navPricing: "शुल्क",
    navFaq: "अक्सर पूछे जाने वाले प्रश्न",
    navStudentLms: "विद्यार्थी पोर्टल",
    navBookDemo: "डेमो बुक करें",
    navCertified: "प्रमाणित",
    navTagline: "जीईडी और कुरान ऑनलाइन ट्यूटर",

    heroTrustBadge: "प्रमाणित जीईडी एवं कुरान ट्यूटर | 4 वर्षों का ऑनलाइन शिक्षण अनुभव",
    heroHeadline1: "स्पष्टता के साथ सीखें।",
    heroHeadline2: "आत्मविश्वास के साथ तैयारी करें।",
    heroSubtitle: "जीईडी विषयों, तजवीद के साथ कुरान और डिजिटल मार्केटिंग के चरणबद्ध पाठ। प्रत्येक पाठ आपके स्तर और लक्ष्यों के अनुकूल तैयार किया गया है।",
    heroBookDemo: "डेमो क्लास बुक करें ($3)",
    heroViewClasses: "कक्षाएं देखें",
    heroWatchIntro: "परिचय वीडियो देखें",
    heroStatExperience: "4 वर्ष",
    heroStatExperienceLabel: "ऑनलाइन शिक्षण",
    heroStatGed: "जीईडी विशेषज्ञ",
    heroStatGedLabel: "परीक्षा तैयारी",
    heroStatBilingual: "द्विभाषी",
    heroStatBilingualLabel: "अंग्रेजी और उर्दू",
    heroStatRating: "5.0 रेटिंग",
    heroStatRatingLabel: "छात्रों से",
    heroAvailableDemo: "डेमो क्लास के लिए उपलब्ध",
    heroRatingVerified: "5.0 / 5.0 सत्यापित छात्र रेटिंग",
    heroOneOnOne: "व्यक्तिगत 1-ऑन-1",
    heroLiveOnline: "लाइव ऑनलाइन कक्षाएं",

    trustTitle: "अग्रणी वैश्विक शिक्षण मंचों पर प्रमाणित अनुभव",

    aboutBadge: "अहमद रज़ा के बारे में",
    aboutTitle: "छात्रों की सफलता के लिए समर्पित ऑनलाइन शिक्षक",
    aboutSubtitle: "4 से अधिक वर्षों के अनुभव के साथ, मैं संरचित और व्यावहारिक पाठों के माध्यम से छात्रों को उत्कृष्ट परिणाम प्राप्त करने में मदद करता हूँ।",
    aboutP1: "नमस्ते, मैं अहमद रज़ा हूँ। मैंने कंप्यूटर साइंस में स्नातक किया है और इस्लामी अध्ययन एवं तजवीद में प्रमाणित हूँ। पिछले चार वर्षों में मैंने दुनिया भर के सैकड़ों छात्रों को सफलता दिलाई है।",
    aboutP2: "मेरी शिक्षण शैली रटने के बजाय अवधारणाओं को गहराई से समझने पर केंद्रित है। गणितीय सूत्र हों या भाषा विश्लेषण, प्रत्येक पाठ छात्र के अनुसार अनुकूलित होता है।",
    aboutP3: "डिजिटल व्हाइटबोर्ड और हमारे विशेष एलएमएस पोर्टल की मदद से छात्रों को एक आधुनिक और प्रभावी शिक्षण अनुभव मिलता है।",
    aboutFact1Title: "छात्र-केंद्रित दृष्टिकोण",
    aboutFact1Desc: "प्रत्येक छात्र की व्यक्तिगत ताकत और कमियों के अनुसार विशेष पाठ्यक्रम।",
    aboutFact2Title: "परीक्षा रणनीति",
    aboutFact2Desc: "उच्च अंक प्राप्त करने के लिए समय प्रबंधन और सटीक प्रश्न समाधान की तकनीक।",
    aboutFact3Title: "द्विभाषी निर्देश",
    aboutFact3Desc: "अंग्रेजी और उर्दू में सरल एवं सहज व्याख्या।",
    aboutFact4Title: "पारदर्शी प्रगति",
    aboutFact4Desc: "नियमित गृहकार्य समीक्षा और माता-पिता को अद्यतन प्रगति रिपोर्ट।",
    aboutWatchVideo: "परिचय वीडियो देखें",
    aboutScheduleTrial: "ट्रायल क्लास शेड्यूल करें",

    choiceBadge: "अहमद रज़ा को क्यों चुनें?",
    choiceTitle: "सच्चे परिणाम देने वाली सिद्ध शिक्षण पद्धतियाँ",
    choiceSubtitle: "दुनिया भर के छात्र और माता-पिता मेरे व्यक्तिगत 1-ऑन-1 सत्रों पर भरोसा क्यों करते हैं।",
    choice1Title: "परीक्षा-केंद्रित पाठ्यक्रम",
    choice1Desc: "आधिकारिक परीक्षाओं में अक्सर पूछे जाने वाले प्रश्नों पर सीधा ध्यान।",
    choice2Title: "धैर्यपूर्ण और संवादात्मक",
    choice2Desc: "उत्साहवर्धक वातावरण जहाँ प्रश्न पूछने का हमेशा स्वागत किया जाता है।",
    choice3Title: "डिजिटल व्हाइटबोर्ड नोट्स",
    choice3Desc: "प्रत्येक कक्षा के तुरंत बाद उच्च गुणवत्ता वाले व्हाइटबोर्ड नोट्स उपलब्ध।",
    choice4Title: "सतत सहायता",
    choice4Desc: "कक्षाओं के बीच शंका समाधान के लिए सीधा व्हाट्सएप संपर्क।",

    subjectsBadge: "विषय और कक्षाएं",
    subjectsTitle: "प्रमुख विषयों में विशेषज्ञ ट्यूशन",
    subjectsSubtitle: "परीक्षा में सफलता और नए कौशल के लिए अनुकूलित 1-ऑन-1 कार्यक्रम।",
    filterAll: "सभी कार्यक्रम",
    filterGed: "जीईडी परीक्षा तैयारी",
    filterQuran: "कुरान और तजवीद",
    filterMarketing: "डिजिटल मार्केटिंग",
    bookDemoForSubject: "इस विषय के लिए डेमो बुक करें",

    coursesBadge: "लोकप्रिय पाठ्यक्रम",
    coursesTitle: "दक्षता के लिए तैयार की गई संरचित अध्ययन योजनाएं",
    coursesSubtitle: "हमारे सर्वाधिक लोकप्रिय पाठ्यक्रमों में से चुनें, जिसमें मॉक टेस्ट और संसाधन शामिल हैं।",
    courseEnroll: "पाठ्यक्रम में दाखिला लें",
    courseDuration: "अवधि",
    courseLessons: "पाठ",

    facilitiesBadge: "शिक्षण सुविधाएं",
    facilitiesTitle: "आभासी कक्षा के लिए आधुनिक उपकरण",
    facilitiesSubtitle: "इंटरैक्टिव सीखने के लिए प्रत्येक पाठ पेशेवर डिजिटल उपकरणों द्वारा संचालित होता है।",

    expertiseBadge: "शिक्षक विशेषज्ञता",
    expertiseTitle: "गहन विषय ज्ञान और सिद्ध शैक्षणिक कौशल",
    expertiseSubtitle: "मजबूत शैक्षणिक पृष्ठभूमि और वर्षों का व्यावहारिक ऑनलाइन शिक्षण अनुभव।",

    qualificationsBadge: "डिग्रियां और योग्यताएं",
    qualificationsTitle: "सत्यापित शैक्षणिक योग्यताएं और प्रमाणपत्र",
    qualificationsSubtitle: "मान्यता प्राप्त विश्वविद्यालय डिग्रियों और शिक्षण प्रमाणपत्रों द्वारा प्रमाणित योग्यता।",
    viewCertificate: "सत्यापित प्रमाणपत्र देखें",
    verifiedOfficial: "आधिकारिक रूप से सत्यापित",

    videoBadge: "लाइव कक्षा अनुभव",
    videoTitle: "लाइव डेमो पाठ और व्याख्या देखें",
    videoSubtitle: "देखें कि कैसे डिजिटल व्हाइटबोर्ड पर अवधारणाओं को सरलता से समझाया जाता है।",
    videoPlaylistHeader: "डेमो और व्याख्यात्मक पाठ",
    videoAskFaq: "कोई प्रश्न है? अक्सर पूछे जाने वाले प्रश्न देखें",

    reviewsBadge: "छात्र समीक्षाएं",
    reviewsTitle: "दुनिया भर के छात्रों और परिवारों का भरोसा",
    reviewsSubtitle: "अहमद रज़ा के मार्गदर्शन में अपने लक्ष्यों को प्राप्त करने वाले शिक्षार्थियों की प्रतिक्रिया पढ़ें।",
    reviewsScore: "5.0 में से 5.0 स्टार रेटिंग",
    reviewsVerifiedBadge: "100% सत्यापित समीक्षाएं",

    pricingBadge: "सरल और पारदर्शी शुल्क",
    pricingTitle: "गुणवत्तापूर्ण शिक्षा में किफायती निवेश",
    pricingSubtitle: "लचीली प्रति घंटा दरों या रियायती मासिक पैकेज में से चुनें।",
    pricingHourly: "प्रति घंटा दरें ($3 - $5/घंटा)",
    pricingMonthly: "मासिक पैकेज ($30 - $90/माह)",
    pricingPerHour: "/ घंटा",
    pricingPerMonth: "/ माह",
    pricingPopular: "सबसे लोकप्रिय",
    pricingChoosePlan: "यह योजना चुनें",

    processBadge: "यह कैसे काम करता है",
    processTitle: "सफलता की 4-चरणीय आसान यात्रा",
    processSubtitle: "शुरुआत करना सीधा, पारदर्शी और पूरी तरह से जोखिम-मुक्त है।",

    bookingBadge: "डेमो बुकिंग प्रणाली",
    bookingTitle: "30 मिनट का डेमो सत्र बुक करें ($3 USD)",
    bookingSubtitle: "पाठ्यक्रम पर चर्चा करने और अपना शेड्यूल तय करने के लिए 1-ऑन-1 सत्र बुक करें।",
    stepContact: "छात्र विवरण",
    stepPayment: "शुल्क और भुगतान",
    stepSchedule: "दिनांक और समय",
    stepConfirm: "पुष्टि",
    bookingFullName: "छात्र का पूरा नाम",
    bookingEmail: "ईमेल पता",
    bookingPhone: "व्हाट्सएप नंबर (देश कोड सहित)",
    bookingSubject: "चयनित विषय",
    bookingGrade: "कक्षा / स्तर",
    bookingGoals: "विशिष्ट लक्ष्य या कमजोर क्षेत्र",
    bookingNextPayment: "भुगतान विवरण पर आगे बढ़ें",
    bookingBack: "वापस",
    bookingNextSchedule: "दिनांक और समय चुनें",
    bookingConfirmSend: "व्हाट्सएप के माध्यम से बुकिंग पूरी करें",
    bookingReceiptOptional: "भुगतान स्क्रीनशॉट / ट्रांजेक्शन आईडी (वैकल्पिक)",
    bookingSelectCurrency: "मुद्रा परिवर्तक",
    bookingPaymentMethod: "भुगतान विधि चुनें",
    bookingSelectDate: "पसंदीदा तिथि चुनें",
    bookingSelectTime: "पसंदीदा समय स्लॉट चुनें",

    lmsBadge: "छात्र पोर्टल",
    lmsTitle: "एकीकृत शिक्षण प्रबंधन प्रणाली (LMS)",
    lmsSubtitle: "पंजीकृत छात्रों को इल्मुस्सबाह पर रिकॉर्ड किए गए व्याख्यान, नोट्स और परीक्षण 24/7 मिलते हैं।",
    lmsAccessBtn: "छात्र एलएमएस पोर्टल खोलें",
    lmsActivePortal: "लाइव एलएमएस पोर्टल",

    faqBadge: "अक्सर पूछे जाने वाले प्रश्न",
    faqTitle: "आपके सभी प्रश्नों के उत्तर",
    faqSubtitle: "कक्षाएं शुरू करने से पहले पाठ्यक्रम, समय और शुल्क से संबंधित स्पष्ट उत्तर।",

    ctaBadge: "अपनी सीखने की यात्रा शुरू करें",
    ctaTitle: "क्या आप उत्कृष्ट परीक्षा परिणाम के लिए तैयार हैं?",
    ctaSubtitle: "आज ही अपनी 30 मिनट की डेमो क्लास बुक करें और व्यक्तिगत शिक्षण का अनुभव करें।",
    ctaPrimaryBtn: "अभी डेमो क्लास बुक करें ($3)",
    ctaSecondaryBtn: "सभी विषय देखें",
    ctaWhatsApp: "व्हाट्सएप पर सीधे संपर्क करें",

    footerAbout: "जीईडी, तजवीद और डिजिटल मार्केटिंग के प्रमाणित ऑनलाइन ट्यूटर।",
    footerQuickLinks: "त्वरित नेविगेशन",
    footerSubjects: "उपलब्ध विषय",
    footerContact: "सीधा संपर्क",
    footerRights: "सर्वाधिकार सुरक्षित।",
    footerTimezoneNotice: "कक्षाएं पाकिस्तान मानक समय (GMT+5) पर निर्धारित हैं और आपके स्थानीय समय में स्वतः परिवर्तित होती हैं।",

    themeLight: "लाइट मोड",
    themeDark: "डार्क मोड",
    languageSelect: "भाषा चुनें",
  },
  fr: {
    navAbout: "À propos",
    navClasses: "Classes",
    navCourses: "Cours",
    navDemoVideo: "Vidéo Démo",
    navReviews: "Avis",
    navPricing: "Tarifs",
    navFaq: "FAQ",
    navStudentLms: "Portail LMS",
    navBookDemo: "Réserver Démo",
    navCertified: "Certifié",
    navTagline: "Tuteur en ligne GED & Coran",

    heroTrustBadge: "Tuteur Certifié GED & Coran | 4 Ans d'Expérience d'Enseignement en Ligne",
    heroHeadline1: "Apprenez Avec Clarté.",
    heroHeadline2: "Préparez-vous Avec Confiance.",
    heroSubtitle: "Obtenez des leçons claires et progressives en GED, Coran avec Tajweed et Marketing Digital. Chaque cours est adapté à votre rythme et vos objectifs.",
    heroBookDemo: "Réserver un Cours Démo ($3)",
    heroViewClasses: "Voir Mes Cours",
    heroWatchIntro: "Voir l'Introduction",
    heroStatExperience: "4 Ans",
    heroStatExperienceLabel: "Enseignement en Ligne",
    heroStatGed: "Spécialiste GED",
    heroStatGedLabel: "Préparation Examens",
    heroStatBilingual: "Bilingue",
    heroStatBilingualLabel: "Anglais & Ourdou",
    heroStatRating: "Note 5.0",
    heroStatRatingLabel: "Des Étudiants",
    heroAvailableDemo: "Disponible pour cours d'essai",
    heroRatingVerified: "Note Vérifiée 5.0 / 5.0",
    heroOneOnOne: "Cours Particulier 1-à-1",
    heroLiveOnline: "Cours en Direct en Ligne",

    trustTitle: "Enseignant sur les Meilleures Plateformes Mondiales",

    aboutBadge: "À propos d'Ahmad Raza",
    aboutTitle: "Enseignant Passionné Dévoué à la Réussite de Chaque Élève",
    aboutSubtitle: "Avec plus de 4 ans d'expérience sur les plateformes éducatives internationales, j'aide les élèves à surmonter leurs difficultés avec méthode et bienveillance.",
    aboutP1: "Bonjour, je m'appelle Ahmad Raza. Je suis titulaire d'une licence en informatique et d'une certification reconnue en études islamiques et Tajweed coranique. J'ai accompagné des centaines d'étudiants vers le succès.",
    aboutP2: "Ma pédagogie privilégie la compréhension intuitive plutôt que le par cœur. Que ce soit pour résoudre des équations ou perfectionner la phonétique arabe, chaque leçon est sur-mesure.",
    aboutP3: "Mes cours utilisent un tableau blanc interactif et une plateforme LMS pour suivre vos progrès continus et vos devoirs.",
    aboutFact1Title: "Approche Personnalisée",
    aboutFact1Desc: "Chaque programme est conçu selon les forces et faiblesses individuelles de l'élève.",
    aboutFact2Title: "Stratégie d'Examen",
    aboutFact2Desc: "Techniques de gestion du temps et exercices ciblés pour maximiser votre score.",
    aboutFact3Title: "Enseignement Bilingue",
    aboutFact3Desc: "Explications claires en anglais et en ourdou selon vos préférences.",
    aboutFact4Title: "Suivi Transparent",
    aboutFact4Desc: "Retours réguliers et rapports de progression pour les élèves et les parents.",
    aboutWatchVideo: "Voir la Vidéo d'Intro",
    aboutScheduleTrial: "Planifier un Essai",

    choiceBadge: "Pourquoi Choisir Ahmad Raza",
    choiceTitle: "Des Méthodes Pédagogiques Qui Donnent de Vrais Résultats",
    choiceSubtitle: "Pourquoi les élèves et les parents du monde entier font confiance à mes cours individuels.",
    choice1Title: "Programme à Haut Rendement",
    choice1Desc: "Focus direct sur les questions et notions clés des examens officiels.",
    choice2Title: "Pédagogie Patiente",
    choice2Desc: "Une atmosphère bienveillante où chaque question reçoit une réponse approfondie.",
    choice3Title: "Notes de Tableau Numérique",
    choice3Desc: "Téléchargez immédiatement les fiches de cours et formules après chaque session.",
    choice4Title: "Support Continu",
    choice4Desc: "Communication WhatsApp directe pour poser vos questions entre les cours.",

    subjectsBadge: "Matières & Cours",
    subjectsTitle: "Un Enseignement Expert Dans Vos Matières Clés",
    subjectsSubtitle: "Programmes 1-à-1 sur mesure pour la réussite aux examens et les compétences pratiques.",
    filterAll: "Tous les Programmes",
    filterGed: "Préparation GED",
    filterQuran: "Coran & Tajweed",
    filterMarketing: "Marketing Digital",
    bookDemoForSubject: "Réserver Démo Pour Cette Matière",

    coursesBadge: "Cours Populaires",
    coursesTitle: "Parcours d'Apprentissage Structurés Pour la Maîtrise",
    coursesSubtitle: "Sélectionnez parmi nos formations les plus demandées avec exercices et examens blancs.",
    courseEnroll: "S'inscrire au Cours",
    courseDuration: "Durée",
    courseLessons: "Leçons",

    facilitiesBadge: "Équipements Pédagogiques",
    facilitiesTitle: "Outils Modernes Pour Une Classe Virtuelle Immersive",
    facilitiesSubtitle: "Des outils professionnels interactifs pour garantir une assimilation optimale.",

    expertiseBadge: "Expertise de l'Enseignant",
    expertiseTitle: "Connaissances Approfondies & Expérience Éprouvée",
    expertiseSubtitle: "Un profil académique solide combiné à des années de pratique de l'enseignement en ligne.",

    qualificationsBadge: "Diplômes & Qualifications",
    qualificationsTitle: "Diplômes Universitaires et Certifications Vérifiés",
    qualificationsSubtitle: "Une compétence démontrée par des titres officiels et reconnus.",
    viewCertificate: "Voir le Certificat Vérifié",
    verifiedOfficial: "Titre Officiellement Vérifié",

    videoBadge: "Aperçu de Classe en Direct",
    videoTitle: "Visionnez une Leçon Démo en Direct",
    videoSubtitle: "Découvrez comment les concepts complexes sont simplifiés avec clarté sur tableau blanc.",
    videoPlaylistHeader: "Liste des Leçons Démo",
    videoAskFaq: "Des questions ? Consultez la FAQ",

    reviewsBadge: "Témoignages d'Élèves",
    reviewsTitle: "La Confiance d'Étudiants Partout Dans le Monde",
    reviewsSubtitle: "Découvrez les avis authentiques d'élèves ayant réussi avec Ahmad Raza.",
    reviewsScore: "Note de 5.0 sur 5.0 Étoiles",
    reviewsVerifiedBadge: "100% Avis Vérifiés",

    pricingBadge: "Tarifs Clairs et Transparents",
    pricingTitle: "Un Investissement Accessible Pour Une Éducation d'Excellence",
    pricingSubtitle: "Choisissez entre nos tarifs horaires à la carte ou nos forfaits mensuels avantageux.",
    pricingHourly: "Tarifs Horaires (3$ - 5$/h)",
    pricingMonthly: "Forfaits Mensuels (30$ - 90$/mois)",
    pricingPerHour: "/ heure",
    pricingPerMonth: "/ mois",
    pricingPopular: "Le Plus Populaire",
    pricingChoosePlan: "Choisir ce Forfait",

    processBadge: "Comment Ça Marche",
    processTitle: "Votre Parcours Vers la Réussite en 4 Étapes Simples",
    processSubtitle: "Commencer est simple, rapide et sans engagement.",

    bookingBadge: "Système de Réservation",
    bookingTitle: "Réservez Votre Démo de 30 Minutes (3$ USD)",
    bookingSubtitle: "Une session personnalisée pour analyser votre niveau, définir vos objectifs et fixer votre planning.",
    stepContact: "Coordonnées de l'Élève",
    stepPayment: "Frais & Paiement",
    stepSchedule: "Date & Heure",
    stepConfirm: "Confirmation",
    bookingFullName: "Nom Complet de l'Élève",
    bookingEmail: "Adresse E-mail",
    bookingPhone: "Numéro WhatsApp (avec indicatif pays)",
    bookingSubject: "Matière Choisie",
    bookingGrade: "Niveau Scolaire",
    bookingGoals: "Objectifs ou Points à Travailler",
    bookingNextPayment: "Passer au Paiement",
    bookingBack: "Retour",
    bookingNextSchedule: "Choisir la Date et l'Heure",
    bookingConfirmSend: "Finaliser la Réservation sur WhatsApp",
    bookingReceiptOptional: "Preuve de Paiement / Réf. (Optionnel)",
    bookingSelectCurrency: "Convertisseur de Devises",
    bookingPaymentMethod: "Choisir le Moyen de Paiement",
    bookingSelectDate: "Choisir la Date",
    bookingSelectTime: "Choisir le Créneau Horaire",

    lmsBadge: "Portail Étudiant",
    lmsTitle: "Système de Gestion d'Apprentissage (LMS) Intégré",
    lmsSubtitle: "Accès 24/7 aux leçons enregistrées, fiches récapitulatives et quiz d'entraînement sur Illmussaba.",
    lmsAccessBtn: "Accéder à l'Espace Élève",
    lmsActivePortal: "Portail LMS Actif",

    faqBadge: "Questions Fréquentes",
    faqTitle: "Tout Ce Que Vous Devez Savoir",
    faqSubtitle: "Des réponses précises sur le déroulement des cours, les horaires et les paiements.",

    ctaBadge: "Commencez Dès Aujourd'hui",
    ctaTitle: "Prêt à Réussir Vos Examens et Progresser ?",
    ctaSubtitle: "Réservez votre séance d'essai de 30 minutes et découvrez l'efficacité de cours particuliers sur-mesure.",
    ctaPrimaryBtn: "Réserver une Démo (3$)",
    ctaSecondaryBtn: "Voir Toutes les Matières",
    ctaWhatsApp: "Échanger Directement sur WhatsApp",

    footerAbout: "Tuteur certifié en préparation GED, récitation coranique avec Tajweed et marketing digital.",
    footerQuickLinks: "Navigation Rapide",
    footerSubjects: "Matières Proposées",
    footerContact: "Contact Direct",
    footerRights: "Tous droits réservés.",
    footerTimezoneNotice: "Les cours sont basés sur le fuseau horaire de Karachi (GMT+5) avec conversion automatique à votre heure locale.",

    themeLight: "Mode Clair",
    themeDark: "Mode Sombre",
    languageSelect: "Choisir la Langue",
  },
  ar: {
    navAbout: "نبذة عني",
    navClasses: "الدروس",
    navCourses: "الدورات",
    navDemoVideo: "فيديو تجريبي",
    navReviews: "آراء الطلاب",
    navPricing: "الأسعار",
    navFaq: "الأسئلة الشائعة",
    navStudentLms: "بوابة الطالب",
    navBookDemo: "حجز حصة تجريبية",
    navCertified: "معتمد",
    navTagline: "مدرس معتمد لاختبارات GED والقرآن الكريم",

    heroTrustBadge: "مدرس معتمد لاختبارات GED والقرآن الكريم | خبرة تدريس عبر الإنترنت 4 سنوات",
    heroHeadline1: "تعلم بوضوح تام.",
    heroHeadline2: "واستعد بثقة واقتدار.",
    heroSubtitle: "دروس تفاعلية ومبسطة خطوة بخطوة في مواد GED، والقرآن الكريم بأحكام التجويد، والتسويق الرقمي. دروس مصممة خصيصاً لتناسب مستواك وأهدافك.",
    heroBookDemo: "احجز حصة تجريبية ($3)",
    heroViewClasses: "استعراض الدروس",
    heroWatchIntro: "مشاهدة الفيديو التعريفي",
    heroStatExperience: "4 سنوات",
    heroStatExperienceLabel: "تدريس عبر الإنترنت",
    heroStatGed: "متخصص GED",
    heroStatGedLabel: "إعداد للاختبارات",
    heroStatBilingual: "ثنائي اللغة",
    heroStatBilingualLabel: "الإنجليزية والأردية",
    heroStatRating: "تقييم 5.0",
    heroStatRatingLabel: "من الطلاب",
    heroAvailableDemo: "متاح للحصص التجريبية",
    heroRatingVerified: "تقييم موثق 5.0 / 5.0",
    heroOneOnOne: "تدريس فردي مخصص 1-على-1",
    heroLiveOnline: "حصص مباشرة عبر الإنترنت",

    trustTitle: "خبرة معتمدة على كبرى منصات التعليم العالمية",

    aboutBadge: "عن الأستاذ أحمد رضا",
    aboutTitle: "معلم شغوف مكرس لنجاح وتفوق كل طالب",
    aboutSubtitle: "مع أكثر من 4 سنوات من الخبرة في التدريس عبر منصات دولية رائدة، أساعد الطلاب على تحقيق أهدافهم الأكاديمية بأسلوب منهجي ومبسط.",
    aboutP1: "أهلاً بكم، أنا أحمد رضا. أحمل درجة البكالوريوس في علوم الحاسوب وشهادة معتمدة في الدراسات الإسلامية وتجويد القرآن الكريم. على مدار السنوات الماضية، قمت بتدريس مئات الطلاب حول العالم.",
    aboutP2: "فلسفتي التعليمية تركز على الفهم العميق وتبسيط المفاهيم بدلاً من الحفظ المجرد. سواء كنت تستعد لاختبارات الرياضيات أو تحسين تلاوتك للقرآن الكريم، يتم تخصيص كل درس لاحتياجاتك.",
    aboutP3: "نوفر بيئة تعليمية داعمة ومجهزة بسبورة رقمية تفاعلية ومتابعة مستمرة عبر بوابة LMS الخاصة بنا.",
    aboutFact1Title: "منهج يركز على الطالب",
    aboutFact1Desc: "تخصيص الخطة الدراسية بما يناسب مستوى الطالب ونقاط القوة والضعف.",
    aboutFact2Title: "استراتيجيات الاختبارات",
    aboutFact2Desc: "تدريب مكثف على إدارة الوقت وأحدث نماذج الأسئلة للحصول على أعلى الدرجات.",
    aboutFact3Title: "تدريس متعدد اللغات",
    aboutFact3Desc: "شرح سلس باللغتين الإنجليزية والأردية لضمان الاستيعاب الكامل.",
    aboutFact4Title: "تقارير تقدم دورية",
    aboutFact4Desc: "مراجعة منتظمة للواجبات ومشاركة النتائج مع أولياء الأمور والطلاب.",
    aboutWatchVideo: "شاهد الفيديو التعريفي",
    aboutScheduleTrial: "حدد موعد الحصة التجريبية",

    choiceBadge: "لماذا تختار الأستاذ أحمد رضا؟",
    choiceTitle: "أساليب تدريس متطورة تحقق نتائج ملموسة",
    choiceSubtitle: "لماذا يثق الطلاب وأولياء الأمور حول العالم في حصصي الفردية المباشرة.",
    choice1Title: "منهاج عالي الفاعلية",
    choice1Desc: "التركيز الدقيق على الأسئلة والمفاهيم الأكثر تكراراً في الاختبارات الرسمية.",
    choice2Title: "شرح صبور وتفاعلي",
    choice2Desc: "بيئة تشجع على طرح الأسئلة والتأكد من وضوح كل نقطة دون تردد.",
    choice3Title: "مذكرات السبورة الرقمية",
    choice3Desc: "الحصول على ملاحظات الشرح والقوانين مباشرة بعد نهاية كل حصة.",
    choice4Title: "تواصل ودعم مستمر",
    choice4Desc: "إمكانية التواصل المباشر عبر واتساب للإجابة عن الاستفسارات بين الحصص.",

    subjectsBadge: "المواد والدروس",
    subjectsTitle: "تدريس احترافي في التخصصات الأساسية",
    subjectsSubtitle: "برامج فردية مصممة خصيصاً للنجاح الأكاديمي والتميز الديني والمهارات العملية.",
    filterAll: "جميع البرامج",
    filterGed: "إعداد اختبارات GED",
    filterQuran: "القرآن والتجويد",
    filterMarketing: "التسويق الرقمي",
    bookDemoForSubject: "حجز حصة تجريبية لهذه المادة",

    coursesBadge: "الدورات الأكثر طلباً",
    coursesTitle: "مسارات تعليمية منظمة للإتقان الشامل",
    coursesSubtitle: "اختر من بين دوراتنا المتميزة والمزودة باختبارات تدريبية ومصادر دراسية.",
    courseEnroll: "التسجيل في الدورة",
    courseDuration: "المدة",
    courseLessons: "الدروس",

    facilitiesBadge: "المرافق التعليمية",
    facilitiesTitle: "أدوات حديثة لفصل دراسي تفاعلي متكامل",
    facilitiesSubtitle: "نوظف أحدث الوسائل التكنولوجية لضمان أقصى درجات التركيز والتفاعل.",

    expertiseBadge: "خبرات المعلم",
    expertiseTitle: "معرفة أكاديمية عميقة وخبرة تدريسية مثبتة",
    expertiseSubtitle: "تكامل بين المؤهلات الجامعية وسنوات التدريس المباشر عبر الإنترنت.",

    qualificationsBadge: "الشهادات والمؤهلات",
    qualificationsTitle: "شهادات أكاديمية وتراخيص تدريس موثقة",
    qualificationsSubtitle: "مؤهلات جامعية وشهادات تخصصية معتمدة من جهات رسمية.",
    viewCertificate: "عرض الشهادة المعتمدة",
    verifiedOfficial: "مؤهل رسمي موثق",

    videoBadge: "تجربة الفصل المباشر",
    videoTitle: "شاهد نموذجاً لحصة تدريسية تفاعلية",
    videoSubtitle: "تعرف على كيفية تبسيط المسائل والشرح الواضح عبر السبورة الرقمية.",
    videoPlaylistHeader: "قائمة الدروس التجريبية",
    videoAskFaq: "لديك استفسار؟ راجع الأسئلة الشائعة",

    reviewsBadge: "آراء الطلاب",
    reviewsTitle: "ثقة راسخة من الطلاب والعائلات عالمياً",
    reviewsSubtitle: "اقرأ تجارب حقيقية لطلاب حققوا أهدافهم وتفوقوا مع الأستاذ أحمد رضا.",
    reviewsScore: "تقييم 5.0 من 5.0 نجوم",
    reviewsVerifiedBadge: "100% تقييمات موثقة",

    pricingBadge: "أسعار واضحة ومرنة",
    pricingTitle: "استثمار مناسب في تعليم فائق الجودة",
    pricingSubtitle: "اختر بين الدفع بالساعة أو باقات الاشتراك الشهري المخفضة.",
    pricingHourly: "أسعار بالساعة ($3 - $5/ساعة)",
    pricingMonthly: "باقات شهرية ($30 - $90/شهر)",
    pricingPerHour: "/ ساعة",
    pricingPerMonth: "/ شهر",
    pricingPopular: "الأكثر طلباً",
    pricingChoosePlan: "اختيار هذه الخطة",

    processBadge: "كيف تبدأ معنا",
    processTitle: "4 خطوات بسيطة لتحقيق التفوق",
    processSubtitle: "البدء سهل ومباشر وبدون أي مخاطرة.",

    bookingBadge: "نظام حجز الحصص",
    bookingTitle: "احجز جلستك التجريبية لمدة 30 دقيقة ($3 USD)",
    bookingSubtitle: "جلسة فردية لتحديد مستواك ومناقشة الخطة الدراسية المناسبة لك.",
    stepContact: "بيانات الطالب",
    stepPayment: "الرسوم والدفع",
    stepSchedule: "الموعد والوقت",
    stepConfirm: "التأكيد",
    bookingFullName: "الاسم الكامل للطالب",
    bookingEmail: "البريد الإلكتروني",
    bookingPhone: "رقم الواتساب (مع رمز الدولة)",
    bookingSubject: "المادة المطلوبة",
    bookingGrade: "المرحلة الدراسية",
    bookingGoals: "الأهداف المراد تحقيقها أو نقاط الضعف",
    bookingNextPayment: "الانتقال إلى خيارات الدفع",
    bookingBack: "رجوع",
    bookingNextSchedule: "اختيار التاريخ والوقت",
    bookingConfirmSend: "تأكيد الحجز عبر واتساب",
    bookingReceiptOptional: "صورة إيصال الدفع / رقم المعاملة (اختياري)",
    bookingSelectCurrency: "محول العملات",
    bookingPaymentMethod: "اختر طريقة الدفع",
    bookingSelectDate: "حدد التاريخ المفضل",
    bookingSelectTime: "حدد الوقت المفضل",

    lmsBadge: "بوابة الطالب",
    lmsTitle: "نظام إدارة التعلم المتكامل (LMS)",
    lmsSubtitle: "وصول غير محدود للدروس المسجلة والملخصات والاختبارات عبر منصة علم الصبا.",
    lmsAccessBtn: "تسجيل الدخول إلى بوابة الطالب",
    lmsActivePortal: "بوابة LMS المفعلة",

    faqBadge: "الأسئلة المتكررة",
    faqTitle: "إجابات عن كل ما تود معرفته",
    faqSubtitle: "إجابات دقيقة وشاملة حول المناهج وجداول الحصص وطرق الدفع.",

    ctaBadge: "ابدأ رحلتك التعليمية الآن",
    ctaTitle: "هل أنت مستعد لتحقيق أعلى الدرجات والتفوق؟",
    ctaSubtitle: "احجز حصتك التجريبية اليوم واختبر متعة التعلم الفردي المباشر.",
    ctaPrimaryBtn: "احجز حصة تجريبية الآن ($3)",
    ctaSecondaryBtn: "استعرض كافة المواد",
    ctaWhatsApp: "تواصل عبر واتساب مباشرة",

    footerAbout: "مدرس معتمد متخصص في اختبارات GED وتلاوة القرآن بالتجويد والتسويق الرقمي.",
    footerQuickLinks: "روابط سريعة",
    footerSubjects: "المواد المتاحة",
    footerContact: "معلومات الاتصال",
    footerRights: "جميع الحقوق محفوظة.",
    footerTimezoneNotice: "المواعيد حسب توقيت كراتشي (GMT+5) ويتم تحويلها تلقائياً إلى توقيتك المحلي.",

    themeLight: "الوضع الفاتح",
    themeDark: "الوضع الداكن",
    languageSelect: "اختر اللغة",
  },
  es: {
    navAbout: "Sobre Mí",
    navClasses: "Clases",
    navCourses: "Cursos",
    navDemoVideo: "Video Demo",
    navReviews: "Reseñas",
    navPricing: "Precios",
    navFaq: "Preguntas",
    navStudentLms: "Portal LMS",
    navBookDemo: "Reservar Demo",
    navCertified: "Certificado",
    navTagline: "Tutor Online de GED y Corán",

    heroTrustBadge: "Tutor Certificado de GED y Corán | 4 Años de Experiencia en Enseñanza Online",
    heroHeadline1: "Aprende con Claridad.",
    heroHeadline2: "Prepárate con Confianza.",
    heroSubtitle: "Lecciones paso a paso en materias de GED, Corán con Taywid y Marketing Digital. Clases adaptadas a tus metas y necesidades individuales.",
    heroBookDemo: "Reservar Clase Demo ($3)",
    heroViewClasses: "Ver Mis Clases",
    heroWatchIntro: "Ver Introducción",
    heroStatExperience: "4 Años",
    heroStatExperienceLabel: "Enseñanza Online",
    heroStatGed: "Especialista GED",
    heroStatGedLabel: "Preparación de Exámenes",
    heroStatBilingual: "Bilingüe",
    heroStatBilingualLabel: "Inglés y Urdu",
    heroStatRating: "Calificación 5.0",
    heroStatRatingLabel: "De Alumnos",
    heroAvailableDemo: "Disponible para clases demo",
    heroRatingVerified: "5.0 / 5.0 Calificación Verificada",
    heroOneOnOne: "Tutoría 1 a 1 Personalizada",
    heroLiveOnline: "Clases Online en Vivo",

    trustTitle: "Enseñanza en Plataformas Globales Líderes",

    aboutBadge: "Sobre Ahmad Raza",
    aboutTitle: "Educador Online Dedicado al Éxito de Cada Estudiante",
    aboutSubtitle: "Con más de 4 años de experiencia en plataformas internacionales, ayudo a los estudiantes a alcanzar sus metas con explicaciones claras y métodos estructurados.",
    aboutP1: "Hola, soy Ahmad Raza. Tengo una Licenciatura en Ciencias de la Computación y certificaciones en Estudios Islámicos y Taywid Coránico. He guiado a cientos de estudiantes con éxito.",
    aboutP2: "Mi método se enfoca en entender los conceptos fundamentales y no solo en memorizar. Cada clase se personaliza según el ritmo de cada estudiante.",
    aboutP3: "Contamos con pizarras interactivas y acceso a nuestra plataforma LMS para seguimiento de tareas y exámenes de práctica.",
    aboutFact1Title: "Enfoque en el Estudiante",
    aboutFact1Desc: "Planes de estudio adaptados a las fortalezas y áreas de mejora de cada alumno.",
    aboutFact2Title: "Estrategia de Exámenes",
    aboutFact2Desc: "Técnicas de resolución rápida y práctica con preguntas reales de examen.",
    aboutFact3Title: "Instrucción Bilingüe",
    aboutFact3Desc: "Clases fluidas en inglés y urdu con total claridad.",
    aboutFact4Title: "Seguimiento Transparente",
    aboutFact4Desc: "Evaluaciones continuas e informes de progreso para alumnos y padres.",
    aboutWatchVideo: "Ver Video de Presentación",
    aboutScheduleTrial: "Programar Clase de Prueba",

    choiceBadge: "¿Por Qué Elegir a Ahmad Raza?",
    choiceTitle: "Metodologías de Enseñanza con Resultados Comprobados",
    choiceSubtitle: "Por qué familias y estudiantes de todo el mundo confían en mis clases personalizadas.",
    choice1Title: "Plan de Estudio de Alto Rendimiento",
    choice1Desc: "Enfoque directo en los temas y preguntas más frecuentes en exámenes oficiales.",
    choice2Title: "Paciencia e Interactividad",
    choice2Desc: "Un espacio seguro donde todas las preguntas son bienvenidas y resueltas.",
    choice3Title: "Apuntes en Pizarra Digital",
    choice3Desc: "Descarga de fórmulas y apuntes detallados al finalizar cada clase.",
    choice4Title: "Soporte Continuo",
    choice4Desc: "Contacto directo por WhatsApp para resolver dudas entre clases.",

    subjectsBadge: "Materias y Clases",
    subjectsTitle: "Tutoría Especializada en Disciplinas Clave",
    subjectsSubtitle: "Programas individuales diseñados para el éxito académico y profesional.",
    filterAll: "Todos los Programas",
    filterGed: "Preparación GED",
    filterQuran: "Corán y Taywid",
    filterMarketing: "Marketing Digital",
    bookDemoForSubject: "Reservar Demo para Esta Materia",

    coursesBadge: "Cursos Populares",
    coursesTitle: "Rutas de Aprendizaje Diseñadas para el Dominio",
    coursesSubtitle: "Elige entre nuestros cursos más solicitados con tareas y simulacros de examen.",
    courseEnroll: "Inscribirse al Curso",
    courseDuration: "Duración",
    courseLessons: "Lecciones",

    facilitiesBadge: "Instalaciones de Aprendizaje",
    facilitiesTitle: "Herramientas Modernas para un Aula Virtual",
    facilitiesSubtitle: "Cada lección cuenta con tecnología interactiva para maximizar la comprensión.",

    expertiseBadge: "Experiencia del Tutor",
    expertiseTitle: "Sólida Formación Académica y Capacidad Pedagógica",
    expertiseSubtitle: "Años de práctica profesional en clases individuales en línea.",

    qualificationsBadge: "Títulos y Certificaciones",
    qualificationsTitle: "Credenciales Universitarias Verificadas",
    qualificationsSubtitle: "Formación académica demostrada mediante títulos oficiales.",
    viewCertificate: "Ver Certificado Verificado",
    verifiedOfficial: "Credencial Oficial Verificada",

    videoBadge: "Demostración en Vivo",
    videoTitle: "Mira una Clase Demo en Vivo",
    videoSubtitle: "Comprueba cómo se explican los temas complejos con claridad en la pizarra interactiva.",
    videoPlaylistHeader: "Lista de Clases Demo",
    videoAskFaq: "¿Dudas? Consulta las Preguntas Frecuentes",

    reviewsBadge: "Testimonios de Alumnos",
    reviewsTitle: "Confianza de Estudiantes en Todo el Mundo",
    reviewsSubtitle: "Lee testimonios reales de alumnos que lograron sus metas con Ahmad Raza.",
    reviewsScore: "5.0 de 5.0 Estrellas",
    reviewsVerifiedBadge: "100% Reseñas Verificadas",

    pricingBadge: "Precios Transparentes",
    pricingTitle: "Inversión Accesible en Educación de Calidad",
    pricingSubtitle: "Elige entre tarifas por hora o paquetes mensuales con descuento.",
    pricingHourly: "Tarifas por Hora ($3 - $5/h)",
    pricingMonthly: "Paquetes Mensuales ($30 - $90/mes)",
    pricingPerHour: "/ hora",
    pricingPerMonth: "/ mes",
    pricingPopular: "Más Popular",
    pricingChoosePlan: "Elegir Este Plan",

    processBadge: "Cómo Funciona",
    processTitle: "Tu Camino al Éxito en 4 Pasos Sencillos",
    processSubtitle: "Empezar es fácil, transparente y sin riesgos.",

    bookingBadge: "Reserva de Clases",
    bookingTitle: "Reserva Tu Clase Demo de 30 Minutos ($3 USD)",
    bookingSubtitle: "Sesión 1 a 1 para evaluar tu nivel, revisar el temario y planificar tu horario.",
    stepContact: "Datos del Estudiante",
    stepPayment: "Tarifa y Pago",
    stepSchedule: "Fecha y Hora",
    stepConfirm: "Confirmación",
    bookingFullName: "Nombre Completo del Alumno",
    bookingEmail: "Correo Electrónico",
    bookingPhone: "WhatsApp (con código de país)",
    bookingSubject: "Materia Seleccionada",
    bookingGrade: "Nivel Académico",
    bookingGoals: "Objetivos o Temas Difíciles",
    bookingNextPayment: "Continuar al Pago",
    bookingBack: "Atrás",
    bookingNextSchedule: "Elegir Fecha y Hora",
    bookingConfirmSend: "Confirmar Reserva por WhatsApp",
    bookingReceiptOptional: "Comprobante de Pago (Opcional)",
    bookingSelectCurrency: "Conversor de Moneda",
    bookingPaymentMethod: "Método de Pago",
    bookingSelectDate: "Seleccionar Fecha",
    bookingSelectTime: "Seleccionar Horario",

    lmsBadge: "Portal Estudiantil",
    lmsTitle: "Plataforma de Aprendizaje Integrada (LMS)",
    lmsSubtitle: "Acceso 24/7 a grabaciones, resúmenes y cuestionarios interactivos en Illmussaba.",
    lmsAccessBtn: "Acceder a Mi Cuenta LMS",
    lmsActivePortal: "Portal LMS Activo",

    faqBadge: "Preguntas Frecuentes",
    faqTitle: "Respuestas a Todas Tus Dudas",
    faqSubtitle: "Información clara sobre clases, horarios y formas de pago.",

    ctaBadge: "Comienza Tu Aprendizaje Hoy",
    ctaTitle: "¿Listo Para Aprobar Tus Exámenes con Excelencia?",
    ctaSubtitle: "Reserva tu clase demo de 30 minutos hoy y vive la experiencia de una tutoría personalizada.",
    ctaPrimaryBtn: "Reservar Clase Demo Ahora ($3)",
    ctaSecondaryBtn: "Explorar Todas las Materias",
    ctaWhatsApp: "Contactar por WhatsApp Directamente",

    footerAbout: "Tutor certificado en exámenes GED, recitación coránica con Taywid y marketing digital.",
    footerQuickLinks: "Enlaces Rápidos",
    footerSubjects: "Materias Disponibles",
    footerContact: "Contacto Directo",
    footerRights: "Todos los derechos reservados.",
    footerTimezoneNotice: "Horarios basados en hora de Karachi (GMT+5) con conversión automática a tu hora local.",

    themeLight: "Modo Claro",
    themeDark: "Modo Oscuro",
    languageSelect: "Seleccionar Idioma",
  },
  de: {
    navAbout: "Über mich",
    navClasses: "Klassen",
    navCourses: "Kurse",
    navDemoVideo: "Demo-Video",
    navReviews: "Bewertungen",
    navPricing: "Preise",
    navFaq: "FAQ",
    navStudentLms: "LMS-Portal",
    navBookDemo: "Demo Buchen",
    navCertified: "Zertifiziert",
    navTagline: "GED & Koran Online-Tutor",

    heroTrustBadge: "Zertifizierter GED & Koran Tutor | 4 Jahre Erfahrung im Online-Unterricht",
    heroHeadline1: "Mit Klarheit lernen.",
    heroHeadline2: "Mit Zuversicht vorbereiten.",
    heroSubtitle: "Klarer, schrittweiser Einzelunterricht in GED-Fächern, Koran mit Tajweed und digitalem Marketing. Auf Ihre individuellen Ziele zugeschnitten.",
    heroBookDemo: "Probestunde Buchen ($3)",
    heroViewClasses: "Klassen ansehen",
    heroWatchIntro: "Einführung ansehen",
    heroStatExperience: "4 Jahre",
    heroStatExperienceLabel: "Online-Unterricht",
    heroStatGed: "GED-Spezialist",
    heroStatGedLabel: "Prüfungsvorbereitung",
    heroStatBilingual: "Zweisprachig",
    heroStatBilingualLabel: "Englisch & Urdu",
    heroStatRating: "5.0 Bewertung",
    heroStatRatingLabel: "Von Schülern",
    heroAvailableDemo: "Verfügbar für Probestunden",
    heroRatingVerified: "5.0 / 5.0 Verifizierte Bewertung",
    heroOneOnOne: "Individueller 1-zu-1 Unterricht",
    heroLiveOnline: "Live-Onlinekurse",

    trustTitle: "Erfahrung auf führenden globalen Lernplattformen",

    aboutBadge: "Über Ahmad Raza",
    aboutTitle: "Engagierter Online-Lehrer für Ihren Lernerfolg",
    aboutSubtitle: "Mit über 4 Jahren Erfahrung auf internationalen Plattformen unterstütze ich Schüler mit klaren Methoden und geduldiger Anleitung.",
    aboutP1: "Hallo, ich bin Ahmad Raza. Ich habe einen Bachelor in Informatik und anerkannte Zertifikate in islamischen Studien und Koran-Tajweed. Ich habe Hunderte von Schülern weltweit betreut.",
    aboutP2: "Mein Unterrichtsansatz konzentriert sich auf echtes Verständnis statt reinem Auswendiglernen. Jede Stunde wird an Ihr Lerntempo angepasst.",
    aboutP3: "Interaktive digitale Whiteboards und unser LMS-Portal ermöglichen optimale Nachbereitung und kontinuierliche Fortschritte.",
    aboutFact1Title: "Schülerzentrierter Ansatz",
    aboutFact1Desc: "Individuelle Lehrpläne abgestimmt auf Stärken und Wissenslücken.",
    aboutFact2Title: "Prüfungsstrategie",
    aboutFact2Desc: "Gezielte Zeitmanagement-Tipps und Vorbereitung mit echten Prüfungsaufgaben.",
    aboutFact3Title: "Zweisprachiger Unterricht",
    aboutFact3Desc: "Verständliche Erklärungen auf Englisch und Urdu.",
    aboutFact4Title: "Transparenter Fortschritt",
    aboutFact4Desc: "Regelmäßiges Feedback und Fortschrittsberichte für Schüler und Eltern.",
    aboutWatchVideo: "Intro-Video ansehen",
    aboutScheduleTrial: "Probestunde planen",

    choiceBadge: "Warum Ahmad Raza wählen?",
    choiceTitle: "Bewährte Lehrmethoden für messbare Ergebnisse",
    choiceSubtitle: "Warum Schüler und Eltern weltweit meinem 1-zu-1 Unterricht vertrauen.",
    choice1Title: "Fokussierter Lehrplan",
    choice1Desc: "Direkte Vorbereitung auf die am häufigsten geprüften Konzepte.",
    choice2Title: "Geduldig & Interaktiv",
    choice2Desc: "Eine offene Lernumgebung, in der jede Frage ausführlich beantwortet wird.",
    choice3Title: "Digitale Whiteboard-Notizen",
    choice3Desc: "Alle Tafelaufschriebe und Formelsammlungen direkt nach jeder Stunde verfügbar.",
    choice4Title: "Fortlaufende Unterstützung",
    choice4Desc: "Direkter WhatsApp-Kontakt für schnelle Fragen zwischen den Einheiten.",

    subjectsBadge: "Fächer & Klassen",
    subjectsTitle: "Kompetenter Unterricht in Kernbereichen",
    subjectsSubtitle: "Maßgeschneiderte 1-zu-1 Programme für Prüfungserfolg und neue Fähigkeiten.",
    filterAll: "Alle Programme",
    filterGed: "GED Vorbereitung",
    filterQuran: "Koran & Tajweed",
    filterMarketing: "Digitales Marketing",
    bookDemoForSubject: "Demo für dieses Fach buchen",

    coursesBadge: "Beliebte Kurse",
    coursesTitle: "Strukturierte Lernpfade für fundiertes Wissen",
    coursesSubtitle: "Wählen Sie aus unseren beliebtesten Kursen mit Übungsaufgaben und Probeprüfungen.",
    courseEnroll: "Kurs belegen",
    courseDuration: "Dauer",
    courseLessons: "Lektionen",

    facilitiesBadge: "Lernausstattung",
    facilitiesTitle: "Moderne Werkzeuge für das virtuelle Klassenzimmer",
    facilitiesSubtitle: "Professionelle interaktive Tools für effektives Lernen.",

    expertiseBadge: "Fachkompetenz",
    expertiseTitle: "Fundiertes Fachwissen & erprobte Pädagogik",
    expertiseSubtitle: "Starker akademischer Hintergrund kombiniert mit jahrelanger Online-Lehrpraxis.",

    qualificationsBadge: "Abschlüsse & Zertifikate",
    qualificationsTitle: "Verifizierte akademische Qualifikationen",
    qualificationsSubtitle: "Nachgewiesene Kompetenz durch anerkannte Universitätsabschlüsse.",
    viewCertificate: "Verifiziertes Zertifikat ansehen",
    verifiedOfficial: "Offiziell geprüft",

    videoBadge: "Live-Unterricht Erleben",
    videoTitle: "Sehen Sie eine Live-Demo-Lektion",
    videoSubtitle: "Erleben Sie, wie komplexe Themen verständlich auf dem Whiteboard erklärt werden.",
    videoPlaylistHeader: "Demo-Lektionen Liste",
    videoAskFaq: "Haben Sie Fragen? Siehe FAQ",

    reviewsBadge: "Schülerbewertungen",
    reviewsTitle: "Weltweites Vertrauen von Schülern & Eltern",
    reviewsSubtitle: "Lesen Sie authentische Erfahrungsberichte erfolgreicher Schüler.",
    reviewsScore: "5.0 von 5.0 Sternen",
    reviewsVerifiedBadge: "100% verifizierte Bewertungen",

    pricingBadge: "Transparente Preise",
    pricingTitle: "Faire Investition in erstklassige Bildung",
    pricingSubtitle: "Wählen Sie zwischen flexiblen Stundensätzen oder ermäßigten Monatspaketen.",
    pricingHourly: "Stundensätze ($3 - $5/Std.)",
    pricingMonthly: "Monatspakete ($30 - $90/Monat)",
    pricingPerHour: "/ Stunde",
    pricingPerMonth: "/ Monat",
    pricingPopular: "Am beliebtesten",
    pricingChoosePlan: "Diesen Plan wählen",

    processBadge: "Ablauf",
    processTitle: "In 4 einfachen Schritten zum Erfolg",
    processSubtitle: "Der Start ist unkompliziert, transparent und risikofrei.",

    bookingBadge: "Terminbuchung",
    bookingTitle: "30-Minuten Probestunde Buchen ($3 USD)",
    bookingSubtitle: "Individuelle 1-zu-1 Sitzung zur Einstufung und Erstellung Ihres Lernplans.",
    stepContact: "Schülerdaten",
    stepPayment: "Gebühr & Zahlung",
    stepSchedule: "Datum & Uhrzeit",
    stepConfirm: "Bestätigung",
    bookingFullName: "Vollständiger Name des Schülers",
    bookingEmail: "E-Mail-Adresse",
    bookingPhone: "WhatsApp-Nummer (mit Ländervorwahl)",
    bookingSubject: "Ausgewähltes Fach",
    bookingGrade: "Klassenstufe",
    bookingGoals: "Ziele oder Schwachstellen",
    bookingNextPayment: "Weiter zur Zahlung",
    bookingBack: "Zurück",
    bookingNextSchedule: "Datum und Uhrzeit wählen",
    bookingConfirmSend: "Buchung über WhatsApp abschließen",
    bookingReceiptOptional: "Zahlungsbeleg / Transaktions-ID (Optional)",
    bookingSelectCurrency: "Währungsrechner",
    bookingPaymentMethod: "Zahlungsmethode wählen",
    bookingSelectDate: "Datum wählen",
    bookingSelectTime: "Zeitfenster wählen",

    lmsBadge: "Schülerportal",
    lmsTitle: "Integriertes Lernmanagementsystem (LMS)",
    lmsSubtitle: "Rund-um-die-Uhr-Zugriff auf aufgezeichnete Lektionen und Quizze auf Illmussaba.",
    lmsAccessBtn: "Zum LMS-Portal",
    lmsActivePortal: "Aktives LMS-Portal",

    faqBadge: "Häufig Gestellte Fragen",
    faqTitle: "Wichtige Antworten auf einen Blick",
    faqSubtitle: "Detaillierte Informationen zu Unterricht, Zeitzonen und Bezahlung.",

    ctaBadge: "Jetzt Starten",
    ctaTitle: "Bereit für Bestnoten und Lernerfolg?",
    ctaSubtitle: "Buchen Sie noch heute Ihre 30-minütige Probestunde und erleben Sie erstklassigen Einzelunterricht.",
    ctaPrimaryBtn: "Jetzt Probestunde Buchen ($3)",
    ctaSecondaryBtn: "Alle Fächer ansehen",
    ctaWhatsApp: "Direkt auf WhatsApp kontaktieren",

    footerAbout: "Zertifizierter Online-Tutor für GED, Koran mit Tajweed und digitales Marketing.",
    footerQuickLinks: "Schnellnavigation",
    footerSubjects: "Unterrichtsfächer",
    footerContact: "Direktkontakt",
    footerRights: "Alle Rechte vorbehalten.",
    footerTimezoneNotice: "Unterrichtszeiten basieren auf Karatschi-Zeit (GMT+5) und werden automatisch in Ihre Ortszeit umgerechnet.",

    themeLight: "Heller Modus",
    themeDark: "Dunkler Modus",
    languageSelect: "Sprache wählen",
  },
  zh: {
    navAbout: "关于导师",
    navClasses: "课程分类",
    navCourses: "热门课程",
    navDemoVideo: "试听视频",
    navReviews: "学员评价",
    navPricing: "收费方案",
    navFaq: "常见问题",
    navStudentLms: "学员系统",
    navBookDemo: "预约试听",
    navCertified: "官方认证",
    navTagline: "GED 与古兰经在线专业导师",

    heroTrustBadge: "官方认证 GED 与古兰经导师 | 4年在线教学丰富经验",
    heroHeadline1: "清晰学透知识点。",
    heroHeadline2: "自信从容备考考高分。",
    heroSubtitle: "提供 GED 全科、古兰经泰吉威德及数字营销的系统化一对一教学。课程根据您的个人目标与学习进度量身定制。",
    heroBookDemo: "预约试听课 ($3)",
    heroViewClasses: "查看所有课程",
    heroWatchIntro: "观看自我介绍",
    heroStatExperience: "4年",
    heroStatExperienceLabel: "在线教学经验",
    heroStatGed: "GED 专业备考",
    heroStatGedLabel: "应试指导",
    heroStatBilingual: "双语授课",
    heroStatBilingualLabel: "英语与乌尔都语",
    heroStatRating: "5.0 满分好评",
    heroStatRatingLabel: "来自真实学员",
    heroAvailableDemo: "支持预约试听课",
    heroRatingVerified: "5.0 / 5.0 真实学员评分",
    heroOneOnOne: "专属一对一针对性辅导",
    heroLiveOnline: "真人实时在线授课",

    trustTitle: "在多个全球知名教学平台上拥有认证教学资质",

    aboutBadge: "关于艾哈迈德·拉扎 (Ahmad Raza)",
    aboutTitle: "以学生成长为核心的资深在线教育导师",
    aboutSubtitle: "凭借在国际在线教学平台超过4年的教学经验，我以耐心、清晰、结构化的教学方式帮助学生突破难点、取得优异成绩。",
    aboutP1: "您好，我是艾哈迈德·拉扎。我拥有计算机科学学士学位，并获得伊斯兰研究与古兰经泰吉威德专业证书。在过去四年里，我辅导了来自世界各地的数百名学员成功通过 GED 考试。",
    aboutP2: "我的教学理念重在透彻理解原理而非机械死记硬背。无论是攻克代数方程式还是掌握阿拉伯语音标发音，每节课都贴合您的节奏。",
    aboutP3: "配备数字化互动白板与 Illmussaba 专用学员 LMS 学习系统，全流程跟踪作业与模拟考进度。",
    aboutFact1Title: "以学生为中心的针对性教学",
    aboutFact1Desc: "根据学生的知识薄弱项量身规划专属学习路径。",
    aboutFact2Title: "实战考试策略与提分技巧",
    aboutFact2Desc: "教授做题时间分配、高频考点速记与真题解题技巧。",
    aboutFact3Title: "流利双语教学",
    aboutFact3Desc: "英语与乌尔都语授课，沟通顺畅易懂。",
    aboutFact4Title: "全程学习进度反馈",
    aboutFact4Desc: "定期作业批改、阶段性测评报告，让家长与学员安心。",
    aboutWatchVideo: "观看介绍视频",
    aboutScheduleTrial: "预约试听课",

    choiceBadge: "为什么选择导师艾哈迈德？",
    choiceTitle: "经过实战检验、行之有效的教学成果",
    choiceSubtitle: "全球众多学员与家庭信赖的一对一专业辅导。",
    choice1Title: "聚焦高频考点",
    choice1Desc: "直击官方考试中最常出现的重难点概念与典型例题。",
    choice2Title: "耐心细致、互动性强",
    choice2Desc: "鼓励式教学，鼓励随时提问并耐心逐一解答。",
    choice3Title: "课堂高清板书笔记",
    choice3Desc: "课后即刻提供数字化板书高清导出文件与公式要点整理。",
    choice4Title: "课后答疑支持",
    choice4Desc: "课间可通过 WhatsApp 随时提问，及时消除知识疑点。",

    subjectsBadge: "科目与课程",
    subjectsTitle: "核心学科专业一对一教学",
    subjectsSubtitle: "专为考试高分、语言掌握与实用技能定制的个性化学习方案。",
    filterAll: "所有科目",
    filterGed: "GED 考试备考",
    filterQuran: "古兰经与泰吉威德",
    filterMarketing: "数字营销实战",
    bookDemoForSubject: "预约本科目试听课",

    coursesBadge: "热门课程",
    coursesTitle: "助力全面精通的系统化课程体系",
    coursesSubtitle: "精选最受欢迎的系统化课程，包含课后习题与模拟考试。",
    courseEnroll: "报名此课程",
    courseDuration: "课时周期",
    courseLessons: "课时数量",

    facilitiesBadge: "教学配套",
    facilitiesTitle: "现代化虚拟互动教室",
    facilitiesSubtitle: "采用专业数字教学工具，确保线上课堂互动如同面对面。",

    expertiseBadge: "专业背景",
    expertiseTitle: "深厚学科功底与丰富实操经验",
    expertiseSubtitle: "扎实的大学学术功底与多年的在线实战一对一教学经验。",

    qualificationsBadge: "学历与资质认证",
    qualificationsTitle: "官方验证的高校学位与专业教师认证",
    qualificationsSubtitle: "由正规高等院校及权威机构颁发认证的官方证书。",
    viewCertificate: "查看官方认证证书",
    verifiedOfficial: "官方权威认证资质",

    videoBadge: "真实课堂体验",
    videoTitle: "观看实时授课与解题演示",
    videoSubtitle: "亲身体验互动白板如何将复杂概念化繁为简、生动呈现。",
    videoPlaylistHeader: "试听课演示视频列表",
    videoAskFaq: "有疑问？查看常见问题解答",

    reviewsBadge: "学员真实评价",
    reviewsTitle: "来自全球各地的真实信赖与好评",
    reviewsSubtitle: "阅读在艾哈迈德导师指导下成功达成学业目标的学员感言。",
    reviewsScore: "5.0 / 5.0 满分评价",
    reviewsVerifiedBadge: "100% 真实认证评价",

    pricingBadge: "透明公正收费",
    pricingTitle: "性价比极高的优质教育投资",
    pricingSubtitle: "灵活课时费或更划算的按月学习套餐供您自由选择。",
    pricingHourly: "单课时按需计费 ($3 - $5/小时)",
    pricingMonthly: "按月全包套餐 ($30 - $90/月)",
    pricingPerHour: "/ 小时",
    pricingPerMonth: "/ 月",
    pricingPopular: "最受推荐",
    pricingChoosePlan: "选择此方案",

    processBadge: "学习流程",
    processTitle: "通往成功的简单四步教学法",
    processSubtitle: "开启学习流程轻松透明，无任何后顾之忧。",

    bookingBadge: "在线预约系统",
    bookingTitle: "预约 30 分钟试听课 ($3 USD)",
    bookingSubtitle: "一对一深入沟通您的学习目标、测评当前水平并量身定制上课时间表。",
    stepContact: "学员基本信息",
    stepPayment: "费用与支付方式",
    stepSchedule: "选择上课时间",
    stepConfirm: "预约确认",
    bookingFullName: "学员真实姓名",
    bookingEmail: "电子邮箱地址",
    bookingPhone: "WhatsApp 号码（含国际区号）",
    bookingSubject: "目标学习科目",
    bookingGrade: "当前年级 / 学习水平",
    bookingGoals: "学习目标或薄弱知识点",
    bookingNextPayment: "前往支付详情",
    bookingBack: "返回上一步",
    bookingNextSchedule: "选择日期与上课时间",
    bookingConfirmSend: "通过 WhatsApp 发送确认预约",
    bookingReceiptOptional: "支付截图或交易单号（选填）",
    bookingSelectCurrency: "实时汇率换算",
    bookingPaymentMethod: "选择支付方式",
    bookingSelectDate: "选择期望上课日期",
    bookingSelectTime: "选择期望上课时间段",

    lmsBadge: "学员系统",
    lmsTitle: "Illmussaba 学员专属教学管理系统 (LMS)",
    lmsSubtitle: "注册学员享有 24/7 全天候课程回放、知识总结及在线作业题库访问权限。",
    lmsAccessBtn: "登录学员 LMS 系统",
    lmsActivePortal: "在线教学系统入口",

    faqBadge: "常见问题",
    faqTitle: "解答您关心的所有问题",
    faqSubtitle: "关于课程形式、时间安排与付款方式的详尽解答。",

    ctaBadge: "立即开启提分之旅",
    ctaTitle: "准备好迎接考试高分与学习突破了吗？",
    ctaSubtitle: "立即预约 30 分钟试听课，体验专业高效的一对一辅导。",
    ctaPrimaryBtn: "立即预约试听课 ($3)",
    ctaSecondaryBtn: "浏览所有科目",
    ctaWhatsApp: "直接在 WhatsApp 上联系",

    footerAbout: "官方认证在线导师，专注于 GED 考试备考、古兰经泰吉威德诵读及实用数字营销教学。",
    footerQuickLinks: "网站导航",
    footerSubjects: "授课科目",
    footerContact: "直接联系方式",
    footerRights: "版权所有。",
    footerTimezoneNotice: "授课时间默认以卡拉奇时间（GMT+5）为基准，系统将自动换算为您当地的时间。",

    themeLight: "浅色模式",
    themeDark: "深色模式",
    languageSelect: "切换语言",
  },
};
