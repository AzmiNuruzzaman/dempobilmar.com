import { Hero } from "./components/Hero";
import { TrustValues } from "./components/TrustValues";
import { IndustryCarousel } from "./components/IndustryCarousel";
import { VisualCredibility } from "./components/VisualCredibility";
import { CompanyIdentity } from "./components/CompanyIdentity";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LanguageProvider } from "./i18n/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#F4F6F5]">
        <Hero />
        <TrustValues />
        <IndustryCarousel />
        <VisualCredibility />
        <CompanyIdentity />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}