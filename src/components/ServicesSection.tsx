import { Code2, Layers, Rocket, Palette, Shield, BarChart3 } from "lucide-react";

const services = [
  { icon: Code2, title: "Custom SaaS Development", desc: "Full-stack development tailored to your business logic, from MVP to enterprise-grade platforms." },
  { icon: Palette, title: "UI/UX Design", desc: "User-centered design that converts. Beautiful interfaces backed by research and tested flows." },
  { icon: Layers, title: "Architecture & Scalability", desc: "Cloud-native architectures built to handle millions of users without breaking a sweat." },
  { icon: Rocket, title: "MVP & Rapid Prototyping", desc: "Go from concept to a working product in weeks, not months. Validate fast, iterate faster." },
  { icon: Shield, title: "Security & Compliance", desc: "Enterprise-level security, SOC 2 readiness, GDPR compliance — baked in from day one." },
  { icon: BarChart3, title: "Growth & Analytics", desc: "Integrated analytics, A/B testing, and growth tools to drive your product metrics." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">End-to-end SaaS expertise</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group p-6 rounded-2xl border border-border bg-card hover:surface-glow hover:border-primary/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
