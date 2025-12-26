import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Code2, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Incubator", href: "#incubator" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
            <Code2 className="h-8 w-8 text-primary" />
            <span className="hidden sm:inline">JD <span className="text-primary">Conradie</span></span>
            <span className="sm:hidden">JD<span className="text-primary">C</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
          <Button 
            variant="default" 
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={() => scrollToSection("#contact")}
          >
            Let's Talk
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-lg font-medium text-left text-foreground hover:text-primary py-2"
                >
                  {link.name}
                </button>
              ))}
              <div className="flex gap-4 mt-4 pt-4 border-t border-white/10">
                <a href="https://github.com/jdc891010" className="text-muted-foreground hover:text-primary"><Github /></a>
                <a href="https://www.linkedin.com/in/jd-conradie/" className="text-muted-foreground hover:text-primary"><Linkedin /></a>
                <a href="mailto:jdconradie@gmail.com" className="text-muted-foreground hover:text-primary"><Mail /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
