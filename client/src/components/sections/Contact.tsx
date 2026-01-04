import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Coffee, QrCode, Download } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    console.log(values);
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-transparent to-black/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's <span className="text-gradient-accent">Connect</span></h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-lg">
              Have a project in mind or just want to chat about the latest tech? I'm always open to new opportunities and coffee chats.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email Me</h4>
                  <a href="mailto:jdconradie8910@gmail.com" className="text-muted-foreground hover:text-white transition-colors">jdconradie8910@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Location</h4>
                  <p className="text-muted-foreground">Cape Town, South Africa</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg text-accent">
                  <Coffee size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Coffee Chat</h4>
                  <p className="text-muted-foreground mb-2">Book a 30-min intro call</p>
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="rounded-full border-accent text-accent hover:bg-accent hover:text-white"
                      onClick={() => window.open("https://calendar.app.google/f634hSRwTSzum3Li9", "_blank")}
                    >
                      Schedule Now
                    </Button>
                  
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" className="rounded-full text-muted-foreground hover:text-white gap-2">
                          <QrCode size={16} /> vCard
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-black/90 border-white/10 backdrop-blur-xl sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle className="text-center text-xl">Scan to Save Contact</DialogTitle>
                          <DialogDescription className="text-center">
                            Point your phone camera at the code below
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-col items-center justify-center p-6 space-y-6">
                          <div className="bg-white p-4 rounded-xl">
                            {/* Placeholder for QR Code - in a real app use a QR library */}
                            <div className="w-48 h-48 bg-black flex items-center justify-center text-white text-xs text-center p-4">
                               [QR CODE GENERATED HERE]
                               <br/>
                               BEGIN:VCARD
                               <br/>
                               FN:JD Conradie
                               <br/>
                               TEL:+275550123456
                               <br/>
                               EMAIL:hello@nimble-slug.dev
                            </div>
                          </div>
                          <Button className="w-full gap-2" variant="secondary">
                            <Download size={16} /> Download .vcf File
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-2xl"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-black/20 border-white/10 focus:border-primary/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} className="bg-black/20 border-white/10 focus:border-primary/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project..." 
                          className="min-h-[150px] bg-black/20 border-white/10 focus:border-primary/50 resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white py-6 text-lg">
                  Send Message
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12">
        <div className="glass-panel p-6 rounded-2xl">
          <h3 className="text-xl font-bold mb-4">Book a Meeting</h3>
          <p className="text-muted-foreground mb-4">Use the booking link below to schedule time directly.</p>
          <div className="w-full aspect-video bg-white rounded-lg overflow-hidden border border-white/10">
            <iframe 
              src="https://calendar.app.google/f634hSRwTSzum3Li9" 
              className="w-full h-full bg-white" 
              title="JD Booking"
            ></iframe>
          </div>
          <div className="mt-4">
            <a 
              href="https://calendar.app.google/f634hSRwTSzum3Li9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline"
            >
              Open booking page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
