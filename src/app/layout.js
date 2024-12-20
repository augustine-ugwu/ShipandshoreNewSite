// Update layout.js to include Navbar and Footer
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";

export const metadata = {
  title: "My App",
  description: "A clean and minimal Next.js app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
