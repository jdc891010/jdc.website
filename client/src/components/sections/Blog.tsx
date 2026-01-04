import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Rss, Mail } from "lucide-react";
import { useState } from "react";

const substackUrl = "https://substack.com/@geekysilverback89";

export default function Blog() {
  const [subscribed, setSubscribed] = useState(false);

  const openSubstack = () => {
    window.open(substackUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="blog" className="py-24 bg-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-orange-500 mb-2 font-medium">
              <Rss size={16} /> Substack
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Thoughts & <span className="text-gradient">Writings</span></h2>
            <p className="text-muted-foreground max-w-lg">
              Read my posts on Substack and subscribe to get new articles via email.
            </p>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="hidden md:block"
          >
            <Button 
              className="gap-2 bg-[#FF6719] hover:bg-[#FF6719]/90 text-white rounded-full"
              onClick={openSubstack}
            >
              <Mail size={16} /> Subscribe on Substack
            </Button>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          <Card className="bg-transparent border-b border-white/10 border-t-0 border-x-0 rounded-none shadow-none p-6 text-center">
            <p className="text-muted-foreground mb-6">
              Visit my Substack to read the latest posts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                className="gap-2 bg-white/10 hover:bg-white/20 text-white rounded-full"
                onClick={openSubstack}
              >
                <ArrowUpRight size={16} /> Open Substack
              </Button>
              <Button 
                className="gap-2 bg-[#FF6719] hover:bg-[#FF6719]/90 text-white rounded-full"
                onClick={openSubstack}
              >
                <Mail size={16} /> Subscribe
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
