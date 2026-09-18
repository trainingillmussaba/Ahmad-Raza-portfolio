import React from "react";
import { CheckCircle2 } from "lucide-react";
import { LEARNING_PROCESS_STEPS } from "../data";
import { useI18n } from "../context/I18nContext";

export const LearningProcess: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="process" className="w-full py-20 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200/60 dark:border-blue-800/60">
            {t("processBadge")}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mt-3 tracking-tight">
            {t("processTitle")}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3">
            {t("processSubtitle")}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 relative">
          {LEARNING_PROCESS_STEPS.map((st, idx) => (
            <div
              key={st.stepNumber}
              id={`process-step-${st.stepNumber}`}
              className="relative bg-slate-50 dark:bg-slate-900 p-6 sm:p-7 xl:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
                    {st.stepNumber}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider">
                    Step 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {st.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {st.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-200/70 dark:border-slate-800 flex items-center gap-1.5 text-xs font-semibold text-blue-700 dark:text-blue-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Student Guided</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
