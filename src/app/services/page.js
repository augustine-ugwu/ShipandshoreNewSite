import Footer from "../components/Footer";
import Navbar from "../components/Navbar2";
import HeroSection from "../components/HeroSection";

export default function ServicesPage() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* HeroSection */}
      <HeroSection title="Our Services" backgroundImage="/assets/1541.jpg" />

      <div className="min-h-screen bg-gray-100 p-6">
        <p className="mt-4 text-center text-gray-600">
          Explore the wide range of services we offer to meet your needs.
        </p>
      </div>
      <Footer />
    </div>
  );
}
