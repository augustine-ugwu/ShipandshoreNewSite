import React from "react";

const ContactForm = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-start gap-12">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center">
          <h2 className="font-bebas-neue text-xl mb-8">Contact Us</h2>
          <h2 className="font-bebas-neue text-4xl md:text-6xl text-gray-800 mb-4">
            Have Questions? <br /> Get in Touch!
          </h2>
          <p className="text-gray-600 mb-8">
            Reach out to us using the contact form or via the details below:
          </p>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657a8 8 0 10-11.314 0L12 21.313l5.657-4.656z"
                  />
                </svg>
              </div>
              <p className="text-gray-700">+2348034030638</p>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12l-4-4m0 0l-4 4m4-4v8m0 0h8m-8 0H4"
                  />
                </svg>
              </div>
              <p className="text-gray-700">iftikharntm@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Section (Contact Form) */}
        <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md">
          <form>
            {/* Name Field */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="example@mail.com"
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="Type your message here..."
                required></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-500">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
