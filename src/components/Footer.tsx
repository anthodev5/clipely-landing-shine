import logo from "@/assets/clipely-logo-transparent.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logo} alt="Clipely" className="h-7" />
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#process" className="hover:text-foreground transition-colors">Process</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 Clipely. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
