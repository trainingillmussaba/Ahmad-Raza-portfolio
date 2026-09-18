import React from "react";
import {
  Video,
  GraduationCap,
  CheckCircle2,
  FileText,
  CalendarCheck,
  MessageSquare,
  FolderKanban,
} from "lucide-react";
import { LEARNING_FACILITIES } from "../data";
import { useI18n } from "../context/I18nContext";

const facilityIconMap: Record<string, React.ReactNode> = {
  Video: <Video className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  FileText: <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  CalendarCheck: <CalendarCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  MessageSquare: <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  FolderKanban: <FolderKanban className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
};

export const LearningFacilities: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="facilities" className="w-full py-20 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200/60 dark:border-blue-800/60">
            {t("facilitiesBadge")}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mt-3 tracking-tight">
            {t("facilitiesTitle")}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3">
            {t("facilitiesSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {LEARNING_FACILITIES.map((fac, idx) => (
            <div
              key={fac.title}
              id={`facility-card-${idx}`}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 hover:shadow-md transition-all flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-100/70 dark:bg-blue-950/60 flex items-center justify-center mb-4 shrink-0">
                {facilityIconMap[fac.icon]}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {fac.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {fac.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
