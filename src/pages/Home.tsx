import AnimSection from "../components/AnimSection";
import MainTitle from "../components/MainTitle";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import WaveDivider from "../components/WaveDivider";

export default function Home() {
  return (
    <main className="min-h-screen font-sans text-white animate-gradient-flow bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_200%]">
      {/* <main className="bg-darkbg text-white font-sans min-h-screen px-6 py-12 space-y-40"> */}
      <AnimSection>
        <MainTitle />
      </AnimSection>
      <AnimSection>
        <AboutSection />
      </AnimSection>

      <AnimSection>
        <ProjectsSection />
      </AnimSection>

      <AnimSection>
        <ContactSection />
      </AnimSection>
    </main>
  );
}
