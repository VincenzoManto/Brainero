import HeroSection from "@/components/HeroSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import UseCasesSection from "@/components/UseCasesSection";
import WhyBraineroSection from "@/components/WhyBraineroSection";
import PricingSection from "@/components/PricingSection";
import ClosingCTASection from "@/components/ClosingCTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ShowcaseSection />
      <IntegrationsSection />
      <UseCasesSection />
      <WhyBraineroSection />
      <PricingSection />
      <ClosingCTASection />
    </main>
  );
};

export default Index;
