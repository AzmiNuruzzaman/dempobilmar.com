import { useLanguage } from "../i18n/LanguageContext";

export function CompanyIdentity() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#F4F6F5]">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-[#1F2933] mb-8 text-center">{t.companyIdentity.title}</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center mb-16">
          {t.companyIdentity.description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 border-l-4 border-[#008300]">
            <h3 className="text-[#1F2933] mb-4">{t.companyIdentity.mission.title}</h3>
            <p className="text-gray-700">{t.companyIdentity.mission.content}</p>
          </div>
          <div className="bg-white p-8 border-l-4 border-[#008300]">
            <h3 className="text-[#1F2933] mb-4">{t.companyIdentity.vision.title}</h3>
            <p className="text-gray-700">{t.companyIdentity.vision.content}</p>
          </div>
        </div>
      </div>
    </section>
  );
}