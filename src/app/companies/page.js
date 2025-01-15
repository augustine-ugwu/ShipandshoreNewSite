import Navbar from "../components/Navbar2";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

export default function CompaniesPage() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* HeroSection */}
      <HeroSection title="Companies" backgroundImage="/assets/1543.jpg" />

      {/* Content */}
      <div className="bg-white mx-auto px-6 lg:px-40 py-16 pb-32">
        {/* Subsidiaries Section */}
        <div className="mt-12 text-center">
          <h1 className="font-bebas-neue text-5xl md:text-6xl text-gray-800 tracking-wide">
            Our Subsidiaries
          </h1>
          <p className="mt-4 text-gray-700 md:px-32 text-lg">
            Ship & Shore Services Limited operates through its group of
            subsidiaries, each specializing in key aspects of maritime and
            energy operations.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="pt-6 text-left">
              <h3 className="font-bebas-neue text-3xl text-gray-800">
                1. Ghazi Shipping & Trading Company Ltd
              </h3>
              <p className="mt-2 text-gray-600">
                Focused on vessel chartering and trading operations in the
                shipping sector.
              </p>
            </div>
            <div className="pt-6 text-left">
              <h3 className="font-bebas-neue text-3xl text-gray-800">
                2. Sarco Petroleum & Gas Limited
              </h3>
              <p className="mt-2 text-gray-600">
                Specializes in petroleum products supply and gas-related
                services.
              </p>
            </div>
            <div className="pt-6 text-left">
              <h3 className="font-bebas-neue text-3xl text-gray-800">
                3. Haske Enterprises Limited
              </h3>
              <p className="mt-2 text-gray-600">
                Provides logistics and support services for maritime operations.
              </p>
            </div>
            <div className="pt-6 text-left">
              <h3 className="font-bebas-neue text-3xl text-gray-800">
                4. International Maritime Cargo Surveyors Ltd
              </h3>
              <p className="mt-2 text-gray-600">
                Offers professional cargo surveying and inspection services for
                maritime cargo operations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
