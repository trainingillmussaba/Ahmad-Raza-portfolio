export interface SubjectItem {
  id: string;
  name: string;
  category: "ged" | "quran" | "marketing";
  subtitle: string;
  description: string;
  iconName: string;
}

export interface CourseItem {
  id: string;
  title: string;
  description: string;
  bestFor: string;
  subjectKey: string;
  iconName: string;
  lmsUrl: string;
}

export interface ReviewItem {
  id: string;
  quote: string;
  fullText: string;
  studentName: string;
  course: string;
  rating: number;
}

export interface QualificationItem {
  year: string;
  title: string;
  institution: string;
  description: string;
  certificateUrl?: string;
  badge?: string;
}

export interface DemoVideoItem {
  id: string;
  title: string;
  youtubeId: string;
  subject: string;
  description: string;
}

export interface CurrencyInfo {
  code: string;
  name: string;
  symbol: string;
}

export type CurrencyCode = "USD" | "PKR" | "GBP" | "EUR" | "CAD" | "AUD" | "AED" | "SAR";

export const SUPPORTED_CURRENCIES: CurrencyInfo[] = [
  { code: "USD", name: "US Dollar", symbol: "$" },
  { code: "PKR", name: "Pakistani Rupee", symbol: "₨" },
  { code: "GBP", name: "British Pound", symbol: "£" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "CAD", name: "Canadian Dollar", symbol: "CA$" },
  { code: "AUD", name: "Australian Dollar", symbol: "A$" },
  { code: "AED", name: "UAE Dirham", symbol: "AED " },
  { code: "SAR", name: "Saudi Riyal", symbol: "SAR " },
];

export interface PaymentMethodItem {
  id: string;
  name: string;
  type: string;
  country: string;
  accountTitle: string;
  accountNumber: string;
  instructions?: string;
}

export const PAYMENT_METHODS: PaymentMethodItem[] = [
  {
    id: "nayapay",
    name: "Nayapay",
    type: "Digital Wallet",
    country: "Pakistan (Instant)",
    accountTitle: "Ahmad Raza",
    accountNumber: "03073747805",
    instructions: "Send to Nayapay mobile number. Zero transaction fees.",
  },
  {
    id: "sadapay",
    name: "Sadapay",
    type: "Digital Wallet",
    country: "Pakistan (Instant)",
    accountTitle: "Ahmad Raza",
    accountNumber: "03073747805",
    instructions: "Send to Sadapay mobile number / Raast ID.",
  },
  {
    id: "bank-alfalah",
    name: "Bank Alfalah",
    type: "Direct Bank Transfer",
    country: "Pakistan (All Banks)",
    accountTitle: "Ahmad Raza",
    accountNumber: "03491008064560",
    instructions: "Transfer via any banking app or ATM in Pakistan.",
  },
  {
    id: "payoneer",
    name: "Payoneer",
    type: "International Transfer",
    country: "Worldwide / Global",
    accountTitle: "Ahmad Raza",
    accountNumber: "ahmadraza226712345@gmail.com",
    instructions: "Send payment to Ahmad Raza's Payoneer email address.",
  },
];

export const TEACHER_INFO = {
  name: "Ahmad Raza",
  title: "Certified GED & Quran Tutor",
  experience: "4 Years of Online Teaching Experience",
  photoUrl: "https://i.postimg.cc/zDRFhGFg/Ahmad-Raza.jpg",
  introVideoId: "SilNhGcF6kE", // https://youtu.be/SilNhGcF6kE
  introVideoUrl: "https://youtu.be/SilNhGcF6kE",
  rating: "5.0",
  ratingCount: "2 Reviews",
  email: "ahmadraza226712345@gmail.com",
  lmsUrl: "https://illmussaba.com/user-account/",
  calendarUrl: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0A08OWryiySked-sBx1bLIb6L5KSiiRCXO7yZBFjdItwWP3s5d5Z9cOH3FucxYCVrb7ve5LkHj",
  googleCalendarUrl: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0A08OWryiySked-sBx1bLIb6L5KSiiRCXO7yZBFjdItwWP3s5d5Z9cOH3FucxYCVrb7ve5LkHj",
  teacherTimeZone: "Asia/Karachi (GMT+5)",
  demoFeeFixedUSD: 3,
  demoFeeMinUSD: 2,
  demoFeeMaxUSD: 5,
};

