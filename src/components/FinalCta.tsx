import React from "react";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useI18n } from "../context/I18nContext";

interface FinalCtaProps {
  onBookDemoClick: () => void;
  onViewClassesClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({
  onBookDemoClick,
  onViewClassesClick,
}) => {
  const { t } = useI18n();

  return (
    <section id="final-cta" className="w-full py-20 md:py-28 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="w-full bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-900 rounded-3xl p-8 sm:p-14 lg:p-16 text-white text-center shadow-xl relative overflow-hidden">
          {/* Decorative backdrop elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-blue-100 text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>Step-by-Step Personalized Learning</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {t("ctaTitle")}
            </h2>

            <p className="text-base sm:text-lg text-blue-100 mb-8 leading-relaxed">
              {t("ctaSubtitle")}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <button
                onClick={onBookDemoClick}
                id="final-book-demo-btn"
                className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-100 active:bg-slate-200 text-blue-800 text-base font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <span>{t("ctaPrimaryBtn")}</span>
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </button>

              <button
                onClick={onViewClassesClick}
                id="final-view-classes-btn"
                className="inline-flex items-center gap-2 bg-blue-700/60 hover:bg-blue-700 text-white text-base font-semibold px-6 py-4 rounded-xl border border-white/20 transition-colors cursor-pointer"
              >
                <span>{t("ctaSecondaryBtn")}</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-blue-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              <span>No long-term commitment. Book a 30-minute trial session.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
