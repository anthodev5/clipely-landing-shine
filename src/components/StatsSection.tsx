const stats = [
  { value: "50+", label: "SaaS Products Shipped", color: "text-gradient" },
  { value: "98%", label: "Client Satisfaction", color: "text-gradient-accent" },
  { value: "3x", label: "Faster Time-to-Market", color: "text-gradient" },
  { value: "24/7", label: "Support & Monitoring", color: "text-gradient-accent" },
];

const StatsSection = () => {
  return (
    <section className="py-20 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center group">
              <p className={`text-4xl md:text-6xl font-extrabold ${s.color} transition-transform group-hover:scale-110 duration-300`}>{s.value}</p>
              <p className="text-sm text-muted-foreground mt-3 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
