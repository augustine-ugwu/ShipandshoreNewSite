import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Team from "@/components/Team";
import Certification from "@/components/Certification";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Navbar />
      <About />
      <Team />
      <Certification />
      <Footer />
    </div>
  );
}
