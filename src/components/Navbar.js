// src/components/Navbar.js
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="text-lg font-bold">Ship & Shore Services</div>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#services" className="hover:text-secondary">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-secondary">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-secondary">
              Contact
            </a>
          </li>
        </ul>
        <div className="md:hidden">{/* Mobile menu button */}</div>
      </nav>
    </header>
  );
}
