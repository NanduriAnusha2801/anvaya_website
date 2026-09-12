import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TechnologySection from "./components/TechnologySection";
import EducationSection from "./components/EducationSection";
import VisaSection from "./components/VisaSection";
import ImpactSection from "./components/ImpactSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <TechnologySection />
        <EducationSection />
        <VisaSection />
        <ImpactSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
