import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center bg-gradient-primary">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/20 blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-secondary/20 blur-[100px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,transparent_0%,hsl(220_30%_8%/0.2)_100%)]" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground tracking-tight mb-4">
              Ready to build your next SaaS?
            </h2>
            <p className="text-primary-foreground/75 text-lg max-w-xl mx-auto mb-8">
              Let's talk about your project. We'll get back to you within 24 hours with a tailored proposal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero-light">
                Get in Touch <ArrowRight className="ml-1 !size-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
