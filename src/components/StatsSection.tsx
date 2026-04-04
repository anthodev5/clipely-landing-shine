const stats = [
  { value: "50+", label: "SaaS Products Shipped" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "3x", label: "Faster Time-to-Market" },
  { value: "24/7", label: "Support & Monitoring" },
];

const StatsSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl md:text-5xl font-extrabold text-gradient">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
