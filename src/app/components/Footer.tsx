import { useLanguage } from "../i18n/LanguageContext";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="py-12 bg-[#1F2933] border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white mb-4">{t.footer.about}</h3>
            <p className="text-gray-400 text-sm">{t.footer.aboutText}</p>
          </div>
          <div>
            <h3 className="text-white mb-4">{t.footer.contact}</h3>
            <p className="text-gray-400 text-sm">info@dempobilmar.co.id</p>
            <p className="text-gray-400 text-sm">+62 21 5555 1234</p>
            <p className="text-gray-400 text-sm">{t.footer.address}</p>
          </div>
          <div>
            <h3 className="text-white mb-4">PT Dempo Bilmar Sejahtera</h3>
            <p className="text-gray-400 text-sm">
              {t.footer.aboutText}
            </p>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            © {currentYear} PT Dempo Bilmar Sejahtera. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}