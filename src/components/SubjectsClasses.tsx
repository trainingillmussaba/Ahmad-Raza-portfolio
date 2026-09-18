import React, { useState } from "react";
import {
  Calculator,
  BookOpen,
  Atom,
  Globe2,
  BookMarked,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { SUBJECT_LEVELS, SUBJECTS_DATA, SubjectItem } from "../data";
import { useI18n } from "../context/I18nContext";

interface SubjectsClassesProps {
  onSelectSubject: (subjectName: string) => void;
}

const subjectIconMap: Record<string, React.ReactNode> = {
  Calculator: <Calculator className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
  BookOpen: <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
  Atom: <Atom className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
  Globe2: <Globe2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
  BookMarked: <BookMarked className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
};

export const SubjectsClasses: React.FC<SubjectsClassesProps> = ({ onSelectSubject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { t } = useI18n();

  const filteredSubjects =
    selectedCategory === "all"
      ? SUBJECTS_DATA
      : SUBJECTS_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section id="classes" className="w-full py-20 md:py-28 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200/60 dark:border-blue-800/60">
            {t("subjectsBadge")}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mt-3 tracking-tight">
            {t("subjectsTitle")}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3">
            {t("subjectsSubtitle")}
          </p>
        </div>

        {/* Interactive Level / Category Pill Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div
            id="subject-level-selector"
            className="inline-flex p-1.5 bg-slate-100/90 dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 gap-1.5 shadow-inner"
          >
            {SUBJECT_LEVELS.map((lvl) => {
              const isActive = selectedCategory === lvl.id;
              let labelText = lvl.label;
              if (lvl.id === "all") labelText = t("filterAll");
              else if (lvl.id === "ged") labelText = t("filterGed");
              else if (lvl.id === "quran") labelText = t("filterQuran");
              else if (lvl.id === "marketing") labelText = t("filterMarketing");

              return (
                <button
                  key={lvl.id}
                  onClick={() => setSelectedCategory(lvl.id)}
                  id={`tab-${lvl.id}`}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-xs"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800"
                  }`}
                >
                  {labelText}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Level Output Panel */}
        <div
          id="subjects-output-panel"
          className="w-full bg-slate-50/80 dark:bg-slate-900/50 rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 dark:border-slate-800"
        >
          {/* Level Header info */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>{selectedCategory === "all" ? t("filterAll") : selectedCategory === "ged" ? t("filterGed") : selectedCategory === "quran" ? t("filterQuran") : t("filterMarketing")}</span>
                <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                {t("subjectsSubtitle")}
              </p>
            </div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 w-fit">
              Showing {filteredSubjects.length} subjects
            </div>
          </div>

          {/* Subjects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
            {filteredSubjects.map((sub: SubjectItem) => (
              <div
                key={sub.id}
                id={`subject-card-${sub.id}`}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {subjectIconMap[sub.iconName] || <BookOpen className="w-6 h-6 text-blue-600" />}
                    </div>
                    <span className="text-[11px] font-semibold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded-full border border-blue-200/60 dark:border-blue-800/60 uppercase">
                      {sub.category === "ged" ? "GED" : sub.category === "quran" ? "Quran" : "Marketing"}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {sub.name}
                  </h4>

                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                    {sub.subtitle}
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {sub.description}
                  </p>
                </div>

                <button
                  onClick={() => onSelectSubject(sub.name)}
                  className="w-full inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100/80 dark:hover:bg-blue-900/60 py-2.5 px-4 rounded-xl transition-colors cursor-pointer border border-blue-100/60 dark:border-blue-800/50"
                >
                  <span>{t("bookDemoForSubject")}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
