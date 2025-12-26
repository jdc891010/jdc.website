import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Terminal, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const petProjects = [
  {
    title: "Terminal Portfolio",
    description: "A CLI-based version of this portfolio for terminal enthusiasts. Built with Node.js and Ink.",
    tags: ["Node.js", "CLI", "Ink"],
    link: "#",
    icon: Terminal
  },
  {
    title: "Spotify Mood Visualizer",
    description: "Generates color palettes based on the audio features of your currently playing track on Spotify.",
    tags: ["React", "Spotify API", "Canvas"],
    link: "#",
    icon: PlayCircle
  },
  {
    title: "AlgoVisualizer",
    description: "Interactive visualizations for common sorting and pathfinding algorithms.",
    tags: ["D3.js", "Algorithms", "Education"],
    link: "#",
    icon: Code
  }
];

export default function PetProjects() {
  return (
    <section id="pet-projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Pet <span className="text-gradient">Projects</span></h2>
            <p className="text-muted-foreground max-w-lg">
              Fun experiments, weekend hacks, and tools I built to scratch my own itch.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {petProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="bg-black/20 border-white/5 hover:border-white/10 hover:bg-black/40 transition-all group">
                <CardHeader>
                  <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                    <project.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-white/5 text-xs font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-white pl-0">
                    <Github size={16} /> View on GitHub
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
