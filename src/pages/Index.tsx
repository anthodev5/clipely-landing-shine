import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";

const Index = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenContact={() => setContactOpen(true)} />
      <HeroSection onOpenContact={() => setContactOpen(true)} />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <CTASection onOpenContact={() => setContactOpen(true)} />
      <Footer />
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
};

export default Index;
