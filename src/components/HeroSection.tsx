import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background" />
      </div>

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/20 blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/20 blur-[120px] animate-pulse-glow" />

      <div className="container mx-auto px-4 text-center relative z-10 pt-20">
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          SaaS Development Agency
        </div>

        <h1 className="animate-fade-up-delay text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] max-w-5xl mx-auto mb-6 text-primary-foreground">
          We build the SaaS{" "}
          <span className="text-gradient-accent">your users will love</span>
        </h1>

        <p className="animate-fade-up-delay-2 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          From idea to launch — we design, develop, and scale world-class SaaS products. 
          Your vision, our engineering excellence.
        </p>

        <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero">
            Start Your Project <ArrowRight className="ml-1 !size-5" />
          </Button>
          <Button variant="hero-light">
            <Play className="mr-1 !size-4" /> Watch Showreel
          </Button>
        </div>

        {/* Trust badges */}
        <div className="mt-16 md:mt-24 animate-fade-up-delay-2">
          <p className="text-primary-foreground/40 text-xs uppercase tracking-widest mb-4">Trusted by innovative companies</p>
          <div className="flex items-center justify-center gap-8 md:gap-12 opacity-40">
            {["TechFlow", "Prismify", "NovaCraft", "DataVault", "QuantumOS"].map((name) => (
              <span key={name} className="text-primary-foreground font-bold text-sm md:text-base tracking-wide">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
