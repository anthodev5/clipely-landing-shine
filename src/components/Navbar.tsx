import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/clipely-logo-transparent.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Clipely" className="h-8" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#process" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Process</a>
          <a href="#work" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Work</a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </div>

        <div className="hidden md:block">
          <Button variant="hero" size="sm" className="text-sm px-6 py-2 h-9">
            Get Started
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 flex flex-col gap-3">
          <a href="#services" className="text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>Services</a>
          <a href="#process" className="text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>Process</a>
          <a href="#work" className="text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>Work</a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>Contact</a>
          <Button variant="hero" size="sm" className="text-sm w-full">Get Started</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
