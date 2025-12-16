import { useLanguage } from "../i18n/LanguageContext";

const images = [
  {
    url: "https://images.unsplash.com/photo-1678984239499-2f95b25795f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwbWFjaGluZXJ5fGVufDF8fHx8MTc2NTg0MDk1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Advanced warehousing"
  },
  {
    url: "https://images.unsplash.com/photo-1757163565776-d0f3beac79bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMG1hY2hpbmVyeSUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjU4Njk0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Heavy machinery operations"
  },
  {
    url: "https://images.unsplash.com/photo-1761411926330-2c50890a155d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXRyb2NoZW1pY2FsJTIwcGxhbnQlMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc2NTg2OTQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Industrial excellence"
  }
];

export function VisualCredibility() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#1F2933] mb-4">{t.visualCredibility.title}</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">{t.visualCredibility.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative h-96 overflow-hidden group">
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-sm">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}