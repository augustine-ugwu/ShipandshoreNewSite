import React from "react";
import Navbar from "@/app/components/Navbar2";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

export default function ContactPage() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* HeroSection */}
      <HeroSection title="Contact Us" backgroundImage="/assets/1543.jpg" />

      {/* Content */}
      <div className="min-h-screen py-6">
        {" "}
        <div className="container mx-auto text-center p-6">
          <h2 className="font-bebas-neue text-2xl mb-8">CONTACT US</h2>
          <h1 className="font-bebas-neue md:text-6xl text-4xl">
            Have Questions? Get in Touch!
          </h1>
        </div>
        {/* Contact Form */}
        <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-start justify-center gap-12">
          {/* Left Section */}
          <div className="w-full md:w-1/2 text-center md:mt-16">
            <div className="md:col-span-7">
              <img src="/assets/1542.jpg" />
            </div>
          </div>

          {/* Right Section (Contact Form) */}
          <div className="w-full md:w-1/2  md:p-10 rounded-sm">
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-800">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full mt-2 px-4 py-3 rounded-lg focus:outline-none focus:ring-0"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full mt-2 px-4 py-3 rounded-lg focus:outline-none focus:ring-0"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-800">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full mt-2 px-4 py-3 rounded-lg focus:outline-none focus:ring-0"
                  placeholder="Write your message here"
                  required></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white font-medium py-3 rounded-lg shadow-md hover:from-green-500 hover:to-green-700 focus:outline-none">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