export const TRUSTED_BRANDS = [
  {
    name: "AU Tutors",
    url: "https://aututors.com/tutor/ahmad-raza-online-mathematics-tutor-renala-khurd/",
    badge: "Verified Tutor",
  },
  {
    name: "Skillbriva",
    url: "https://skillbriva.com/freelancer/ahmad-raza/",
    badge: "Professional Instructor",
  },
  {
    name: "Illmussaba",
    url: "https://illmussaba.com/instructor-public-account/4",
    badge: "LMS Partner",
  },
  {
    name: "Preply",
    badge: "Online Teaching",
  },
  {
    name: "Skooli",
    badge: "Online Tutoring",
  },
  {
    name: "StudyGate",
    badge: "Subject Specialist",
  },
  {
    name: "Chegg Tutors",
    badge: "Homework & Prep",
  },
  {
    name: "Udemy",
    badge: "Digital Learning",
  },
];

export const TEACHER_BENEFITS = [
  {
    title: "One-to-One Attention",
    description: "Lessons can be shaped around your level, goals, and areas where you need more help.",
    icon: "UserCheck",
  },
  {
    title: "Step-by-Step Teaching",
    description: "Difficult topics are broken into smaller parts so you can understand them without feeling lost.",
    icon: "Footprints",
  },
  {
    title: "Exam-Focused Learning",
    description: "GED preparation includes concept clarity, exam strategies, and practice tests.",
    icon: "Target",
  },
  {
    title: "Interactive Lessons",
    description: "Quizzes, practical examples, and interactive LMS activities help keep learning active.",
    icon: "Sparkles",
  },
  {
    title: "Personalized Study Plans",
    description: "Your lessons can follow a study plan based on your learning goals and current level.",
    icon: "FileSpreadsheet",
  },
  {
    title: "English & Urdu Support",
    description: "Lessons are available in English and Urdu to make difficult concepts easier to understand.",
    icon: "Languages",
  },
];

export const SUBJECT_LEVELS = [
  { id: "all", label: "All Subjects & Programs" },
  { id: "ged", label: "GED Preparation" },
  { id: "quran", label: "Quran with Tajweed" },
  { id: "marketing", label: "Digital Marketing" },
];

export const SUBJECTS_DATA: SubjectItem[] = [
  {
    id: "ged-math",
    name: "GED — Mathematical Reasoning",
    category: "ged",
    subtitle: "Subject: Mathematics",
    description: "Build stronger Math concepts with step-by-step explanations, practice, and GED-focused preparation.",
    iconName: "Calculator",
  },
  {
    id: "ged-rla",
    name: "GED — RLA",
    category: "ged",
    subtitle: "Subjects: English / Reasoning Through Language Arts",
    description: "Improve your understanding of GED English through clear lessons, practice, and exam preparation.",
    iconName: "BookOpen",
  },
  {
    id: "ged-science",
    name: "GED — Science",
    category: "ged",
    subtitle: "Subject: Science",
    description: "Understand difficult Science concepts with simple explanations, practical examples, and exam-focused practice.",
    iconName: "Atom",
  },
  {
    id: "ged-social",
    name: "GED — Social Studies",
    category: "ged",
    subtitle: "Subjects: Social Studies / History",
    description: "Learn key topics clearly and prepare with focused lessons and practice.",
    iconName: "Globe2",
  },
  {
    id: "quran-tajweed",
    name: "Quran With Tajweed",
    category: "quran",
    subtitle: "Subjects: Quran Recitation / Tajweed / Islamic Studies",
    description: "Improve your Quran reading with proper pronunciation, Tajweed, and guided recitation practice.",
    iconName: "BookMarked",
  },
  {
    id: "digital-marketing",
    name: "Diploma in Web Design & Digital Marketing",
    category: "marketing",
    subtitle: "AI-Powered WordPress, SEO, Social Media, Google Ads & Freelancing",
    description: "Build practical web design and digital marketing skills: WordPress with AI workflows, search optimization, campaign management, and online business.",
    iconName: "TrendingUp",
  },
];

