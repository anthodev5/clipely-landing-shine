import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(217_91%_50%/0.08),transparent_60%)]" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          SaaS Development Agency
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl mx-auto mb-6">
          We build the SaaS{" "}
          <span className="text-gradient">your users will love</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          From idea to launch — we design, develop, and scale world-class SaaS products. 
          Your vision, our engineering excellence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero">
            Start Your Project <ArrowRight className="ml-1 !size-5" />
          </Button>
          <Button variant="hero-outline">
            See Our Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
