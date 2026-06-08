import { Nav } from "./components/Nav.jsx";
import { Hero } from "./components/Hero.jsx";
import { Services } from "./components/Services.jsx";
import { Work } from "./components/Work.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-emerald-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-neutral-950"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <Services />
        <Work />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
