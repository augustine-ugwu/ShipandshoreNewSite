// src/components/Footer.js
import { MailIcon, YoutubeIcon, InstagramIcon } from "@heroicons/react/outline";

export default function Footer() {
  return (
    <footer className="dark:bg-gray-900">
      <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Logo */}
          <a href="/">
            <div className="text-lg tracking-wider flex items-center space-x-2">
              <img
                src="/assets/logo.png"
                className="h-12 w-auto"
                alt="Ship and Shore Logo"
              />
              <span className="font-bebas-neue md:text-3xl text-white">
                Shipandshore
              </span>
            </div>
          </a>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://twitter.com/yourprofile"
              className="text-gray-500 hover:text-gray-700 dark:hover:text-white"></a>
            <a
              href="https://youtube.com/yourprofile"
              className="text-gray-500 hover:text-gray-700 dark:hover:text-white"></a>
            <a
              href="https://instagram.com/yourprofile"
              className="text-gray-500 hover:text-gray-700 dark:hover:text-white"></a>
          </div>
        </div>

        {/* Links Section */}
        <div className="mt-6 sm:flex sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/about" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/licensing" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>

          {/* Subscribe Section */}
          <div className="flex items-center mt-6 sm:mt-0">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-l-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
              aria-label="Subscribe">
              <MailIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Horizontal Divider */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* Footer Copyright Section */}
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <a href="https://yourwebsite.com" className="hover:underline">
            Shipandshore™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
