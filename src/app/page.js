import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Footer from "@/app/components/Footer";
import About from "@/app/components/About";
import Team from "@/app/components/Team";
import Certification from "@/app/components/Certification";
import ContactForm from "./components/ContactForm";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Navbar />
      <About />
      <Team />
      <Certification />
      <ContactForm />
      <Footer />
    </div>
  );
}
