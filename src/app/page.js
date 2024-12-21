import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Navbar />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}
