import React, { useState, useEffect, useRef } from "react";
import {
  ShieldCheck,
  Menu,
  X,
  ArrowRight,
  ExternalLink,
  Sun,
  Moon,
  Globe,
  Check,
  ChevronDown,
} from "lucide-react";
import { TEACHER_INFO } from "../data";
import { useTheme } from "../context/ThemeContext";
import { useI18n } from "../context/I18nContext";
import { LanguageCode } from "../i18n/translations";

interface HeaderProps {
  onBookDemoClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookDemoClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { t, language, setLanguage, languages, currentLangOption } = useI18n();

  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: t("navAbout"), href: "#about" },
    { name: t("navClasses"), href: "#classes" },
    { name: t("navCourses"), href: "#courses" },
    { name: t("navDemoVideo"), href: "#demo-video" },
    { name: t("navReviews"), href: "#reviews" },
    { name: t("navPricing"), href: "#pricing" },
    { name: t("navFaq"), href: "#faq" },
  ];

  const handleSelectLanguage = (code: LanguageCode) => {
    setLanguage(code);
    setLangDropdownOpen(false);
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 dark:border-slate-800 py-3"
          : "bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800/60 py-4"
      }`}
    >
      {/* FULL-WIDTH CONTAINER with generous responsive horizontal breathing space */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="flex items-center justify-between gap-3">
          {/* Brand / Teacher Identity */}
          <a
            href="#"
            id="nav-brand"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1 shrink-0"
          >
            <div className="relative">
              <img
                src={TEACHER_INFO.photoUrl}
                alt={TEACHER_INFO.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-600/20 group-hover:ring-blue-600/40 transition-all"
                referrerPolicy="no-referrer"
              />
              <span className="absolute -bottom-0.5 -right-0.5 bg-emerald-500 ring-2 ring-white dark:ring-slate-900 w-3.5 h-3.5 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-2.5 h-2.5 text-white" />
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-900 dark:text-white text-base leading-tight tracking-tight">
                  {TEACHER_INFO.name}
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60">
                  {t("navCertified")}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-tight">
                {t("navTagline")}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Language Selector + Dark Mode Toggle + Student LMS + Book Demo */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Language Selector Dropdown */}
            <div className="relative" ref={langMenuRef}>
              <button
                type="button"
                id="language-switcher-btn"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                aria-expanded={langDropdownOpen}
                aria-label={t("languageSelect")}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200/70 dark:hover:bg-slate-700 px-3 py-2 rounded-lg transition-colors border border-slate-200/70 dark:border-slate-700 cursor-pointer"
              >
                <span className="text-base leading-none">{currentLangOption.flag}</span>
                <span className="hidden sm:inline font-medium">{currentLangOption.nativeName}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {langDropdownOpen && (
                <div
                  id="language-dropdown-menu"
                  className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
                >
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800">
                    {t("languageSelect")}
                  </div>
                  {languages.map((lang) => {
                    const isSelected = lang.code === language;
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => handleSelectLanguage(lang.code)}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium transition-colors text-left cursor-pointer ${
                          isSelected
                            ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold"
                            : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-base leading-none">{lang.flag}</span>
                          <span>{lang.nativeName}</span>
                          <span className="text-[10px] text-slate-400 dark:text-slate-500">
                            ({lang.name})
                          </span>
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Dark/Light Mode Switcher */}
            <button
              type="button"
              id="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={theme === "light" ? t("themeDark") : t("themeLight")}
              title={theme === "light" ? t("themeDark") : t("themeLight")}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200/70 dark:hover:bg-slate-700 transition-colors border border-slate-200/70 dark:border-slate-700 cursor-pointer"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-slate-700" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>

            {/* Student LMS Link */}
            <a
              href={TEACHER_INFO.lmsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="header-lms-link"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200/70 dark:hover:bg-slate-700 px-3.5 py-2 rounded-lg transition-colors border border-slate-200/70 dark:border-slate-700"
            >
              <span>{t("navStudentLms")}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>

            {/* Book Demo Button */}
            <button
              onClick={onBookDemoClick}
              id="header-book-demo-btn"
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm px-4 py-2 rounded-lg shadow-xs hover:shadow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 cursor-pointer shrink-0"
            >
              <span>{t("navBookDemo")}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Right Controls: Language Button + Theme Toggle + Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Quick Mobile Language Switcher (Compact) */}
            <button
              type="button"
              id="mobile-lang-quick-toggle"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="p-1.5 rounded-lg text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold flex items-center gap-1 cursor-pointer"
              aria-label="Change language"
            >
              <span>{currentLangOption.flag}</span>
              <span className="text-[11px] uppercase">{currentLangOption.code}</span>
            </button>

            {/* Quick Mobile Dark Mode Toggle */}
            <button
              type="button"
              id="mobile-theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-slate-700" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>

            {/* Book Demo Compact Button */}
            <button
              onClick={onBookDemoClick}
              id="mobile-header-book-btn"
              className="inline-flex items-center bg-blue-600 active:bg-blue-700 text-white font-semibold text-xs px-3 py-1.5 rounded-lg shadow-xs cursor-pointer"
            >
              {t("navBookDemo")}
            </button>

            {/* Mobile Nav Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-nav-toggle"
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Language Dropdown if toggled from header */}
        {langDropdownOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4 shadow-xl z-50">
            <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
              {t("languageSelect")}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleSelectLanguage(lang.code)}
                  className={`flex items-center gap-2 p-2.5 rounded-lg text-xs font-semibold border transition-all ${
                    lang.code === language
                      ? "bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700"
                      : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700"
                  }`}
                >
                  <span className="text-lg leading-none">{lang.flag}</span>
                  <div className="text-left">
                    <div className="leading-tight">{lang.nativeName}</div>
                    <div className="text-[10px] text-slate-400">{lang.name}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Language Selector Grid in Mobile Menu */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
            <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              <span>{t("languageSelect")}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    handleSelectLanguage(lang.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-1.5 p-2 rounded-lg text-xs font-semibold border transition-all ${
                    lang.code === language
                      ? "bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700"
                      : "bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-800"
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span className="truncate">{lang.nativeName}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <a
              href={TEACHER_INFO.lmsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800"
            >
              <span>{t("navStudentLms")}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookDemoClick();
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold text-sm py-2.5 rounded-lg shadow-xs cursor-pointer"
            >
              <span>{t("heroBookDemo")}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
