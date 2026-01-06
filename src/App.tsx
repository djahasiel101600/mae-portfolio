import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { Skills } from "./components/sections/Skills";
import { Tools } from "./components/sections/Tools";
import { Experience } from "./components/sections/Experience";
import { Attributes } from "./components/sections/Attributes";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { ScrollProgress } from "./components/scroll-progress";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <Hero />
      <Skills />
      <Tools />
      <Experience />
      <Attributes />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
