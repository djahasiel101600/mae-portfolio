import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { Skills } from "./components/sections/Skills";
import { Tools } from "./components/sections/Tools";
import { Experience } from "./components/sections/Experience";
import { Attributes } from "./components/sections/Attributes";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { ScrollProgress } from "./components/scroll-progress";
import { SEO } from "./components/SEO";
import "./App.css";

function App() {
  return (
    <>
      <SEO />
      <div className="min-h-screen bg-background">
        <ScrollProgress />
        <Header />
        <main id="main-content">
          <Hero />
          <Skills />
          <Tools />
          <Experience />
          <Attributes />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
