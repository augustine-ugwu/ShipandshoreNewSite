import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Team from "@/components/Team";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Navbar />
      <About />
      <Team />
      <ContactForm />
      <Footer />
    </div>
  );
}
