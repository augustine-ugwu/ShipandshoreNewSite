import Navbar from "../components/Navbar2";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

export default function FleetPage() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* HeroSection */}
      <HeroSection title="Our Fleet" backgroundImage="/assets/1541.jpg" />

      {/* Content */}
      <div className="min-h-screen bg-gray-100 p-6">
        <p className="mt-4 text-center text-gray-600">
          Our fleet is the backbone of our operations, delivering excellence in
          coastal and international shipping.
        </p>
        <div className="mt-8 text-gray-800">
          <h2 className="text-2xl font-semibold">Vessels & Tugboats</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>
              Medium Range (MR) and Very Large Coastal Vessels (VLCC) for
              petroleum transportation.
            </li>
            <li>
              Tugboats for berthing, unberthing, mooring, and STS operations.
            </li>
            <li>
              Fleet operations aligned with local and international regulations
              (NIMASA, IMO, ISPS, etc.).
            </li>
          </ul>
          <h2 className="mt-6 text-2xl font-semibold">Commitment to Safety</h2>
          <p className="mt-2">
            As the first ISM-certified company in Nigeria, we uphold the highest
            safety and quality standards across our fleet.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
