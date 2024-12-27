import React from "react";
import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6 pt-24">
        {" "}
        <h1 className="text-4xl font-bold text-center">Contact Us</h1>
        <p className="mt-4 text-center text-gray-600">
          Get in touch with us via email or phone.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
