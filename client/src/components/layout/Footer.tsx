import { Github, Linkedin, Mail, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* "Before You Go" CTA Section */}
      <section className="py-12 border-t border-white/5 bg-gradient-to-b from-transparent to-black/80">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Ready to start a project?</h3>
            <p className="text-muted-foreground">Let's turn your ideas into reality.</p>
          </div>
          <div className="flex gap-4">
            <Button 
              size="lg" 
              className="rounded-full bg-white text-black hover:bg-white/90 font-bold"
              onClick={() => window.location.href = "mailto:jdconradie8910@gmail.com"}
            >
              Hire Me Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full border-white/20 hover:bg-white/10"
              onClick={() => {
                const el = document.querySelector("#projects") || document.querySelector("#resume");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Services
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black py-12 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">JD <span className="text-primary">Conradie</span></h3>
              <p className="text-muted-foreground max-w-xs mb-6">
                aka "Nimble Slug". Building scalable solutions and digital experiences with modern technologies. Always learning, always shipping.
              </p>
              <div className="flex gap-3">
                <a href="https://github.com/jdc891010" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 rounded-full hover:bg-primary hover:text-white transition-all"><Github size={18} /></a>
                <a href="https://www.linkedin.com/in/jd-conradie/" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 rounded-full hover:bg-primary hover:text-white transition-all"><Linkedin size={18} /></a>
                <a href="mailto:jdconradie8910@gmail.com" className="bg-white/5 p-2 rounded-full hover:bg-primary hover:text-white transition-all"><Mail size={18} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Navigation</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><a href="#about" className="hover:text-primary transition-colors">About Me</a></li>
                <li><a href="#projects" className="hover:text-primary transition-colors">Featured Projects</a></li>
                <li><a href="#skills" className="hover:text-primary transition-colors">Tech Stack</a></li>
                <li><a href="#resume" className="hover:text-primary transition-colors">Experience</a></li>
              </ul>
            </div>

            {/* Removed Recent Posts */}
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>&copy; {currentYear} JD Conradie. All rights reserved.</p>
            
            <div className="flex items-center gap-6">
               <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span>System Status: Operational</span>
               </div>
               <p className="flex items-center gap-1">
                Built with Next.js & <Heart size={12} className="text-red-500 fill-red-500" />
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
