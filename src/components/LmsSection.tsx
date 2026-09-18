import React from "react";
import { Laptop, ExternalLink, CheckCircle2, ArrowRight } from "lucide-react";
import { TEACHER_INFO } from "../data";
import { useI18n } from "../context/I18nContext";

interface LmsSectionProps {
  onBookDemoClick: () => void;
}

export const LmsSection: React.FC<LmsSectionProps> = ({ onBookDemoClick }) => {
  const { t } = useI18n();

  const lmsFeatures = [
    "Class schedule and live session links",
    "Practice quizzes and exam-mode tests",
    "Downloadable learning notes and worksheets",
    "Student performance & progress tracking",
  ];

  return (
    <section id="lms-portal" className="w-full py-20 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 dark:from-slate-900 dark:via-slate-950 dark:to-blue-950 rounded-3xl p-8 sm:p-12 xl:p-16 text-white border border-slate-800 shadow-xl overflow-hidden relative">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/60 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <Laptop className="w-4 h-4" />
                <span>{t("lmsBadge")}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
                {t("lmsTitle")}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {t("lmsSubtitle")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {lmsFeatures.map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={TEACHER_INFO.lmsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="lms-portal-link"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all"
                >
                  <span>{t("lmsAccessBtn")}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={onBookDemoClick}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 font-semibold text-sm px-5 py-3.5 rounded-xl border border-slate-700 transition-colors cursor-pointer"
                >
                  <span>Book Demo First</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Visual / Portal Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm bg-slate-800/90 dark:bg-slate-900/90 rounded-2xl p-6 border border-slate-700 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between pb-4 border-b border-slate-700 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">illmussaba.com</span>
                </div>

                <div className="space-y-3">
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 flex items-center justify-between text-xs">
                    <span className="text-slate-300">Live Classroom Room</span>
                    <span className="text-emerald-400 font-semibold">Active</span>
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 flex items-center justify-between text-xs">
                    <span className="text-slate-300">Homework & Quizzes</span>
                    <span className="text-blue-400 font-semibold">Updated</span>
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 flex items-center justify-between text-xs">
                    <span className="text-slate-300">Weekly Progress Report</span>
                    <span className="text-slate-400 font-semibold">Synced</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-700/60 text-[11px] text-slate-400 text-center">
                  Protected portal for enrolled active students.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