export const POPULAR_COURSES: CourseItem[] = [
  {
    id: "course-ged-math",
    title: "GED Mathematical Reasoning",
    description: "Build stronger Mathematical Reasoning skills with clear step-by-step explanations, guided practice, formula mastery, and exam-focused strategies.",
    bestFor: "GED students aiming to pass or score college-ready in Math.",
    subjectKey: "GED — Mathematical Reasoning",
    iconName: "Calculator",
    lmsUrl: "https://illmussaba.com/courses/ged-mathematical-reasoning-mastery/",
  },
  {
    id: "course-ged-rla",
    title: "GED English / RLA",
    description: "Master reading comprehension, extended response essays, grammar rules, and critical analysis with structured practice.",
    bestFor: "Students preparing for the GED Reasoning Through Language Arts exam.",
    subjectKey: "GED — RLA",
    iconName: "BookOpen",
    lmsUrl: "https://illmussaba.com/courses/english-rla/",
  },
  {
    id: "course-ged-science",
    title: "GED Science",
    description: "Make difficult Science topics accessible with clear explanations of life science, physical science, scientific reasoning, and practice questions.",
    bestFor: "GED candidates preparing for the official Science test.",
    subjectKey: "GED — Science",
    iconName: "Atom",
    lmsUrl: "https://illmussaba.com/courses/ged-science-mastery/",
  },
  {
    id: "course-ged-social",
    title: "GED Social Studies",
    description: "Understand US history, civics, government, economics, and geography through focused explanations and question analysis.",
    bestFor: "GED candidates preparing for Social Studies.",
    subjectKey: "GED — Social Studies",
    iconName: "Globe2",
    lmsUrl: "https://illmussaba.com/courses/ged-social-studies/",
  },
  {
    id: "course-quran",
    title: "Quran with Tajweed & Reading",
    description: "Learn accurate Quran recitation with proper Makharij, Tajweed rules, fluent reading, and personalized 1-on-1 correction.",
    bestFor: "Students of all ages wishing to recite the Quran correctly and fluently.",
    subjectKey: "Quran With Tajweed",
    iconName: "BookMarked",
    lmsUrl: "https://illmussaba.com/courses/quran-reading/",
  },
  {
    id: "course-marketing",
    title: "Diploma in Web Design & Digital Marketing (AI-Powered WordPress)",
    description: "Hands-on diploma covering AI-driven WordPress development, UI/UX essentials, modern SEO, social media marketing, and digital entrepreneurship.",
    bestFor: "Aspiring web designers, freelancers, and marketers seeking career-ready skills.",
    subjectKey: "Advanced Digital Marketing",
    iconName: "TrendingUp",
    lmsUrl: "https://illmussaba.com/courses/diploma-in-web-design-ai-powered-wordpress/",
  },
];

export const LEARNING_FACILITIES = [
  {
    title: "Live Online Lessons",
    description: "Learn through live online sessions with clear explanations and direct teacher support.",
    icon: "Video",
  },
  {
    title: "LMS Learning",
    description: "Interactive Learning Management System tools can be used for lessons, activities, and progress tracking.",
    icon: "GraduationCap",
  },
  {
    title: "Quizzes",
    description: "Use quizzes to check your understanding and identify areas that need more practice.",
    icon: "CheckCircle2",
  },
  {
    title: "Practice Tests",
    description: "GED students can use practice tests as part of exam preparation.",
    icon: "FileText",
  },
  {
    title: "Personalized Study Plans",
    description: "Learning can be organized around your current level and personal goals.",
    icon: "CalendarCheck",
  },
  {
    title: "Teacher Feedback",
    description: "Receive constructive feedback to understand your progress and areas for improvement.",
    icon: "MessageSquare",
  },
  {
    title: "Digital Learning Material",
    description: "Interactive online content can support lessons and make practice easier.",
    icon: "FolderKanban",
  },
];

