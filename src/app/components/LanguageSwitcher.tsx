import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";

export type Language = "en" | "id" | "zh-CN" | "zh-HK" | "ja";

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

const languages = [
  { code: "en" as Language, name: "English", flag: "🇬🇧" },
  { code: "id" as Language, name: "Bahasa Indonesia", flag: "🇮🇩" },
  { code: "zh-CN" as Language, name: "中文 (简体)", flag: "🇨🇳" },
  { code: "zh-HK" as Language, name: "中文 (繁體)", flag: "🇭🇰" },
  { code: "ja" as Language, name: "日本語", flag: "🇯🇵" }
];

export function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageSelect = (code: Language) => {
    onLanguageChange(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-all duration-300 border border-white/20 hover:border-white/40"
        aria-label="Select language"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline text-sm">{currentLang.flag} {currentLang.name}</span>
        <span className="sm:hidden text-sm">{currentLang.flag}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white shadow-xl border border-gray-200 z-50 animate-fadeIn">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`w-full text-left px-4 py-3 text-sm transition-colors duration-200 flex items-center gap-3 ${
                  lang.code === currentLanguage
                    ? 'bg-[#008300] text-white'
                    : 'text-[#1F2933] hover:bg-[#F4F6F5]'
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span>{lang.name}</span>
                {lang.code === currentLanguage && (
                  <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
