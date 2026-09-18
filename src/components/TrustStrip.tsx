import React from "react";
import { ExternalLink, Award, Star, ShieldCheck } from "lucide-react";
import { TRUSTED_BRANDS } from "../data";
import { useI18n } from "../context/I18nContext";

export const TrustStrip: React.FC = () => {
  const { t } = useI18n();
  const marqueeItems = [...TRUSTED_BRANDS, ...TRUSTED_BRANDS];

  return (
    <section
      id="trusted-brands"
      className="w-full py-10 bg-slate-900 text-white dark:bg-slate-950/90 border-y border-slate-800 relative overflow-hidden"
    >
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>{t("trustTitle")}</span>
            </div>
            <p className="text-sm text-slate-300">
              Teaching students online through established learning platforms and educational services.
            </p>
          </div>

          {/* Quick trust highlights */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-1.5 bg-slate-800/80 dark:bg-slate-900 px-3 py-1.5 rounded-full border border-slate-700/60">
              <Award className="w-3.5 h-3.5 text-blue-400" />
              <span>Excellence in Online Tutoring — 2024</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-800/80 dark:bg-slate-900 px-3 py-1.5 rounded-full border border-slate-700/60">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>5.0 Rating From 2 Reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden py-3 bg-slate-950/40 border-y border-slate-800/60">
        <div className="animate-marquee items-center gap-8 px-4">
          {marqueeItems.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-colors shrink-0 group"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-slate-100 text-sm tracking-wide">
                    {brand.name}
                  </span>
                  {brand.url && (
                    <a
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-blue-400 inline-flex items-center transition-colors"
                      title={`Visit ${brand.name} Profile`}
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
                <span className="text-[10px] text-slate-400 font-medium">
                  {brand.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
