import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Share2, Mail, Rocket, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

const incubatorProjects = [
  {
    title: "GolfersHub",
    description: "A comprehensive platform for golf enthusiasts to track scores, find courses, and connect with other players. Features real-time leaderboards and AI-powered swing analysis.",
    tags: ["Next.js", "Supabase", "OpenAI API", "Tailwind"],
    links: { demo: "#", github: "#" },
    status: "Prototype Ready",
    color: "bg-green-500/10 text-green-500 border-green-500/20"
  },
  {
    title: "Brews and Bytes",
    description: "An e-commerce solution for specialty coffee roasters. Includes subscription management, inventory tracking, and seamless payment integration with Stripe.",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    links: { demo: "#", github: "#" },
    status: "Prototype Ready",
    color: "bg-orange-500/10 text-orange-500 border-orange-500/20"
  }
];

export default function IdeaIncubator() {
  const { toast } = useToast();

  const handleShare = (projectTitle: string) => {
    toast({
      title: "Link Copied!",
      description: `Share link for ${projectTitle} copied to clipboard.`,
    });
  };

  return (
    <section id="incubator" className="py-24 bg-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-sm text-yellow-500 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              Under Development
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Idea <span className="text-gradient">Incubator</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Projects that started as a spark of inspiration. They have functional prototypes but need the right partner or resources to go to the next level.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {incubatorProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full bg-black/40 border-white/10 backdrop-blur-sm hover:border-primary/50 transition-colors group flex flex-col">
                <CardHeader className="flex flex-row items-start justify-between">
                  <div>
                     <Badge variant="outline" className={`mb-3 ${project.color}`}>
                       {project.status}
                     </Badge>
                     <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                   <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                        <Share2 size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-black/90 border-white/10 backdrop-blur-md">
                      <DropdownMenuItem onClick={() => handleShare(project.title)} className="cursor-pointer">
                        <Share2 className="mr-2 h-4 w-4" /> Copy Link
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-6 text-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-white/5 hover:bg-white/10 transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                     <Button 
                       variant="outline" 
                       size="sm" 
                       className="gap-2 border-white/10 hover:bg-white/5"
                       onClick={() => window.open(project.links.github, "_blank")}
                     >
                        <Github size={16} /> Source Code
                     </Button>
                     <Button 
                       variant="outline" 
                       size="sm" 
                       className="gap-2 border-white/10 hover:bg-white/5"
                       onClick={() => window.open(project.links.demo, "_blank")}
                     >
                        <FileText size={16} /> View Deck
                     </Button>
                     <Button 
                       variant="default" 
                       size="sm" 
                       className="gap-2 bg-primary/20 text-primary hover:bg-primary/30 border-primary/20"
                       onClick={() => window.open(project.links.demo, "_blank")}
                     >
                        <ExternalLink size={16} /> Live Demo
                     </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-white/10 rounded-2xl p-8 md:p-12 text-center"
        >
           <Rocket className="w-12 h-12 text-primary mx-auto mb-6" />
           <h3 className="text-2xl md:text-3xl font-bold mb-4">Interested in taking these further?</h3>
           <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
             I'm looking for partners or investors to help productionize these concepts. I'm happy to stay on as a <span className="text-white font-bold">Technical Product Owner</span> or <span className="text-white font-bold">Advisor</span>.
           </p>
          <Button 
            size="lg" 
            className="rounded-full font-bold"
            onClick={() => {
              const contactEl = document.querySelector("#contact");
              if (contactEl) {
                contactEl.scrollIntoView({ behavior: "smooth" });
              } else {
                window.open("mailto:jdconradie8910@gmail.com", "_self");
              }
            }}
          >
            Let's Discuss Opportunities
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
