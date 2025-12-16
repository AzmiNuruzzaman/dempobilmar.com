import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#1F2933]">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <h2 className="text-white mb-4">{t.contact.title}</h2>
        <p className="text-gray-300 mb-12 text-lg">
          {t.contact.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#008300]/20 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-[#008300]" />
            </div>
            <p className="text-gray-300">info@dempobilmar.co.id</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#008300]/20 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-[#008300]" />
            </div>
            <p className="text-gray-300">+62 21 5555 1234</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#008300]/20 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-[#008300]" />
            </div>
            <p className="text-gray-300">Jakarta, Indonesia</p>
          </div>
        </div>

        <button className="bg-[#008300] text-white px-12 py-4 text-lg hover:bg-[#006600] transition-colors duration-300">
          Contact Us Today
        </button>
      </div>
    </section>
  );
}