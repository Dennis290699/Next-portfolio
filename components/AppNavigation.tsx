import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import HomeSection from "@/components/pages/HomeSection";
import AboutMe from "@/components/pages/AboutMe";
import SkillsSection from "@/components/pages/SkillsSection";
import ProjectsSection from "@/components/pages/ProjectsSection";
import ContactSection from "@/components/pages/ContactSection";

export default function AppNavigation() {
  
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <Header />
      <main>
        <section id="home">
          <HomeSection />
        </section>
        <section id="about">
          <AboutMe />
        </section>
        <section id="skills-and-services">
          <SkillsSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

