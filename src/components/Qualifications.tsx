import React, { useState } from "react";
import {
  Award,
  Calendar,
  FileText,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  ShieldCheck,
  ZoomIn,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import { QUALIFICATIONS, QualificationItem } from "../data";
import { CertificateModal } from "./CertificateModal";
import { useI18n } from "../context/I18nContext";

export const Qualifications: React.FC = () => {
  const { t } = useI18n();
  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"tabs" | "timeline">("tabs");

  const [activeCert, setActiveCert] = useState<{
    url: string;
    title: string;
    institution: string;
  } | null>(null);

  const activeQualification = QUALIFICATIONS[activeTabIdx];

  const handleNextMilestone = () => {
    setActiveTabIdx((prev) => (prev + 1) % QUALIFICATIONS.length);
  };

  const handlePrevMilestone = () => {
    setActiveTabIdx((prev) => (prev - 1 + QUALIFICATIONS.length) % QUALIFICATIONS.length);
  };

  return (
    <section
      id="qualifications"
      className="w-full py-20 md:py-28 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800 transition-colors"
    >
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200/60 dark:border-blue-800/60">
            {t("qualificationsBadge")}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mt-3 tracking-tight">
            {t("qualificationsTitle")}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3">
            Academic degrees, formal milestones, and verified educational credentials with official certificates displayed alongside each achievement.
          </p>

          {/* View Mode Toggle: Interactive Tabs vs Progressive Timeline */}
          <div className="mt-7 inline-flex p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setViewMode("tabs")}
              id="view-mode-tabs"
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                viewMode === "tabs"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Interactive Side-by-Side View
            </button>
            <button
              onClick={() => setViewMode("timeline")}
              id="view-mode-timeline"
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                viewMode === "timeline"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              All Milestones Timeline
            </button>
          </div>
        </div>

        {/* MODE 1: INTERACTIVE TABS ON LEFT, CORRESPONDING CERTIFICATION ON RIGHT */}
        {viewMode === "tabs" && (
          <div className="max-w-6xl mx-auto bg-slate-50/70 dark:bg-slate-900/60 rounded-3xl p-4 sm:p-7 md:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column (5 cols): Qualification Milestone Tabs */}
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center justify-between mb-1 px-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Select Milestone
                  </span>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    Step {activeTabIdx + 1} of {QUALIFICATIONS.length}
                  </span>
                </div>

                {QUALIFICATIONS.map((q, idx) => {
                  const isActive = idx === activeTabIdx;
                  return (
                    <button
                      key={q.title}
                      onClick={() => setActiveTabIdx(idx)}
                      id={`qual-tab-${idx}`}
                      className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer relative ${
                        isActive
                          ? "bg-white dark:bg-slate-800 border-blue-600 dark:border-blue-500 shadow-md ring-1 ring-blue-500/20"
                          : "bg-white/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/80 hover:bg-white dark:hover:bg-slate-800 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span
                          className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                            isActive
                              ? "bg-blue-600 text-white"
                              : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                          }`}
                        >
                          {q.year}
                        </span>

                        {q.certificateUrl ? (
                          <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>HD Certificate</span>
                          </span>
                        ) : (
                          <span className="text-[11px] font-medium text-slate-400">
                            Verified Credential
                          </span>
                        )}
                      </div>

                      <h4
                        className={`text-sm sm:text-base font-extrabold leading-snug line-clamp-1 ${
                          isActive
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-slate-900 dark:text-white"
                        }`}
                      >
                        {q.title}
                      </h4>

                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                        {q.institution}
                      </p>

                      {/* Active Arrow Indicator */}
                      {isActive && (
                        <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-3 bg-white dark:bg-slate-800 border-t border-r border-blue-600 dark:border-blue-500 rotate-45" />
                      )}
                    </button>
                  );
                })}

                {/* Milestone Stepper Navigation Buttons */}
                <div className="pt-2 flex items-center justify-between gap-3">
                  <button
                    onClick={handlePrevMilestone}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  <button
                    onClick={handleNextMilestone}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs cursor-pointer"
                  >
                    <span>Next Milestone</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column (7 cols): Selected Qualification Info & Associated Certificate Preview */}
              <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm animate-in fade-in duration-200">
                {/* Milestone Title Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
                        Year: {activeQualification.year}
                      </span>
                      {activeQualification.badge && (
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                          {activeQualification.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mt-2">
                      {activeQualification.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                      {activeQualification.institution}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed my-4">
                  {activeQualification.description}
                </p>

                {/* CORRESPONDING CERTIFICATION / CREDENTIAL PREVIEW */}
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span>Associated Official Certificate & Verification:</span>
                    </span>

                    {activeQualification.certificateUrl && (
                      <span className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1">
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Click Image for Full View</span>
                      </span>
                    )}
                  </div>

                  {activeQualification.certificateUrl ? (
                    <div
                      onClick={() =>
                        setActiveCert({
                          url: activeQualification.certificateUrl!,
                          title: activeQualification.title,
                          institution: activeQualification.institution,
                        })
                      }
                      className="group relative rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 bg-slate-950 shadow-md hover:shadow-xl transition-all cursor-pointer"
                    >
                      {/* Image Thumbnail with subtle hover scale */}
                      <div className="relative aspect-16/10 sm:aspect-16/9 bg-slate-900 flex items-center justify-center overflow-hidden">
                        <img
                          src={activeQualification.certificateUrl}
                          alt={`${activeQualification.title} Certificate`}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 bg-white"
                          loading="eager"
                          referrerPolicy="no-referrer"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs sm:text-sm">
                          <div className="bg-blue-600 px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
                            <ZoomIn className="w-4 h-4" />
                            <span>Click to Open Full Complete Certificate</span>
                          </div>
                        </div>
                      </div>

                      {/* Certificate Bottom Banner */}
                      <div className="p-3 bg-slate-50 dark:bg-slate-800/90 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span className="font-semibold text-slate-800 dark:text-slate-200">
                            Verified Original Document
                          </span>
                        </div>
                        <button
                          type="button"
                          className="font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline cursor-pointer"
                        >
                          <span>Expand Full Image</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Verified Academic Credential Card (for OTHM Level 6 & Quran Sanad) */
                    <div className="rounded-2xl p-6 border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-slate-800/60 dark:to-slate-900/60 flex flex-col justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                          {activeQualification.title.includes("Quran") ? (
                            <BookOpen className="w-6 h-6" />
                          ) : (
                            <GraduationCap className="w-6 h-6" />
                          )}
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                            {activeQualification.title}
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            Awarded by {activeQualification.institution}
                          </p>
                          <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                            Official academic qualification and transcript record completed in {activeQualification.year}. Verification credentials can be shared upon enrollment.
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                          <ShieldCheck className="w-4 h-4" />
                          <span>Academic Sanad & Diploma Verification</span>
                        </span>
                        <span className="text-[11px] font-bold text-slate-400">
                          {activeQualification.year}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODE 2: FULL PROGRESSIVE TIMELINE DISPLAYING EVERY MILESTONE & CERTIFICATE SIDE-BY-SIDE */}
        {viewMode === "timeline" && (
          <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-200">
            {QUALIFICATIONS.map((q, idx) => (
              <div
                key={q.title}
                id={`timeline-milestone-${idx}`}
                className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  {/* Left Column: Milestone Details */}
                  <div className="lg:col-span-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-blue-600 text-white">
                        {q.year}
                      </span>
                      {q.badge && (
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                          {q.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                      {q.title}
                    </h3>

                    <div className="text-xs font-bold text-slate-500 dark:text-slate-400">
                      {q.institution}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {q.description}
                    </p>
                  </div>

                  {/* Right Column: Corresponding Certificate Preview */}
                  <div className="lg:col-span-6">
                    {q.certificateUrl ? (
                      <div
                        onClick={() =>
                          setActiveCert({
                            url: q.certificateUrl!,
                            title: q.title,
                            institution: q.institution,
                          })
                        }
                        className="group relative rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 bg-slate-950 shadow-md hover:shadow-xl transition-all cursor-pointer"
                      >
                        <div className="aspect-16/10 bg-slate-900 flex items-center justify-center overflow-hidden">
                          <img
                            src={q.certificateUrl}
                            alt={`${q.title} Certificate`}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 bg-white"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs sm:text-sm">
                            <div className="bg-blue-600 px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
                              <ZoomIn className="w-4 h-4" />
                              <span>View Full HD Certificate</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-2.5 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                            <span>Official Certificate</span>
                          </span>
                          <span className="text-blue-600 dark:text-blue-400 font-bold flex items-center gap-1">
                            <span>Open Full</span>
                            <ExternalLink className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="rounded-2xl p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                          <GraduationCap className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase text-slate-400">
                            Academic Credential
                          </div>
                          <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                            {q.institution}
                          </div>
                          <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">
                            ✓ Verified Qualification
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Full Complete Image Lightbox Modal with Zoom Controls */}
      <CertificateModal
        isOpen={Boolean(activeCert)}
        onClose={() => setActiveCert(null)}
        certificateUrl={activeCert?.url || null}
        certificateTitle={activeCert?.title || ""}
        institution={activeCert?.institution || ""}
      />
    </section>
  );
};
