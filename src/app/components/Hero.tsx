import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../i18n/LanguageContext";

export function Hero() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Language Switcher - Fixed Position */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1765048808260-9f48d96caf98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBnYXMlMjBpbmR1c3RyaWFsJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzY1ODAxNDQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Industrial facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
        <h1 className="text-5xl md:text-7xl text-white mb-6">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
          {t.hero.subtitle}
        </p>
        <button className="bg-[#008300] text-white px-10 py-4 text-lg hover:bg-[#006600] transition-colors duration-300">
          {t.hero.cta}
        </button>
      </div>
    </section>
  );
}