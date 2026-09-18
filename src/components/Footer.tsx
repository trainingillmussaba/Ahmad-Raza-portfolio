import React from "react";
import { ShieldCheck, Mail, Clock, ExternalLink, ArrowRight } from "lucide-react";
import { TEACHER_INFO } from "../data";
import { useI18n } from "../context/I18nContext";

interface FooterProps {
  onBookDemoClick: () => void;
  onSelectSubject: (subject: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookDemoClick, onSelectSubject }) => {
  const currentYear = new Date().getFullYear();
  const { t } = useI18n();

  const subjectsList = [
    "GED Mathematical Reasoning",
    "GED Reasoning Through Language Arts (RLA)",
    "GED Science",
    "GED Social Studies",
    "Quran with Tajweed",
    "Advanced Digital Marketing",
  ];

  return (
    <footer id="footer" className="w-full bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800 text-sm">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Teacher Brand (4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={TEACHER_INFO.photoUrl}
                alt={TEACHER_INFO.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500/40"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-white text-lg">{TEACHER_INFO.name}</span>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-blue-900/60 text-blue-300 border border-blue-700/60">
                    Verified
                  </span>
                </div>
                <div className="text-xs text-slate-400">
                  Certified GED & Quran Online Tutor
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              Step-by-step 1-on-1 online tutoring focused on conceptual clarity, structured study plans, and exam success across GED subjects, Quran recitation, and digital marketing.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-slate-300 bg-slate-900 px-3 py-2 rounded-xl border border-slate-800 w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>4 Years Online Tutoring Experience</span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  {t("navAbout")}
                </a>
              </li>
              <li>
                <a href="#classes" className="hover:text-blue-400 transition-colors">
                  {t("navClasses")}
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-blue-400 transition-colors">
                  {t("navCourses")}
                </a>
              </li>
              <li>
                <a href="#demo-video" className="hover:text-blue-400 transition-colors">
                  {t("navDemoVideo")}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-blue-400 transition-colors">
                  {t("navPricing")}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400 transition-colors">
                  {t("navFaq")}
                </a>
              </li>
              <li>
                <a
                  href={TEACHER_INFO.lmsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 font-semibold"
                >
                  <span>{t("navStudentLms")}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Subjects & Classes (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Subjects Offered
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {subjectsList.map((sub) => (
                <li key={sub}>
                  <button
                    onClick={() => onSelectSubject(sub)}
                    className="text-left text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {sub}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Operational Details & Contact (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Operational Schedule
            </h4>

            <div className="flex items-start gap-2.5 text-xs">
              <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-slate-200">Monday – Saturday</div>
                <div className="text-slate-400">08:00 AM – 10:00 PM (PKT)</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Sunday by appointment</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs">
              <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-slate-200">Email Inquiries</div>
                <a
                  href={`mailto:${TEACHER_INFO.email}`}
                  className="text-blue-400 hover:underline break-all"
                >
                  {TEACHER_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookDemoClick}
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 px-4 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <span>{t("ctaPrimaryBtn")}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} {TEACHER_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Independent Teacher Portfolio</span>
            <span>•</span>
            <a
              href={TEACHER_INFO.lmsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-300"
            >
              Student Portal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
