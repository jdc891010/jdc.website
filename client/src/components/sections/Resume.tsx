import { motion } from "framer-motion";
import { Calendar, Briefcase, GraduationCap, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const experience = [
  {
    company: "Sand Technologies",
    role: "Data Engineer",
    period: "Sep 2024 - Present",
    description: "Optimizing telecommunications data pipelines and infrastructure. Architecting solutions using AWS services (S3, EC2, Lambda, SQS) and HeavyDB for high-volume data processing.",
    type: "work"
  },
  {
    company: "LifeQ (Health Technology)",
    role: "Research Engineer & Tech Lead",
    period: "Nov 2020 - Oct 2024",
    description: "Progressed from Data Scientist to Technical Lead to Research Engineer. Designed AWS Keyspaces architecture for health algorithms. Built scalable AWS services (SQS, ECS, Lambda, Timestream) for processing wearable device data.",
    type: "work"
  },
  {
    company: "HealthQ Technologies",
    role: "Validation Scientist",
    period: "Jan 2018 - Mar 2020",
    description: "Managed data collection and validation protocols for physiological algorithms. Developed Python parsers to extract value from diverse and messy data formats.",
    type: "work"
  },
  {
    company: "Stellenbosch University",
    role: "MSc - Kinesiology & Exercise Science",
    period: "2012 - 2014",
    description: "Background in Exercise Science and Biochemistry providing a unique perspective in health-tech. Focused on physiological sciences and data analysis.",
    type: "education"
  }
];

export default function Resume() {
  return (
    <section id="resume" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-gradient">Journey</span></h2>
            <p className="text-muted-foreground max-w-2xl mb-8">
              A timeline of my professional career and educational background.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" className="rounded-full border-primary/50 text-primary hover:bg-primary hover:text-white transition-colors gap-2">
                <FileText size={16} /> Standard PDF
              </Button>
              <Button className="rounded-full bg-gradient-to-r from-secondary to-primary text-white hover:opacity-90 transition-opacity gap-2 border-0">
                <Download size={16} /> Creative Resume
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto relative mb-20">
          {/* Vertical Line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 items-start ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-background border border-white/20 flex items-center justify-center z-10 -translate-x-0 md:-translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                  {item.type === "work" ? <Briefcase size={16} className="text-primary" /> : <GraduationCap size={16} className="text-secondary" />}
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 w-full md:w-[calc(50%-2rem)] ${idx % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <div className="glass-panel p-6 rounded-xl hover:border-primary/30 transition-colors group">
                    <div className={`flex flex-col mb-2 ${idx % 2 === 0 ? "md:items-start" : "md:items-end"}`}>
                      <span className="text-sm text-primary font-mono mb-1 flex items-center gap-2 bg-primary/10 px-2 py-0.5 rounded">
                        <Calendar size={12} /> {item.period}
                      </span>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{item.role}</h3>
                      <h4 className="text-lg text-muted-foreground font-medium">{item.company}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Collaboration Inquiry Mini-Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-24"
        >
           <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-white/10 overflow-hidden relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2"></div>
             <CardContent className="p-8 text-center">
               <h3 className="text-2xl font-bold mb-2">Interested in collaborating?</h3>
               <p className="text-muted-foreground mb-6">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
               
               <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                 <input 
                   type="email" 
                   placeholder="Enter your email" 
                   className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                 />
                 <Button className="whitespace-nowrap bg-primary text-white hover:bg-primary/90">
                   Let's Chat
                 </Button>
               </div>
             </CardContent>
           </Card>
        </motion.div>
      </div>
    </section>
  );
}
