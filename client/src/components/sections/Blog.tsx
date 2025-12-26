import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Rss, Mail } from "lucide-react";
import { useState, useEffect } from "react";

// Fallback Mock Data
const fallbackFeedItems = [
  {
    title: "The Creatine Gorilla Guide to Coding",
    subtitle: "How to haul heavy weights and heavy data pipelines without breaking a sweat (or production).",
    date: "Dec 12, 2024",
    link: "https://substack.com/@geekysilverback89/posts",
    image: null
  },
  {
    title: "My Battle with Imposter Syndrome",
    subtitle: "Why every senior engineer still feels like they're Googling their way through the day.",
    date: "Nov 28, 2024",
    link: "https://substack.com/@geekysilverback89/posts",
    image: null
  },
  {
    title: "Another Udemy Course I Won't Finish",
    subtitle: "The cycle of dopamine hits, purchasing tutorials, and the art of 'just-in-time' learning.",
    date: "Nov 15, 2024",
    link: "https://substack.com/@geekysilverback89/posts",
    image: null
  }
];

interface BlogPost {
  title: string;
  subtitle: string;
  date: string;
  link: string;
  image: string | null;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>(fallbackFeedItems);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // We use rss2json to bridge the CORS gap for client-side RSS fetching
        // Using the user's handle to construct the feed URL. 
        // Note: We use the publication URL format which is standard for Substack RSS
        const rssUrl = "https://geekysilverback89.substack.com/feed";
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
        
        const res = await fetch(apiUrl);
        const data = await res.json();
        
        if (data.status === "ok" && data.items.length > 0) {
           const newPosts = data.items.slice(0, 3).map((item: any) => {
              // Strip HTML from description for the subtitle
              const plainTextDescription = item.description
                .replace(/<[^>]*>?/gm, '') // Remove HTML tags
                .replace(/&nbsp;/g, ' ') // Replace nbsp
                .trim();

              return {
                title: item.title,
                subtitle: plainTextDescription.substring(0, 150) + (plainTextDescription.length > 150 ? "..." : ""),
                date: new Date(item.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                link: item.link,
                image: item.thumbnail
              };
           });
           setPosts(newPosts);
        }
      } catch (error) {
        console.error("Failed to fetch Substack feed:", error);
        // Silently fall back to mock data which is already set
      } finally {
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, []);

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
              <Rss size={16} /> Substack Feed
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Thoughts & <span className="text-gradient">Writings</span></h2>
            <p className="text-muted-foreground max-w-lg">
              Fresh perspectives on engineering, procrastination, and the digital landscape, delivered directly from my Substack.
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
              onClick={() => window.open("https://substack.com/@geekysilverback89", "_blank")}
            >
              <Mail size={16} /> Subscribe on Substack
            </Button>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {posts.map((post, idx) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="block group">
                <Card className="bg-transparent border-b border-white/10 border-t-0 border-x-0 rounded-none shadow-none hover:bg-white/5 transition-colors p-6">
                   <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                      <div className="flex-grow">
                        <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors mb-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-lg mb-2 line-clamp-2">
                          {post.subtitle}
                        </p>
                        <div className="text-sm text-muted-foreground font-mono">
                          {post.date}
                        </div>
                      </div>
                      
                      {post.image && (
                         <div className="shrink-0 w-24 h-24 rounded-lg overflow-hidden hidden md:block border border-white/10">
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                         </div>
                      )}

                      <div className="shrink-0 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-primary self-center md:self-auto">
                        <ArrowUpRight size={24} />
                      </div>
                   </div>
                </Card>
              </a>
            </motion.div>
          ))}
          
          <div className="pt-8 text-center md:hidden">
             <Button 
               className="w-full gap-2 bg-[#FF6719] hover:bg-[#FF6719]/90 text-white rounded-full"
               onClick={() => window.open("https://substack.com/@geekysilverback89", "_blank")}
             >
               <Mail size={16} /> Subscribe on Substack
             </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
