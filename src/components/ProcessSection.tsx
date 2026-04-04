const steps = [
  { num: "01", title: "Discovery", desc: "We dive deep into your vision, market, and users to define the perfect product strategy." },
  { num: "02", title: "Design", desc: "Wireframes, prototypes, and pixel-perfect UI — validated with your team every step of the way." },
  { num: "03", title: "Develop", desc: "Agile sprints with weekly demos. Clean code, thorough testing, and transparent progress." },
  { num: "04", title: "Launch & Scale", desc: "Deployment, monitoring, and continuous iteration. We stay with you post-launch." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">How We Work</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">A proven process, refined over years</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="relative">
              <span className="text-5xl font-extrabold text-primary/10">{step.num}</span>
              <h3 className="text-xl font-bold mt-2 mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
