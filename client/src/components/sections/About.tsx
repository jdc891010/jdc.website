import { motion } from "framer-motion";
import { Code, Coffee, Globe, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Years Experience", value: "10+", icon: Code },
  { label: "Projects Completed", value: "50+", icon: Globe },
  { label: "Coffee Consumed", value: "∞", icon: Coffee },
  { label: "Tech Stack", value: "Full", icon: Cpu },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              More Than Just <span className="text-primary">Code</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I started my journey as a self-taught developer, fueled by curiosity and coffee. Over the last decade, I've evolved into a Staff Engineer who not only writes code but shapes technical strategy and mentors the next generation of builders.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Currently, I'm obsessed with Cloud Native architectures and making the web faster, more accessible, and delightfully interactive. When I'm not coding, you'll find me exploring new coffee shops or hiking the nearest trail.
            </p>

            <div className="p-6 rounded-2xl bg-secondary/5 border border-secondary/20">
              <h4 className="font-bold text-secondary mb-2 flex items-center gap-2">
                🔥 Hot Take
              </h4>
              <p className="italic text-muted-foreground">
                "The strongest engineers practice T-shaped communication: go deep when needed, but constantly bridge across teams, ask the hard questions, and avoid getting distracted by shiny tools that don't serve outcomes."
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-primary/10 rounded-full text-primary">
                      <stat.icon size={24} />
                    </div>
                    <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
