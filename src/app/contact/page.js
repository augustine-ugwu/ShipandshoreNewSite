import React from "react";
import ContactForm from "../components/ContactForm";
import Navbar from "@/app/components/Navbar2";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6 pt-24">
        {" "}
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
