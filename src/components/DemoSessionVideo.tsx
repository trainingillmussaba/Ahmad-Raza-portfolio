import React, { useState } from "react";
import { Play, CheckCircle2, ArrowRight, HelpCircle, Sparkles } from "lucide-react";
import { DEMO_VIDEOS, DemoVideoItem } from "../data";
import { useI18n } from "../context/I18nContext";

interface DemoSessionVideoProps {
  onBookDemoClick: () => void;
  onAskQuestionClick: () => void;
}

export const DemoSessionVideo: React.FC<DemoSessionVideoProps> = ({
  onBookDemoClick,
  onAskQuestionClick,
}) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const activeVideo: DemoVideoItem = DEMO_VIDEOS[activeVideoIndex] || DEMO_VIDEOS[0];
  const { t } = useI18n();

  const demoObjectives = [
    "Understand your learning goals",
    "Discuss your current level",
    "Identify difficult topics",
    "Explain the class method",
    "Discuss your study plan",
    "Answer your questions",
  ];

  return (
    <section id="demo-video" className="w-full py-20 md:py-28 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200/60 dark:border-blue-800/60">
            {t("videoBadge")}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mt-3 tracking-tight">
            {t("videoTitle")}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3">
            {t("videoSubtitle")}
          </p>
        </div>

        {/* Video Player + Playlist Interface */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Playlist (approx 35%) */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 p-4 sm:p-6 bg-slate-50/70 dark:bg-slate-950/50 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Teaching Session Playlist
                  </span>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded">
                    4 Recordings
                  </span>
                </div>

                <div className="space-y-2">
                  {DEMO_VIDEOS.map((item, idx) => {
                    const isActive = idx === activeVideoIndex;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveVideoIndex(idx)}
                        id={`playlist-item-${idx}`}
                        className={`w-full text-left p-3.5 rounded-xl transition-all flex items-start gap-3 cursor-pointer border ${
                          isActive
                            ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                            : "bg-white dark:bg-slate-900 hover:bg-slate-100/90 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200/70 dark:border-slate-800"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                            isActive ? "bg-white/20 text-white" : "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400"
                          }`}
                        >
                          <Play className="w-4 h-4 fill-current ml-0.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div
                            className={`text-[11px] font-semibold uppercase tracking-wider mb-0.5 truncate ${
                              isActive ? "text-blue-100" : "text-blue-600 dark:text-blue-400"
                            }`}
                          >
                            {item.subject}
                          </div>
                          <div className="text-xs sm:text-sm font-bold truncate">
                            {item.title}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                Click any session above to preview teaching pace and visual instructional clarity.
              </div>
            </div>

            {/* Right: Main Video Player (approx 65%) */}
            <div className="lg:col-span-8 p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
              <div>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-md mb-5 border border-slate-800">
                  <iframe
                    key={activeVideo.youtubeId}
                    src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?rel=0&modestbranding=1`}
                    title={activeVideo.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                      {activeVideo.subject}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                      {activeVideo.title}
                    </h3>
                  </div>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full w-fit">
                    Interactive Online Class
                  </span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                  {activeVideo.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Objectives Box */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                During the Demo Session, We Can:
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4">
              {demoObjectives.map((obj) => (
                <div key={obj} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{obj}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              onClick={onBookDemoClick}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-xs transition-all cursor-pointer"
            >
              <span>Book Your Demo Class ($3)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onAskQuestionClick}
              className="inline-flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm px-5 py-3.5 rounded-xl transition-colors cursor-pointer"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Ask a Question</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
