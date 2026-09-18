import React from "react";
import {
  GraduationCap,
  Target,
  BookOpenCheck,
  TrendingUp,
  Laptop,
  Users,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { TEACHER_EXPERTISE } from "../data";
import { useI18n } from "../context/I18nContext";

const expertiseIconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  Target: <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  BookOpenCheck: <BookOpenCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  Laptop: <Laptop className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  Users: <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
};

interface TeacherExpertiseProps {
  onBookDemoClick: () => void;
}

export const TeacherExpertise: React.FC<TeacherExpertiseProps> = ({ onBookDemoClick }) => {
  const { t } = useI18n();

  return (
    <section id="expertise" className="w-full py-20 md:py-28 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: 35-40% Context */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200/60 dark:border-blue-800/60 w-fit mb-3">
              {t("expertiseBadge")}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
              {t("expertiseTitle")}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Practical competency built across 4 years of online tutoring, certified academic coursework, and verified institutional instruction.
            </p>

            <div className="space-y-3 mb-8 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <strong className="text-slate-900 dark:text-white">Verified Qualifications:</strong> Formal certifications in GED, Digital Marketing, and Hifz-ul-Quran.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <strong className="text-slate-900 dark:text-white">Integrated Tools:</strong> Dedicated LMS portal, customized syllabus trackers, and interactive practice tests.
                </div>
              </div>
            </div>

            <button
              onClick={onBookDemoClick}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-xs hover:shadow transition-all w-fit cursor-pointer"
            >
              <span>{t("aboutScheduleTrial")}</span>
            </button>
          </div>

          {/* Right: 60-65% Expertise Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 xl:gap-6">
            {TEACHER_EXPERTISE.map((item, idx) => (
              <div
                key={item.title}
                id={`expertise-card-${idx}`}
                className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/60 flex items-center justify-center">
                      {expertiseIconMap[item.icon]}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Badges / Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-slate-100/90 dark:bg-slate-800 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
