import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CurrentLearning from "@/components/sections/CurrentLearning";
import FeaturedWork from "@/components/sections/Projects";
import IdeaIncubator from "@/components/sections/IdeaIncubator";
import PetProjects from "@/components/sections/PetProjects";
import Skills from "@/components/sections/Skills";
import Resume from "@/components/sections/Resume";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import FloatingAction from "@/components/ui/FloatingAction";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CurrentLearning />
        <FeaturedWork />
        <IdeaIncubator />
        <PetProjects />
        <Skills />
        <Resume />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <FloatingAction />
    </div>
  );
}