export const TEACHER_EXPERTISE = [
  {
    category: "Subject Preparation",
    title: "GED Subject Preparation",
    description: "Experience teaching GED Mathematical Reasoning, RLA, Science, and Social Studies.",
    icon: "GraduationCap",
    tags: ["Mathematics", "RLA", "Science", "Social Studies"],
  },
  {
    category: "Exam Readiness",
    title: "Exam Preparation",
    description: "Lessons focus on understanding concepts, exam strategies, and practice tests.",
    icon: "Target",
    tags: ["Exam Strategies", "Practice Tests", "Concept Clarity"],
  },
  {
    category: "Quranic Studies",
    title: "Quran & Tajweed",
    description: "Hifz-ul-Quran certification with training in Tajweed, recitation, and Islamic studies.",
    icon: "BookOpenCheck",
    tags: ["Hifz Certified", "Makharij & Tajweed", "Recitation Guidance"],
  },
  {
    category: "Professional Skills",
    title: "Digital Marketing",
    description: "Knowledge and teaching experience in SEO, Google Ads, social media marketing, content creation, and online business strategies.",
    icon: "TrendingUp",
    tags: ["SEO & SEM", "Google Ads", "Social Media", "Content"],
  },
  {
    category: "Modern Tools",
    title: "LMS Teaching",
    description: "Experience using Learning Management Systems for interactive lessons, student progress tracking, and feedback.",
    icon: "Laptop",
    tags: ["Illmussaba Portal", "Student Dashboard", "Quizzes & Tracking"],
  },
  {
    category: "Instructional Method",
    title: "Personalized Teaching",
    description: "Lessons and study plans are adjusted to individual learning needs and goals.",
    icon: "Users",
    tags: ["1-on-1 Focus", "Adaptive Pace", "English & Urdu"],
  },
];

export const QUALIFICATIONS: QualificationItem[] = [
  {
    year: "2021",
    title: "GED (General Educational Development)",
    institution: "DIB College",
    description: "Completed the General Educational Development program, covering Mathematical Reasoning, Reasoning Through Language Arts (RLA), Social Studies, and Science.",
    certificateUrl: "https://i.postimg.cc/QdcC3Rsh/GED.png",
    badge: "Official GED Credential",
  },
  {
    year: "2023",
    title: "OTHM Level 6 Diploma in Business and Management",
    institution: "LCPS (London College of Professional Studies)",
    description: "Completed advanced study in business and management, including strategic leadership, project management, marketing, and organizational development.",
    badge: "Academic Diploma",
  },
  {
    year: "2019",
    title: "Full Stack Digital Marketing & Design (ADM)",
    institution: "IDM Pakistan Training Institute",
    description: "Professional certification in SEO, Google Ads, social media marketing, content creation, brand strategy, and analytics.",
    certificateUrl: "https://i.postimg.cc/YCQ0HJkr/ADM.png",
    badge: "Official ADM Certificate",
  },
  {
    year: "2014",
    title: "Hifz-ul-Quran Certification",
    institution: "Jamia Ghausia Faridiya",
    description: "Completed the full memorization of the Holy Quran with training in Tajweed, recitation, and Islamic fundamentals.",
    badge: "Sanad Certified",
  },
];

