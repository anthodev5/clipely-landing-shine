import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  onOpenContact: () => void;
}

const CTASection = ({ onOpenContact }: CTASectionProps) => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl bg-primary p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground tracking-tight mb-4">
            Ready to build your next SaaS?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Let's talk about your project. We'll get back to you within 24 hours with a tailored proposal.
          </p>
          <Button variant="secondary" className="rounded-full px-8 py-3 h-auto text-base font-semibold" onClick={onOpenContact}>
            Get in Touch <ArrowRight className="ml-1 !size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
