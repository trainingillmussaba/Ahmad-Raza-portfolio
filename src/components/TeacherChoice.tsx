import React from "react";
import {
  UserCheck,
  Footprints,
  Target,
  Sparkles,
  FileSpreadsheet,
  Languages,
} from "lucide-react";
import { TEACHER_BENEFITS } from "../data";
import { useI18n } from "../context/I18nContext";

const iconMap: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  Footprints: <Footprints className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  Target: <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  FileSpreadsheet: <FileSpreadsheet className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  Languages: <Languages className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
};

export const TeacherChoice: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="teachers-choice" className="w-full py-20 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200/60 dark:border-blue-800/60">
            {t("choiceBadge")}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mt-3 tracking-tight">
            {t("choiceTitle")}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3">
            {t("choiceSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {TEACHER_BENEFITS.map((benefit, idx) => (
            <div
              key={benefit.title}
              id={`benefit-card-${idx}`}
              className="bg-white dark:bg-slate-900 p-6 xl:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col items-start text-left"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/60 flex items-center justify-center mb-4">
                {iconMap[benefit.icon]}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
