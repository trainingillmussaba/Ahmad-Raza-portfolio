import React from "react";
import {
  ShieldCheck,
  Play,
  ArrowRight,
  BookOpen,
  Star,
  Award,
  CheckCircle2,
  DollarSign,
  Users,
  CalendarCheck,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { TEACHER_INFO } from "../data";
import { useI18n } from "../context/I18nContext";

interface HeroProps {
  onBookDemoClick: () => void;
  onViewClassesClick: () => void;
  onWatchIntroClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBookDemoClick,
  onViewClassesClick,
  onWatchIntroClick,
}) => {
  const { t } = useI18n();

  // Scrolling ticker items for the bar at the point where the image ends
  const tickerItems = [
    {
      label: "Watch Intro Video",
      icon: <Play className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />,
      action: onWatchIntroClick,
      type: "button",
    },
    {
      label: "Book Demo Session ($3)",
      icon: <CalendarCheck className="w-3.5 h-3.5 text-emerald-400" />,
      action: onBookDemoClick,
      type: "button",
    },
    {
      label: "GED Math Mastery",
      icon: <Sparkles className="w-3.5 h-3.5 text-amber-400" />,
      url: "https://illmussaba.com/courses/ged-mathematical-reasoning-mastery/",
      type: "link",
    },
    {
      label: "GED English / RLA",
      icon: <BookOpen className="w-3.5 h-3.5 text-blue-400" />,
      url: "https://illmussaba.com/courses/english-rla/",
      type: "link",
    },
    {
      label: "GED Science",
      icon: <Sparkles className="w-3.5 h-3.5 text-cyan-400" />,
      url: "https://illmussaba.com/courses/ged-science-mastery/",
      type: "link",
    },
    {
      label: "GED Social Studies",
      icon: <Sparkles className="w-3.5 h-3.5 text-indigo-400" />,
      url: "https://illmussaba.com/courses/ged-social-studies/",
      type: "link",
    },
    {
      label: "Quran with Tajweed",
      icon: <Sparkles className="w-3.5 h-3.5 text-emerald-400" />,
      url: "https://illmussaba.com/courses/quran-reading/",
      type: "link",
    },
    {
      label: "Diploma in Web Design & WordPress",
      icon: <ExternalLink className="w-3.5 h-3.5 text-purple-400" />,
      url: "https://illmussaba.com/courses/diploma-in-web-design-ai-powered-wordpress/",
      type: "link",
    },
  ];

  return (
    <section id="hero" className="relative w-full pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute top-10 left-0 right-0 w-full h-96 bg-gradient-to-b from-blue-50/70 via-indigo-50/20 to-transparent dark:from-blue-950/30 dark:via-slate-950/10 dark:to-transparent -z-10 pointer-events-none" />

      {/* FULL-WIDTH CONTAINER */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: 60% on desktop */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Verified Trust Badge */}
            <div
              id="hero-trust-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/60 text-blue-800 dark:text-blue-300 text-xs sm:text-sm font-semibold mb-6 shadow-xs"
            >
              <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>{t("heroTrustBadge")}</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-main-headline"
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12] mb-6"
            >
              {t("heroHeadline1")} <br className="hidden sm:inline" />
              <span className="text-blue-600 dark:text-blue-400">{t("heroHeadline2")}</span>
            </h1>

            {/* Supporting Text */}
            <p
              id="hero-supporting-text"
              className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-3xl"
            >
              {t("heroSubtitle")}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onBookDemoClick}
                id="hero-primary-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-base font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 cursor-pointer"
              >
                <span>{t("heroBookDemo")}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onViewClassesClick}
                id="hero-secondary-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 active:bg-slate-100 text-slate-700 dark:text-slate-200 text-base font-medium px-5 py-3.5 rounded-xl border border-slate-300/80 dark:border-slate-700 shadow-xs hover:border-slate-400 dark:hover:border-slate-600 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
              >
                <span>{t("heroViewClasses")}</span>
              </button>

              <button
                onClick={onWatchIntroClick}
                id="hero-watch-intro-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 bg-blue-50/70 dark:bg-slate-900 hover:bg-blue-100/70 dark:hover:bg-slate-800 text-sm font-semibold px-4 py-3 rounded-xl border border-blue-100 dark:border-slate-800 transition-colors cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>{t("heroWatchIntro")}</span>
              </button>
            </div>

            {/* Compact Trust / Stat Indicators */}
            <div
              id="hero-trust-indicators"
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-slate-200/80 dark:border-slate-800 w-full"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-100/70 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                    {t("heroStatExperience")}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {t("heroStatExperienceLabel")}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100/70 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                    {t("heroStatGed")}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {t("heroStatGedLabel")}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-100/70 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                    {t("heroStatBilingual")}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {t("heroStatBilingualLabel")}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-yellow-100/70 dark:bg-yellow-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                    {t("heroStatRating")}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {t("heroStatRatingLabel")}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Teacher Portrait with NO white border, Rounded Corners, 4 Well-Aligned Floating Cards & Scrolling Bar */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Subtle background glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/15 to-indigo-500/15 rounded-3xl blur-2xl -z-10 pointer-events-none" />

              {/* FLOATING CARD 1: 5.0 Rating (Top-Left, clearly aligned & visible) */}
              <div
                id="hero-floating-card-rating"
                className="absolute -top-3 left-2 sm:-left-4 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md py-2 px-3 sm:px-3.5 rounded-2xl border border-slate-200/90 dark:border-slate-700/90 shadow-xl flex items-center gap-2.5 transition-transform hover:scale-105"
              >
                <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200/60 dark:border-amber-800/60 flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight flex items-center gap-1">
                    <span>5.0 / 5.0</span>
                    <span className="text-[10px] text-amber-600 dark:text-amber-400 font-bold">★★★★★</span>
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                    25+ Verified Student Reviews
                  </div>
                </div>
              </div>

              {/* FLOATING CARD 2: Hourly Rate (Top-Right, explicitly requested by teacher) */}
              <div
                id="hero-floating-card-rate"
                className="absolute -top-3 right-2 sm:-right-4 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md py-2 px-3 sm:px-3.5 rounded-2xl border border-slate-200/90 dark:border-slate-700/90 shadow-xl flex items-center gap-2.5 transition-transform hover:scale-105"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/60 flex items-center justify-center shrink-0 text-emerald-600 dark:text-emerald-400">
                  <DollarSign className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-emerald-600 dark:text-emerald-400 leading-tight">
                    $7 – $12 / hr
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                    Affordable 1-on-1 Rates
                  </div>
                </div>
              </div>

              {/* MAIN IMAGE CONTAINER: No white border, pure border-radius corners with drop shadow */}
              <div
                id="hero-portrait-image-wrapper"
                className="relative w-full aspect-4/5 rounded-3xl overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-800"
              >
                <img
                  src={TEACHER_INFO.photoUrl}
                  alt={TEACHER_INFO.name}
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent pointer-events-none" />

                {/* Overlaid Teacher Identity Strip at the bottom of the photo */}
                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                      {t("heroAvailableDemo")}
                    </span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-sm">
                    {TEACHER_INFO.name}
                  </div>
                  <div className="text-xs text-slate-200 line-clamp-1">
                    {t("navTagline")}
                  </div>
                </div>
              </div>

              {/* FLOATING CARD 3: 1:1 Live Online Tutoring (Bottom-Left) */}
              <div
                id="hero-floating-card-sessions"
                className="absolute bottom-20 left-2 sm:-left-4 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md py-2 px-3 sm:px-3.5 rounded-2xl border border-slate-200/90 dark:border-slate-700/90 shadow-xl flex items-center gap-2.5 transition-transform hover:scale-105"
              >
                <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
                    {t("heroOneOnOne")}
                  </div>
                  <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {t("heroLiveOnline")}
                  </div>
                </div>
              </div>

              {/* FLOATING CARD 4: Demo Session ($3) Available (Bottom-Right) */}
              <div
                id="hero-floating-card-demo"
                className="absolute bottom-20 right-2 sm:-right-4 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md py-2 px-3 sm:px-3.5 rounded-2xl border border-slate-200/90 dark:border-slate-700/90 shadow-xl flex items-center gap-2.5 transition-transform hover:scale-105 cursor-pointer"
                onClick={onBookDemoClick}
              >
                <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <CalendarCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
                    Demo Session ($3)
                  </div>
                  <div className="text-[10px] text-indigo-600 dark:text-indigo-400 font-medium">
                    30-Min Live Trial
                  </div>
                </div>
              </div>

              {/* SCROLLING STRIP-LIKE ELEMENT: At the point where the image ends */}
              <div
                id="hero-image-end-ticker-bar"
                className="mt-4 w-full bg-slate-900 dark:bg-slate-950/90 border border-slate-800 rounded-2xl shadow-xl overflow-hidden py-2.5 px-3 flex items-center gap-3 relative"
              >
                {/* Left Tag Indicator */}
                <div className="shrink-0 flex items-center gap-1.5 px-2 py-1 rounded-lg bg-blue-600/90 text-white text-[11px] font-bold tracking-wide uppercase shadow-xs z-10">
                  <Play className="w-2.5 h-2.5 fill-current" />
                  <span>Highlights</span>
                </div>

                {/* Animated Marquee Ticker */}
                <div className="overflow-hidden w-full relative">
                  <div className="animate-marquee flex items-center gap-4 whitespace-nowrap">
                    {[...tickerItems, ...tickerItems].map((item, i) => (
                      <div key={i} className="inline-flex items-center">
                        {item.type === "button" ? (
                          <button
                            onClick={item.action}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700/60 transition-all cursor-pointer"
                          >
                            {item.icon}
                            <span>{item.label}</span>
                          </button>
                        ) : (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-medium border border-slate-700/60 transition-all"
                          >
                            {item.icon}
                            <span>{item.label}</span>
                          </a>
                        )}
                        <span className="mx-2 text-slate-600 text-xs">•</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
