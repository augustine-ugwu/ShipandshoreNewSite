import Navbar from "../components/Navbar2";
import Footer from "../components/Footer";
import Team from "../components/Team";
import HeroSection from "../components/HeroSection";

export default function ManagementPage() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* HeroSection */}
      <HeroSection title="Management" backgroundImage="/assets/1541.jpg" />
      <div className="pb-20 bg-white">
        <Team />
      </div>
      <Footer />
    </div>
  );
}
