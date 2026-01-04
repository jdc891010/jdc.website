import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Share2, Mail, Layers } from "lucide-react";
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

const projects = [
  {
    title: "DataAgent",
    description: "An intelligent autonomous agent for data analysis pipelines. Automates data cleaning, transformation, and insight generation using LLMs.",
    tags: ["Python", "LangChain", "Pandas", "FastAPI"],
    links: { demo: "#", github: "#" },
    featured: true,
  },
  {
    title: "Wranglerlab",
    description: "A visual workspace for messy data. Drag-and-drop interface for complex data wrangling tasks without writing code.",
    tags: ["ReactFlow", "TypeScript", "WASM", "Rust"],
    links: { demo: "#", github: "#" },
    featured: true,
  }
];

export default function FeaturedWork() {
  const { toast } = useToast();

  const handleShare = (projectTitle: string) => {
    toast({
      title: "Link Copied!",
      description: `Share link for ${projectTitle} copied to clipboard.`,
    });
  };

  const handleEmail = (projectTitle: string) => {
    window.location.href = `mailto:?subject=Check out this project: ${projectTitle}&body=I thought you might be interested in this project: ${projectTitle}`;
  };

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Work</span></h2>
            <p className="text-muted-foreground max-w-lg">
              A selection of projects that demonstrate my passion for building complex, user-centric applications.
            </p>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="hidden md:block"
          >
            <Button variant="ghost" className="gap-2 text-primary hover:text-primary/80">
              View All Projects <ArrowRight size={16} />
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full bg-black/40 border-white/10 backdrop-blur-sm hover:border-primary/50 transition-colors group flex flex-col relative overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-gray-900 to-black w-full relative overflow-hidden border-b border-white/5">
                   {project.title === "DataAgent" ? (
                     <img
                       src="/dataagent_logo.png"
                       alt="DataAgent"
                       className="absolute inset-0 w-full h-full object-cover opacity-80"
                     />
                   ) : (
                     <div className="absolute inset-0 flex items-center justify-center text-white/5 group-hover:text-primary/10 transition-colors duration-500">
                        <Layers size={120} />
                     </div>
                   )}
                   
                   <div className="absolute top-6 left-6">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 font-bold text-xl text-white">
                        {project.title[0]}
                      </div>
                   </div>

                   <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-[2px]">
                     <Button size="lg" variant="secondary" className="rounded-full gap-2">
                       <ExternalLink size={18} /> View Live
                     </Button>
                   </div>
                </div>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
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
                      <DropdownMenuItem onClick={() => handleEmail(project.title)} className="cursor-pointer">
                        <Mail className="mr-2 h-4 w-4" /> Email to Friend
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-6 text-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="border-white/10 bg-white/5 px-3 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="link" className="p-0 h-auto text-sm text-primary gap-1 group-hover:gap-2 transition-all">
                    View Code on GitHub <ArrowRight size={14} />
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
