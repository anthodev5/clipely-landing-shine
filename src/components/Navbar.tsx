import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/clipely-logo.png";
import { Menu, X } from "lucide-react";

const navLinks = ["Services", "Process", "Work"];

interface NavbarProps {
  onOpenContact: () => void;
}

const Navbar = ({ onOpenContact }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Clipely" className="h-8" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {item}
            </a>
          ))}
          <button
            onClick={onOpenContact}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </button>
        </div>

        <div className="hidden md:block">
          <Button size="sm" className="rounded-full px-6" onClick={onOpenContact}>
            Get Started
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 flex flex-col gap-3">
          {navLinks.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>{item}</a>
          ))}
          <button className="text-sm font-medium text-muted-foreground text-left" onClick={() => { setOpen(false); onOpenContact(); }}>Contact</button>
          <Button size="sm" className="rounded-full w-full" onClick={() => { setOpen(false); onOpenContact(); }}>Get Started</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