export const DEMO_VIDEOS: DemoVideoItem[] = [
  {
    id: "demo-1",
    title: "Brandkit Lecture 1",
    youtubeId: "0Qn0rhm1mt4",
    subject: "Digital Marketing & Design Foundation",
    description: "Watch how concepts are broken down systematically with interactive visual explanations.",
  },
  {
    id: "demo-2",
    title: "Brandkit Lecture 2",
    youtubeId: "B3zNPz3v4Gw",
    subject: "Brand Identity & Structure",
    description: "Step-by-step guidance showing practical application and clarity in instructional delivery.",
  },
  {
    id: "demo-3",
    title: "Brandkit Lecture 3",
    youtubeId: "MAvot6Ko_G0",
    subject: "Visual Strategy & Marketing Assets",
    description: "Practical examples and live walkthroughs designed to keep learning engaging.",
  },
  {
    id: "demo-4",
    title: "Brandkit Lecture 4",
    youtubeId: "YXUtu366LnQ",
    subject: "Final Campaign Workflow",
    description: "Comprehensive review, interactive checkpoints, and structured lesson takeaways.",
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "review-1",
    quote: "Math became much easier to understand.",
    fullText: "Math was always difficult for me, but Ahmad’s step-by-step teaching made it much easier to understand. His support helped me feel more confident.",
    studentName: "Nida Ali",
    course: "GED Mathematical Reasoning Mastery",
    rating: 5,
  },
  {
    id: "review-2",
    quote: "His explanations are simple and clear.",
    fullText: "Ahmad’s Social Studies classes were really helpful. He explains difficult topics in a simple and clear way, which made my preparation easier.",
    studentName: "Farzana Ali",
    course: "GED Social Studies Complete Prep",
    rating: 5,
  },
  {
    id: "review-3",
    quote: "Difficult topics started to make sense.",
    fullText: "The way Ahmad breaks down topics makes them much easier to understand. He is supportive and makes sure you are following along.",
    studentName: "Farzana Ali",
    course: "GED Science Mastery",
    rating: 5,
  },
  {
    id: "review-4",
    quote: "His teaching style helped me build confidence.",
    fullText: "Ahmad’s classes were very helpful. His style was simple and easy to understand. His guidance helped me become more confident in English.",
    studentName: "Imran",
    course: "English (RLA)",
    rating: 5,
  },
  {
    id: "review-5",
    quote: "I passed my exam with his guidance.",
    fullText: "Ahmad focuses on understanding instead of just memorization. His guidance helped me gain confidence and pass my exam.",
    studentName: "Sara Ali",
    course: "English (RLA)",
    rating: 5,
  },
  {
    id: "review-6",
    quote: "The online classes were clear and interactive.",
    fullText: "His online teaching method was effective and friendly. He explained everything clearly and kept the sessions interactive.",
    studentName: "Ahmed Khan",
    course: "English (RLA)",
    rating: 5,
  },
];

export const HOURLY_PLANS = [
  {
    id: "hourly-basic",
    name: "Basic",
    price: 3,
    period: "/hr",
    bestFor: "Essential learning",
    summary: "Live online class, personalized lesson, basic learning support",
    isRecommended: false,
    features: [
      { text: "Live Online Class", status: "included" },
      { text: "Personalized Lesson", status: "included" },
      { text: "Study Plan", status: "not_included" },
      { text: "Practice Material", status: "limited" },
      { text: "Quizzes", status: "not_included" },
      { text: "Practice Tests", status: "not_included" },
      { text: "LMS Support", status: "limited" },
      { text: "Teacher Feedback", status: "limited" },
      { text: "Exam Practice", status: "not_included" },
    ],
  },
  {
    id: "hourly-standard",
    name: "Standard",
    price: 4,
    period: "/hr",
    bestFor: "Regular learners",
    badge: "Best Value",
    summary: "Live class, personalized lesson, study plan, quizzes, practice material",
    isRecommended: true,
    features: [
      { text: "Live Online Class", status: "included" },
      { text: "Personalized Lesson", status: "included" },
      { text: "Study Plan", status: "included" },
      { text: "Practice Material", status: "included" },
      { text: "Quizzes", status: "included" },
      { text: "Practice Tests", status: "limited" },
      { text: "LMS Support", status: "included" },
      { text: "Teacher Feedback", status: "included" },
      { text: "Exam Practice", status: "included" },
    ],
  },
  {
    id: "hourly-premium",
    name: "Premium",
    price: 5,
    period: "/hr",
    bestFor: "Exam-focused learners",
    summary: "Live class, personalized study plan, quizzes, practice tests, LMS support, teacher feedback",
    isRecommended: false,
    features: [
      { text: "Live Online Class", status: "included" },
      { text: "Personalized Lesson", status: "included" },
      { text: "Study Plan", status: "included" },
      { text: "Practice Material", status: "included" },
      { text: "Quizzes", status: "included" },
      { text: "Practice Tests", status: "included" },
      { text: "LMS Support", status: "included" },
      { text: "Teacher Feedback", status: "included" },
      { text: "Exam Practice", status: "included" },
    ],
  },
];

