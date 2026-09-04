import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Services />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
