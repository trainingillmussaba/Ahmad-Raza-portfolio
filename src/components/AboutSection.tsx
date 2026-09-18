import React from "react";
import { Play, Sparkles, Quote, CheckCircle2, Award, HeartHandshake } from "lucide-react";
import { TEACHER_INFO } from "../data";
import { useI18n } from "../context/I18nContext";

interface AboutSectionProps {
  onWatchIntroClick: () => void;
  onBookDemoClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onWatchIntroClick,
  onBookDemoClick,
}) => {
  const { t } = useI18n();

  return (
    <section id="about" className="w-full py-20 md:py-28 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column: 40% on desktop */}
          <div className="lg:col-span-5 order-1 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Subtle back gradient */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-100/60 dark:bg-blue-900/20 rounded-full blur-3xl -z-10" />

              <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-800 shadow-xl bg-slate-50 dark:bg-slate-900 group">
                <img
                  src={TEACHER_INFO.photoUrl}
                  alt={TEACHER_INFO.name}
                  className="w-full aspect-4/5 object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Video Play Trigger overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent flex flex-col justify-end p-6">
                  <button
                    onClick={onWatchIntroClick}
                    id="about-play-video-btn"
                    className="inline-flex items-center gap-3 bg-white/95 dark:bg-slate-900/95 hover:bg-white dark:hover:bg-slate-800 text-slate-900 dark:text-white px-4 py-2.5 rounded-xl shadow-md backdrop-blur-xs font-semibold text-sm transition-all hover:scale-105 active:scale-95 cursor-pointer w-fit border border-slate-200 dark:border-slate-700"
                  >
                    <span className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </span>
                    <span>{t("aboutWatchVideo")}</span>
                  </button>
                </div>
              </div>

              {/* Bottom Credential Tag */}
              <div className="mt-4 flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 flex items-center justify-center font-bold">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      {t("navCertified")} Tutor
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      GED & Quran Online Specialist
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200/60 dark:border-emerald-800/60">
                  Verified
                </span>
              </div>
            </div>
          </div>

          {/* Content Column: 60% on desktop */}
          <div className="lg:col-span-7 order-2 lg:order-2 flex flex-col">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("aboutBadge")}</span>
            </div>

            <h2
              id="about-main-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6"
            >
              {t("aboutTitle")}
            </h2>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6">
              <p>{t("aboutP1")}</p>
              <p>{t("aboutP2")}</p>
              <p>{t("aboutP3")}</p>
            </div>

            {/* Teaching Mission Callout */}
            <div
              id="about-teaching-mission"
              className="mb-6 p-4.5 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-800/60 flex items-start gap-3.5"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 mb-0.5">
                  Teaching Mission
                </div>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  “My goal is to make learning simple, clear, practical, and easier to apply.”
                </p>
              </div>
            </div>

            {/* Personal Introduction Card (Soft Quote) */}
            <div
              id="about-personal-quote-card"
              className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/70 dark:from-slate-900 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-xs mb-8"
            >
              <Quote className="w-8 h-8 text-blue-200 dark:text-blue-900/60 absolute top-4 right-4" />
              <div className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span>Personal Message:</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300">
                  Hello, I’m Ahmad Raza
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic mb-3">
                “I enjoy helping students understand things that may seem difficult at first.
                Over the years, I have taught students online and in physical classrooms. This has taught me that every student learns differently. That is why I keep my lessons clear, practical, and suited to the student.
                Whether you are preparing for a GED exam, learning Quran with Tajweed, or building digital marketing skills, you can ask questions, practice, and learn step by step.”
              </p>
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-300">
                Bring your goals, and let’s start from where you are.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onBookDemoClick}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-xs hover:shadow transition-all cursor-pointer"
              >
                <span>{t("aboutScheduleTrial")}</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
              <button
                onClick={onWatchIntroClick}
                className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium text-sm px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{t("aboutWatchVideo")}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
