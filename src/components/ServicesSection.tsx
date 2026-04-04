import { Code2, Layers, Rocket, Palette, Shield, BarChart3 } from "lucide-react";

const services = [
  { icon: Code2, title: "Custom SaaS Development", desc: "Full-stack development tailored to your business logic, from MVP to enterprise-grade platforms.", gradient: "from-primary to-secondary" },
  { icon: Palette, title: "UI/UX Design", desc: "User-centered design that converts. Beautiful interfaces backed by research and tested flows.", gradient: "from-secondary to-accent" },
  { icon: Layers, title: "Architecture & Scalability", desc: "Cloud-native architectures built to handle millions of users without breaking a sweat.", gradient: "from-accent to-primary" },
  { icon: Rocket, title: "MVP & Rapid Prototyping", desc: "Go from concept to a working product in weeks, not months. Validate fast, iterate faster.", gradient: "from-primary to-accent" },
  { icon: Shield, title: "Security & Compliance", desc: "Enterprise-level security, SOC 2 readiness, GDPR compliance — baked in from day one.", gradient: "from-secondary to-primary" },
  { icon: BarChart3, title: "Growth & Analytics", desc: "Integrated analytics, A/B testing, and growth tools to drive your product metrics.", gradient: "from-accent to-secondary" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary/5 blur-[120px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gradient uppercase tracking-wider mb-3">What We Do</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">End-to-end SaaS expertise</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group relative p-6 rounded-2xl border border-border bg-gradient-card hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:glow-primary">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
