import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onOpenContact: () => void;
}

const HeroSection = ({ onOpenContact }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center bg-background pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            SaaS Development Agency
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground mb-6">
            We build the SaaS
            <br />
            your users
            <br />
            will love.
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
            From idea to launch — we design, develop, and scale world-class SaaS products.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button className="rounded-full px-8 py-3 h-auto text-base font-semibold" onClick={onOpenContact}>
              Start Your Project <ArrowRight className="ml-1 !size-5" />
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-3 h-auto text-base font-semibold">
              See How It Works
            </Button>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 md:mt-24 animate-fade-up-delay-2 text-center">
          <p className="text-muted-foreground text-sm mb-6">Trusted by individuals and teams at the world's best companies</p>
          <div className="flex items-center justify-center gap-8 md:gap-14">
            {["TechFlow", "Prismify", "NovaCraft", "DataVault", "QuantumOS"].map((name) => (
              <span key={name} className="text-muted-foreground/50 font-bold text-base md:text-lg tracking-wide">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