export const MONTHLY_PLANS = [
  {
    id: "monthly-basic",
    name: "Basic",
    price: 30,
    period: "/month",
    bestFor: "Essential support for regular learning",
    ctaText: "Choose Basic",
    isRecommended: false,
    features: [
      "Regular online lessons",
      "Personalized learning support",
      "Basic study material",
      "Homework or practice activities",
      "Teacher guidance",
    ],
  },
  {
    id: "monthly-standard",
    name: "Standard",
    price: 60,
    period: "/month",
    bestFor: "A balanced plan for students who want regular learning and more practice",
    badge: "Most Popular",
    ctaText: "Choose Standard",
    isRecommended: true,
    features: [
      "Regular online lessons",
      "Personalized study plan",
      "Learning material and notes",
      "Homework and assignments",
      "Quizzes and practice tests",
      "LMS learning support",
      "Teacher feedback",
    ],
  },
  {
    id: "monthly-premium",
    name: "Premium",
    price: 90,
    period: "/month",
    bestFor: "For students who need closer support and focused preparation",
    ctaText: "Choose Premium",
    isRecommended: false,
    features: [
      "Regular online lessons",
      "Personalized study plan",
      "Full learning material",
      "Homework and assignments",
      "Quizzes and practice tests",
      "Exam-focused practice",
      "LMS support",
      "Progress tracking",
      "Closer teacher feedback",
    ],
  },
];

export const LEARNING_STEPS = [
  {
    number: "01",
    title: "Choose Your Subject",
    description: "Select the subject or course you want to learn.",
    icon: "BookOpen",
  },
  {
    number: "02",
    title: "Book Your Demo",
    description: "Choose a demo and tell us what you want to achieve.",
    icon: "Calendar",
  },
  {
    number: "03",
    title: "Discuss Your Goals",
    description: "We discuss your current level, challenges, and learning needs.",
    icon: "MessageCircle",
  },
  {
    number: "04",
    title: "Get Your Learning Plan",
    description: "Your lessons can be organized around your goals and areas for improvement.",
    icon: "Compass",
  },
  {
    number: "05",
    title: "Start Your Classes",
    description: "Begin learning through clear, interactive online lessons.",
    icon: "PlayCircle",
  },
  {
    number: "06",
    title: "Practice & Improve",
    description: "Use quizzes, practice, feedback, and exam preparation to keep moving forward.",
    icon: "TrendingUp",
  },
];

export const PAYMENT_METHODS_DATA = [
  {
    id: "bank",
    name: "Bank Transfer (MCB)",
    badge: "Direct Bank",
    details: [
      { label: "Bank Name", value: "MCB" },
      { label: "Account Title", value: "Ahmad Raza" },
      { label: "Account Number", value: "0000001123456702", copyable: true },
      { label: "IBAN", value: "PK36SCBL0000001123456702", copyable: true },
    ],
  },
  {
    id: "easypaisa",
    name: "Easypaisa",
    badge: "Mobile Wallet",
    details: [
      { label: "Account Title", value: "Ahmad RAZA" },
      { label: "Number / Raast ID", value: "03434537553", copyable: true },
    ],
  },
  {
    id: "jazzcash",
    name: "JazzCash",
    badge: "Mobile Wallet",
    details: [
      { label: "Account Title", value: "Ahmad Raza" },
      { label: "Number / Raast ID", value: "03434537553", copyable: true },
    ],
  },
  {
    id: "paypal",
    name: "PayPal",
    badge: "International",
    link: "https://www.paypal.com/ncp/payment/TWSSK6B2VPZ86",
    details: [
      { label: "Payment Page", value: "Click link below to pay with PayPal or Credit Card" },
    ],
  },
];

export const AVAILABLE_TIME_SLOTS = [
  "09:00 AM",
  "10:30 AM",
  "02:00 PM",
  "04:00 PM",
  "05:30 PM",
  "06:30 PM",
  "07:30 PM",
  "08:30 PM",
  "09:30 PM",
  "10:30 PM",
  "11:30 PM",
  "12:30 PM",
];

