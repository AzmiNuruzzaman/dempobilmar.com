import { useRef } from "react";
import Slider from "react-slick";
import { useLanguage } from "../i18n/LanguageContext";

export function IndustryCarousel() {
  const { t } = useLanguage();
  const sliderRef = useRef<Slider>(null);

  const industries = [
    {
      name: t.industries.oilGas,
      image: "https://images.unsplash.com/photo-1765048808260-9f48d96caf98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBnYXMlMjBpbmR1c3RyaWFsJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzY1ODAxNDQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: t.industries.mining,
      image: "https://images.unsplash.com/photo-1751054770504-c69daeec4721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBlcXVpcG1lbnQlMjBoZWF2eXxlbnwxfHx8fDE3NjU4Njk0NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: t.industries.petrochemical,
      image: "https://images.unsplash.com/photo-1761411926330-2c50890a155d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXRyb2NoZW1pY2FsJTIwcGxhbnQlMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc2NTg2OTQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: t.industries.forestry,
      image: "https://images.unsplash.com/photo-1763058137814-36451458d06d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3RyeSUyMGxvZ2dpbmclMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY1ODY5NDU3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-24 bg-[#F4F6F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-center text-[#1F2933] mb-16">{t.industries.title}</h2>
        
        <div className="carousel-container">
          <Slider ref={sliderRef} {...settings}>
            {industries.map((industry, index) => (
              <div key={index} className="px-4">
                <div className="relative h-80 overflow-hidden group cursor-pointer">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <h3 className="text-white p-6 w-full">{industry.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}