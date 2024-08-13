import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/partials/Footer";
import { Header } from "./components/partials/Header";
import { Hero } from "./pages/Hero";
import { Skills } from "./pages/Skills";
import { Spacing } from "./components/Spacing";
import { Status } from "./pages/Status";
import { Stacks } from "./pages/Stacks";

export default function Home() {
  return (
   <main>
    <Header />
    <Spacing size="md" />
    <Hero />
    <Spacing size="md" />
    
    <About />
    <Spacing size="md" />
    <Status />
    <Spacing size="md" />
    <Stacks />
    <Spacing size="md" />
    <Contact />
    <Spacing size="md" />
    <Footer />
   </main> 
  );
}
