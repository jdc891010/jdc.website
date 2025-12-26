import { motion } from "framer-motion";
import { Database, Server, Cloud, BookOpen, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function CurrentLearning() {
  return (
    <section id="learning" className="py-24 bg-gradient-to-b from-black/50 to-transparent">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Current <span className="text-gradient-accent">Focus</span></h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I believe in continuous improvement. Here's what I'm deep-diving into right now to level up my engineering capabilities.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1 bg-blue-500/10 p-3 rounded-lg text-blue-500 h-fit">
                   <Server size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Mastering Golang</h3>
                  <p className="text-muted-foreground mb-3">
                    Deep diving into Go's concurrency model and performance characteristics.
                  </p>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10 text-sm">
                    <span className="text-blue-400 font-bold">Why Go?</span> It offers the perfect balance of performance and developer productivity. Its CSP-style concurrency (Goroutines & Channels) makes building scalable microservices significantly easier compared to other languages.
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-yellow-500/10 p-3 rounded-lg text-yellow-500 h-fit">
                   <Database size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Relearning SQL</h3>
                  <p className="text-muted-foreground">
                    Going back to first principles with advanced SQL optimization, indexing strategies, and complex query planning for high-load systems.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative overflow-hidden"
          >
             {/* AWS Badge Effect */}
             <div className="absolute top-0 right-0 p-32 bg-orange-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
             
             <div className="relative z-10">
               <div className="flex items-center gap-3 mb-6">
                 <Cloud className="text-orange-500" size={32} />
                 <h3 className="text-2xl font-bold">Certification Goal</h3>
               </div>
               
               <div className="mb-8">
                 <h4 className="text-xl font-bold mb-2">AWS Solutions Architect - Associate</h4>
                 <p className="text-muted-foreground mb-4">Target Date: Q3 2025</p>
                 <div className="flex items-center justify-between text-sm mb-2">
                   <span>Study Progress</span>
                   <span className="font-mono text-orange-500">45%</span>
                 </div>
                 <Progress value={45} className="h-2 bg-white/10" indicatorClassName="bg-orange-500" />
               </div>

               <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white/5 p-4 rounded-lg">
                   <BookOpen size={20} className="mb-2 text-muted-foreground" />
                   <div className="font-bold">Networking</div>
                   <div className="text-xs text-muted-foreground">VPC, Route53, CloudFront</div>
                 </div>
                 <div className="bg-white/5 p-4 rounded-lg">
                   <BookOpen size={20} className="mb-2 text-muted-foreground" />
                   <div className="font-bold">Compute</div>
                   <div className="text-xs text-muted-foreground">EC2, Lambda, ECS</div>
                 </div>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