export const FAQ_LIST = [
  {
    q: "Do you offer a demo class?",
    a: "You can book a demo class to discuss your goals, learning needs, and the best way to begin.",
  },
  {
    q: "Which subjects do you teach?",
    a: "I teach GED Mathematical Reasoning, RLA, Science, and Social Studies. I also teach Quran with Tajweed and Advanced Digital Marketing.",
  },
  {
    q: "Do you help students prepare for the GED exam?",
    a: "Yes. GED preparation includes concept clarity, exam strategies, and practice tests.",
  },
  {
    q: "What teaching method do you use?",
    a: "I use step-by-step explanations, interactive LMS lessons, quizzes, and personalized study plans.",
  },
  {
    q: "Which languages do you teach in?",
    a: "I teach in both English and Urdu.",
  },
  {
    q: "Do you teach Digital Marketing?",
    a: "Yes. I teach Advanced Digital Marketing, including SEO, social media marketing, Google Ads, content creation, and online business strategies.",
  },
  {
    q: "Are the classes online?",
    a: "Yes. My teaching experience includes live online lessons for students worldwide.",
  },
  {
    q: "Do you provide practice for GED exams?",
    a: "Yes. GED preparation can include practice tests and exam-focused activities.",
  },
  {
    q: "Do you teach beginners?",
    a: "Lessons can be adjusted to your current level, so you can start from the areas where you need the most help.",
  },
  {
    q: "What happens during a demo?",
    a: "We can discuss your goals, current level, difficult topics, and the learning approach that fits you.",
  },
  {
    q: "How much do classes cost?",
    a: "Hourly plans range from $3 to $5 per hour. Monthly plans are available at $30, $60, and $90.",
  },
  {
    q: "Can I learn in Urdu?",
    a: "Yes. Lessons are available in English and Urdu.",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "How does the demo session work?",
    answer:
      "The demo session is a 30-minute, 1-on-1 trial class ($3 USD). It is designed to understand your learning goals, assess your current level, pinpoint difficult topics, explain our teaching method, and plan your custom study schedule.",
  },
  {
    question: "What subjects do you teach?",
    answer:
      "I teach all 4 GED subjects: Mathematical Reasoning, Reasoning Through Language Arts (RLA), Science, and Social Studies. In addition, I teach Quran with Tajweed & Islamic Studies, as well as practical Advanced Digital Marketing (SEO, Google Ads, content).",
  },
  {
    question: "Are lessons one-to-one or in groups?",
    answer:
      "All lessons are conducted strictly 1-on-1. This ensures full personalized attention, adaptive pacing, and immediate doubt resolution tailored entirely to your goals.",
  },
  {
    question: "Which platforms do you use for online classes?",
    answer:
      "Classes are conducted via Zoom or Google Meet with interactive digital whiteboards, screen sharing, and the dedicated Illmussaba LMS portal for supplementary assignments and practice tests.",
  },
  {
    question: "What languages are lessons taught in?",
    answer:
      "Lessons are taught in English, Urdu, or a bilingual mix depending on what feels most natural and comfortable for the student.",
  },
  {
    question: "Can you help prepare for the GED exam quickly?",
    answer:
      "Yes. We offer intensive exam-readiness preparation covering high-yield formulas, essay techniques, practice tests, and question-solving strategies designed to accelerate your timeline.",
  },
  {
    question: "How do I pay for classes?",
    answer:
      "For Pakistan-based students, we support instant transfers via Nayapay, Sadapay, and Bank Alfalah. For international students, payments are accepted via Payoneer, wire transfer, or PayPal.",
  },
  {
    question: "What is your cancellation or rescheduling policy?",
    answer:
      "You can reschedule any booked session with at least 4 hours advance notice via WhatsApp or email, ensuring complete flexibility for students.",
  },
];

export interface LearningProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export const LEARNING_PROCESS_STEPS: LearningProcessStep[] = [
  {
    stepNumber: "01",
    title: "Book a Demo",
    description: "Schedule a quick 30-minute demo session to discuss your subject, goals, and current level.",
  },
  {
    stepNumber: "02",
    title: "Discuss Your Goals",
    description: "We identify which specific topics you need help with and set a clear, personalized starting point.",
  },
  {
    stepNumber: "03",
    title: "Start Learning",
    description: "Join interactive online classes with clear step-by-step explanations and practical examples.",
  },
  {
    stepNumber: "04",
    title: "Practice & Progress",
    description: "Use quizzes, practice tests, LMS worksheets, and continuous feedback to improve systematically.",
  },
];

