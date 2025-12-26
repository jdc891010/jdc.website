import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
// import heroBg from "@assets/generated_images/abstract_dark_modern_technology_background_with_blue_and_purple_glowing_particles.png";
// import profileImg from "@assets/faf3ad33-ba9c-48b9-95f9-b4a42c79c0a6_763x763_1766506648573.jpg";

const heroBg = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop";
const profileImg = "/profile.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-background z-0" />

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-primary mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new projects
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Building, <br />
            <span className="text-gradient">just cool stuff</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-4 max-w-lg leading-relaxed">
            I'm <span className="text-white font-semibold">JD Conradie</span> (aka "Nimble Slug"), a Data Engineer, wannabe Cloud Engineer, and aspiring Product Owner specialized in building scalable data architectures, data platforms and random modern web experiences.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white rounded-full px-8 h-12 text-base">
              Contact Me
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-[500px] h-[500px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-[100px] opacity-20 animate-pulse" />
            <img
              src={profileImg}
              alt="JD Conradie"
              className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl border border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500"
            />

            {/* Floating Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -left-8 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl flex items-center gap-4 z-20"
            >
              <div className="bg-secondary/20 p-3 rounded-lg text-secondary">
                <Terminal size={24} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Experience</p>
                <p className="font-bold text-lg">7+ Years</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
