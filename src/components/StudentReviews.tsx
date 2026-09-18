import React from "react";
import { Star, Quote, ShieldCheck } from "lucide-react";
import { REVIEWS, TEACHER_INFO } from "../data";
import { useI18n } from "../context/I18nContext";

export const StudentReviews: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="reviews" className="w-full py-20 md:py-28 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200/60 dark:border-blue-800/60">
            {t("reviewsBadge")}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mt-3 tracking-tight">
            {t("reviewsTitle")}
          </h2>

          {/* Overall Rating & Review Count Header */}
          <div className="mt-4 inline-flex items-center gap-3 bg-slate-50 dark:bg-slate-900 px-4 py-2 rounded-full border border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
              ))}
            </div>
            <span className="text-sm font-bold text-slate-900 dark:text-white">{TEACHER_INFO.rating} Rating</span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              Verified Student Feedback
            </span>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((review, idx) => (
            <div
              key={review.id}
              id={`review-card-${idx}`}
              className="bg-slate-50/70 dark:bg-slate-900/60 p-6 sm:p-7 xl:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md hover:bg-white dark:hover:bg-slate-900 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-slate-300 dark:text-slate-700" />
                </div>

                {/* Review Highlight / Quote */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                  “{review.quote}”
                </h3>

                {/* Full text */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  “{review.fullText}”
                </p>
              </div>

              {/* Student info */}
              <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {review.studentName}
                  </div>
                  <div className="text-xs text-blue-700 dark:text-blue-400 font-medium">
                    {review.course}
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200/60 dark:border-emerald-800 uppercase">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
