import Footer from "../components/Footer";
import Navbar from "../components/Navbar2";

export default function ServicesPage() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6 mt-24">
        <h1 className="text-4xl font-bold text-center">Our Services</h1>
        <p className="mt-4 text-center text-gray-600">
          Explore the wide range of services we offer to meet your needs.
        </p>
      </div>
      <Footer />
    </div>
  );
}
