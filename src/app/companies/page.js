import Navbar from "../components/Navbar2";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

export default function CompaniesPage() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* HeroSection */}
      <HeroSection title="Companies" backgroundImage="/assets/1541.jpg" />

      {/* Content */}
      <div className="min-h-screen bg-gray-100 p-6">
        <p className="mt-4 text-center text-gray-600">
          Ship & Shore Services Limited collaborates with industry leaders to
          shape the future of maritime operations.
        </p>
        <div className="mt-8 text-gray-800">
          <h2 className="text-2xl font-semibold">Partnerships</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>
              Joint Bunkering Agreement with NNPC for marine fuel supply since
              1998.
            </li>
            <li>
              Provision of crewing and manning services locally and
              internationally.
            </li>
            <li>Training programs to develop Nigeria’s professional seamen.</li>
          </ul>
          <h2 className="mt-6 text-2xl font-semibold">Regulatory Compliance</h2>
          <p className="mt-2">
            Our operations strictly adhere to regulations set by NIMASA, NPA,
            IMO, and other maritime agencies, ensuring seamless compliance and
            excellence.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
