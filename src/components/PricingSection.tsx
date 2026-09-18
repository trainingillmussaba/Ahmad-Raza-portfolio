import React, { useState } from "react";
import { Check, X, ArrowRight, HelpCircle } from "lucide-react";
import { HOURLY_PLANS, MONTHLY_PLANS } from "../data";
import { useI18n } from "../context/I18nContext";
import { SelectedPlanInfo } from "../types";
import { PlanBookingModal } from "./PlanBookingModal";

interface PricingSectionProps {
  onSelectPlan?: (planName: string) => void;
  onBookDemoClick?: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectPlan,
  onBookDemoClick,
}) => {
  const [pricingPeriod, setPricingPeriod] = useState<"hourly" | "monthly">("hourly");
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<SelectedPlanInfo | null>(null);
  const { t } = useI18n();

  const handleOpenHourlyPlan = (plan: typeof HOURLY_PLANS[0]) => {
    const planInfo: SelectedPlanInfo = {
      id: plan.id,
      name: plan.name,
      type: "hourly",
      price: plan.price,
      period: plan.period,
      badge: plan.badge,
      bestFor: plan.bestFor,
      summary: plan.summary,
      features: plan.features,
    };
    setSelectedPlanForModal(planInfo);
    if (onSelectPlan) {
      onSelectPlan(`Hourly ${plan.name} ($${plan.price}/hr)`);
    }
  };

  const handleOpenMonthlyPlan = (plan: typeof MONTHLY_PLANS[0]) => {
    const planInfo: SelectedPlanInfo = {
      id: plan.id,
      name: plan.name,
      type: "monthly",
      price: plan.price,
      period: plan.period,
      badge: plan.badge,
      bestFor: plan.bestFor,
      features: plan.features,
    };
    setSelectedPlanForModal(planInfo);
    if (onSelectPlan) {
      onSelectPlan(`Monthly ${plan.name} ($${plan.price}/mo)`);
    }
  };

  const handleOpenDemoModal = () => {
    setSelectedPlanForModal({
      id: "demo-session",
      name: "1-on-1 Trial Demo",
      type: "hourly",
      price: 3,
      period: "/session",
      badge: "30-Min Trial",
      bestFor: "Live diagnostic & concept clarity with Ahmad Raza",
      summary: "Direct 1-on-1 trial session, skill evaluation, study plan roadmap",
      features: [
        "30-Minute Live 1-on-1 Video Session",
        "Direct Subject Assessment with Ahmad Raza",
        "Personalized Preparation Roadmap",
        "LMS & Portal Orientation",
        "Direct Q&A and Syllabus Walkthrough",
      ],
    });
    if (onBookDemoClick) {
      onBookDemoClick();
    }
  };

  return (
    <section id="pricing" className="w-full py-20 md:py-28 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200/60 dark:border-blue-800/60">
            {t("pricingBadge")}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mt-3 tracking-tight">
            {t("pricingTitle")}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3">
            {t("pricingSubtitle")}
          </p>

          {/* Centered Segmented Tab Control */}
          <div className="mt-8 inline-flex p-1.5 bg-slate-200/80 dark:bg-slate-800 rounded-2xl border border-slate-300/80 dark:border-slate-700">
            <button
              onClick={() => setPricingPeriod("hourly")}
              id="pricing-hourly-tab"
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                pricingPeriod === "hourly"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {t("pricingHourly")}
            </button>
            <button
              onClick={() => setPricingPeriod("monthly")}
              id="pricing-monthly-tab"
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                pricingPeriod === "monthly"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {t("pricingMonthly")}
            </button>
          </div>
        </div>

        {/* Tab 1: HOURLY PRICING */}
        {pricingPeriod === "hourly" && (
          <div
            id="hourly-pricing-panel"
            className="w-full space-y-12 animate-in fade-in duration-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {HOURLY_PLANS.map((plan) => (
                <div
                  key={plan.id}
                  id={`plan-card-${plan.id}`}
                  className={`relative rounded-3xl p-7 xl:p-8 flex flex-col justify-between transition-all duration-200 ${
                    plan.isRecommended
                      ? "bg-white dark:bg-slate-900 border-2 border-blue-600 shadow-xl lg:-translate-y-2"
                      : "bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 font-extrabold text-xs uppercase px-3 py-1 rounded-full shadow-sm">
                      {plan.badge}
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                        {plan.bestFor}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                      {plan.summary}
                    </p>

                    <div className="mb-6 flex items-baseline gap-1 pb-6 border-b border-slate-100 dark:border-slate-800">
                      <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
                        ${plan.price}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 font-semibold text-sm">
                        {plan.period}
                      </span>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feat) => {
                        const isInc = feat.status === "included";
                        const isLim = feat.status === "limited";
                        return (
                          <li
                            key={feat.text}
                            className="flex items-center justify-between text-xs sm:text-sm"
                          >
                            <span
                              className={
                                isInc
                                  ? "text-slate-800 dark:text-slate-200 font-medium"
                                  : isLim
                                  ? "text-slate-600 dark:text-slate-400"
                                  : "text-slate-400 dark:text-slate-600 line-through"
                              }
                            >
                              {feat.text}
                            </span>
                            {isInc ? (
                              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold text-xs">
                                <Check className="w-4 h-4" />
                                <span>Included</span>
                              </span>
                            ) : isLim ? (
                              <span className="text-amber-600 dark:text-amber-400 font-medium text-xs bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded">
                                Limited
                              </span>
                            ) : (
                              <span className="text-slate-300 dark:text-slate-700">
                                <X className="w-4 h-4" />
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <button
                    id={`btn-choose-hourly-${plan.name.toLowerCase()}`}
                    onClick={() => handleOpenHourlyPlan(plan)}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      plan.isRecommended
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
                        : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200"
                    }`}
                  >
                    <span>Choose {plan.name} (${plan.price}/hr)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: MONTHLY PRICING */}
        {pricingPeriod === "monthly" && (
          <div
            id="monthly-pricing-panel"
            className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch animate-in fade-in duration-200"
          >
            {MONTHLY_PLANS.map((plan) => (
              <div
                key={plan.id}
                id={`monthly-plan-${plan.id}`}
                className={`relative rounded-3xl p-7 xl:p-8 flex flex-col justify-between transition-all duration-200 ${
                  plan.isRecommended
                    ? "bg-white dark:bg-slate-900 border-2 border-blue-600 shadow-xl lg:-translate-y-2"
                    : "bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-extrabold text-xs uppercase px-3 py-1 rounded-full shadow-sm">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
                    <span className="text-xs font-semibold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-lg">
                      Monthly
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                    {plan.bestFor}
                  </p>

                  <div className="mb-6 flex items-baseline gap-1 pb-6 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
                      ${plan.price}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 font-semibold text-sm">
                      {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium"
                      >
                        <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  id={`btn-choose-monthly-${plan.name.toLowerCase()}`}
                  onClick={() => handleOpenMonthlyPlan(plan)}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    plan.isRecommended
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
                      : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200"
                  }`}
                >
                  <span>Choose {plan.name} (${plan.price}/mo)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Need Help Choosing Callout Box */}
        <div className="mt-14 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Need Help Choosing?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                Not sure which plan fits you? Book a demo session to discuss your curriculum and get an exact learning plan.
              </p>
            </div>
          </div>

          <button
            id="btn-pricing-book-demo-modal"
            onClick={handleOpenDemoModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-xs transition-all shrink-0 cursor-pointer"
          >
            <span>Book Your Demo Class ($3)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* DISTINCT POP-UP MODAL FOR SELECTED PACKAGE */}
      <PlanBookingModal
        isOpen={Boolean(selectedPlanForModal)}
        onClose={() => setSelectedPlanForModal(null)}
        plan={selectedPlanForModal}
      />
    </section>
  );
};

