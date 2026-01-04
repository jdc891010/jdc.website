import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Backend",
    skills: ["Python", "PostgreSQL", "SQL", "DuckDB", "Go (Entry Level)"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Docker", "AWS", "CI/CD", "Jenkins", "Terraform", "Cloudways"],
  },
  {
    title: "Tools & Others",
    skills: [
      "Git",
      "Bitbucket",
      "Testing",
      "Spark (Entry Level)",
      "Linux",
      "Bash",
      "Jira",
      "Confluence",
      "VS Code",
      "Jupyter",
      "Pandas",
      "NumPy",
      "Pytest",
    ],
  },
];

const certifications = [
  {
    name: "AWS Certified Data Engineer - Associate",
    issuer: "Amazon Web Services",
    date: "2025",
    color: "border-orange-500/50 text-orange-500",
    link: "https://www.credly.com/badges/11134ec8-e892-4c19-b635-e946987fe48c/public_url"
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    color: "border-blue-500/50 text-blue-500",
    link: "https://www.credly.com/badges/fd261d70-7e16-45de-82ad-5e372677e874/public_url"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive list of the technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 justify-center max-w-3xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-xl h-full"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-white/5 hover:bg-white/10 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center md:max-w-2xl mx-auto">
            {certifications.map((cert, idx) => (
              <motion.a
                key={cert.name}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`block p-6 rounded-xl bg-black/40 border ${cert.color} border-opacity-20 hover:border-opacity-50 transition-all group cursor-pointer hover:bg-white/5`}
              >
                <div className={`text-4xl font-bold mb-2 opacity-20 group-hover:opacity-100 transition-opacity ${cert.color.split(' ')[1]}`}>
                  {cert.date}
                </div>
                <h4 className="font-bold text-lg mb-1 leading-tight">{cert.name}</h4>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
