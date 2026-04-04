import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center" style={{ background: "var(--hero-gradient)" }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(230_80%_70%/0.4),transparent_60%)]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground tracking-tight mb-4">
              Ready to build your next SaaS?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Let's talk about your project. We'll get back to you within 24 hours with a tailored proposal.
            </p>
            <Button variant="hero-outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Get in Touch <ArrowRight className="ml-1 !size-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
