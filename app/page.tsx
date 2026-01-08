import HeaderSimple from "../components/HeaderSimple";
import FooterSimple from "../components/FooterSimple";
import Hero from "../components/sections/Hero";
import Skills from "../components/sections/Skills";
import Tools from "../components/sections/Tools";
import Experience from "../components/sections/Experience";
import Attributes from "../components/sections/Attributes";
import Contact from "../components/sections/Contact";
import FAQ from "../components/sections/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderSimple />
      <main id="main-content">
        <Hero />
        <Skills />
        <Tools />
        <Experience />
        <Attributes />
        <Contact />
        <FAQ />
      </main>
      <FooterSimple />
    </div>
  );
}
