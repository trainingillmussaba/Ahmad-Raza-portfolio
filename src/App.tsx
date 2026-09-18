import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { I18nProvider } from "./context/I18nContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { AboutSection } from "./components/AboutSection";
import { TeacherChoice } from "./components/TeacherChoice";
import { SubjectsClasses } from "./components/SubjectsClasses";
import { PopularCourses } from "./components/PopularCourses";
import { LearningFacilities } from "./components/LearningFacilities";
import { TeacherExpertise } from "./components/TeacherExpertise";
import { Qualifications } from "./components/Qualifications";
import { DemoSessionVideo } from "./components/DemoSessionVideo";
import { StudentReviews } from "./components/StudentReviews";
import { PricingSection } from "./components/PricingSection";
import { LearningProcess } from "./components/LearningProcess";
import { BookingSystem } from "./components/BookingSystem";
import { LmsSection } from "./components/LmsSection";
import { FaqSection } from "./components/FaqSection";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { VideoModal } from "./components/VideoModal";

function PortfolioApp() {
  const [selectedSubjectForBooking, setSelectedSubjectForBooking] = useState<string>("");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const scrollToBooking = (subject?: string) => {
    if (subject) {
      setSelectedSubjectForBooking(subject);
    }
    const bookingEl = document.getElementById("booking");
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white transition-colors duration-200">
      {/* Sticky Global Header */}
      <Header onBookDemoClick={() => scrollToBooking()} />

      {/* Main Sections in Exact Specified Order */}
      <main className="w-full flex-1 flex flex-col">
        {/* 1. Hero Section */}
        <Hero
          onBookDemoClick={() => scrollToBooking()}
          onViewClassesClick={() => scrollToSection("classes")}
          onWatchIntroClick={() => setIsVideoModalOpen(true)}
        />

        {/* 2. Trusted Brand Strip */}
        <TrustStrip />

        {/* 3. About Section + Personal Introduction */}
        <AboutSection
          onWatchIntroClick={() => setIsVideoModalOpen(true)}
          onBookDemoClick={() => scrollToBooking()}
        />

        {/* 4. Teacher’s Choice */}
        <TeacherChoice />

        {/* 5. Our Subjects & Classes */}
        <SubjectsClasses
          onSelectSubject={(subjectName) => scrollToBooking(subjectName)}
        />

        {/* 6. Teaching & Popular Courses */}
        <PopularCourses
          onSelectCourse={(courseName) => scrollToBooking(courseName)}
        />

        {/* 7. Learning Facilities */}
        <LearningFacilities />

        {/* 8. Teacher Expertise */}
        <TeacherExpertise onBookDemoClick={() => scrollToBooking()} />

        {/* 9. Degrees & Qualifications */}
        <Qualifications />

        {/* 10. Demo Session Video Player & Playlist */}
        <DemoSessionVideo
          onBookDemoClick={() => scrollToBooking()}
          onAskQuestionClick={() => scrollToSection("faq")}
        />

        {/* 11. Student Reviews / Testimonials */}
        <StudentReviews />

        {/* 12. Pricing Section (Hourly / Monthly Tabs) */}
        <PricingSection
          onSelectPlan={(planName) => scrollToBooking(planName)}
          onBookDemoClick={() => scrollToBooking()}
        />

        {/* 13. Our Learning Process */}
        <LearningProcess />

        {/* 14. Demo Booking Form + Timetable (Secure Handshake) */}
        <BookingSystem initialSubject={selectedSubjectForBooking} />

        {/* 15. LMS Integration */}
        <LmsSection onBookDemoClick={() => scrollToBooking()} />

        {/* 16. FAQ */}
        <FaqSection />

        {/* 17. Final Conversion CTA */}
        <FinalCta
          onBookDemoClick={() => scrollToBooking()}
          onViewClassesClick={() => scrollToSection("classes")}
        />
      </main>

      {/* 18. Footer */}
      <Footer
        onBookDemoClick={() => scrollToBooking()}
        onSelectSubject={(sub) => scrollToBooking(sub)}
      />

      {/* Introduction Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <PortfolioApp />
      </I18nProvider>
    </ThemeProvider>
  );
}
