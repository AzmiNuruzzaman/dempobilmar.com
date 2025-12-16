import { ShieldCheck, Award, TrendingUp, Handshake } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export function TrustValues() {
  const { t } = useLanguage();

  const values = [
    {
      icon: ShieldCheck,
      title: t.trustValues.values.quality.title,
      description: t.trustValues.values.quality.description
    },
    {
      icon: Award,
      title: t.trustValues.values.reliability.title,
      description: t.trustValues.values.reliability.description
    },
    {
      icon: TrendingUp,
      title: t.trustValues.values.expertise.title,
      description: t.trustValues.values.expertise.description
    },
    {
      icon: Handshake,
      title: t.trustValues.values.commitment.title,
      description: t.trustValues.values.commitment.description
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-center text-[#1F2933] mb-16">{t.trustValues.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#008300]/10 mb-6">
                <value.icon className="w-8 h-8 text-[#008300]" />
              </div>
              <h3 className="text-[#1F2933] mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}