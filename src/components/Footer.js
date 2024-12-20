// src/components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-800 p-4 text-white text-center">
      <p>© {new Date().getFullYear()} My App. All rights reserved.</p>
    </footer>
  );
}
