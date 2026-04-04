const steps = [
  { num: "01", title: "Discovery", desc: "We dive deep into your vision, market, and users to define the perfect product strategy." },
  { num: "02", title: "Design", desc: "Wireframes, prototypes, and pixel-perfect UI — validated with your team every step of the way." },
  { num: "03", title: "Develop", desc: "Agile sprints with weekly demos. Clean code, thorough testing, and transparent progress." },
  { num: "04", title: "Launch & Scale", desc: "Deployment, monitoring, and continuous iteration. We stay with you post-launch." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">How We Work</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">A proven process, refined over years</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-5">
                <span className="text-xl font-extrabold text-primary-foreground">{step.num}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(100%_-_16px)] w-[calc(100%_-_40px)] h-px bg-primary-foreground/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
