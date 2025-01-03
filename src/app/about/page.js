import Navbar from "../components/Navbar2";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6 mt-24">
        <h1 className="text-4xl font-bold text-center">About Us</h1>
        <p className="mt-4 text-center text-gray-600">
          Welcome to the About page. Learn more about our mission and values.
        </p>
      </div>
      <Footer />
    </div>
  );
}
