import React from "react";
import {
  Calculator,
  BookOpen,
  Atom,
  Globe2,
  BookMarked,
  TrendingUp,
  ArrowRight,
  ExternalLink,
  GraduationCap,
} from "lucide-react";
import { POPULAR_COURSES, CourseItem } from "../data";
import { useI18n } from "../context/I18nContext";

interface PopularCoursesProps {
  onSelectCourse: (courseTitle: string) => void;
}

const courseIconMap: Record<string, React.ReactNode> = {
  Calculator: <Calculator className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  BookOpen: <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  Globe2: <Globe2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  Atom: <Atom className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  BookMarked: <BookMarked className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
};

export const PopularCourses: React.FC<PopularCoursesProps> = ({ onSelectCourse }) => {
  const { t } = useI18n();

  return (
    <section id="courses" className="w-full py-20 md:py-28 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200/60 dark:border-blue-800/60">
            {t("coursesBadge")}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mt-3 tracking-tight">
            {t("coursesTitle")}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3">
            {t("coursesSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {POPULAR_COURSES.map((course: CourseItem, idx: number) => (
            <div
              key={course.id}
              id={`course-card-${idx}`}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 xl:p-8 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/60 flex items-center justify-center">
                    {courseIconMap[course.iconName] || <BookOpen className="w-5 h-5 text-blue-600" />}
                  </div>
                  <a
                    href={course.lmsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 px-2.5 py-1 rounded-full border border-blue-200/60 dark:border-blue-800/60 transition-colors"
                  >
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>LMS Course</span>
                    <ExternalLink className="w-3 h-3 text-blue-500" />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {course.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  {course.description}
                </p>

                {/* Best For Tag */}
                <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-3 border border-slate-100 dark:border-slate-700/60 mb-6">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-0.5">
                    Best For
                  </div>
                  <div className="text-xs font-medium text-slate-700 dark:text-slate-200">
                    {course.bestFor}
                  </div>
                </div>
              </div>

              {/* Action Buttons: View Details (LMS link) + Book Demo */}
              <div className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={course.lmsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`view-details-${course.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-sm py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 transition-all"
                >
                  <span>View Details</span>
                  <ExternalLink className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                </a>

                <button
                  onClick={() => onSelectCourse(course.subjectKey)}
                  id={`book-${course.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm py-2.5 px-4 rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  <span>Book Demo for Subject ($3)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
