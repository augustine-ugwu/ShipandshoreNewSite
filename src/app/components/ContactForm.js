import React from "react";

const ContactForm = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-start justify-center gap-12">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:mt-16">
          <h2 className="font-bebas-neue text-xl mb-8">Contact Us</h2>
          <h2 className="font-bebas-neue text-4xl md:text-6xl text-gray-800 mb-4">
            Have Questions? <br /> Get in Touch!
          </h2>
          <p className="text-gray-600 mb-8">
            Reach out to us using the contact form.
          </p>
          <div className="text-center mx-auto">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 50 50"
                    fill="currentColor">
                    <path d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 18.005859 12.033203 C 18.633859 12.060203 19.210594 12.414031 19.558594 12.957031 C 19.954594 13.575031 20.569141 14.534156 21.369141 15.785156 C 22.099141 16.926156 22.150047 18.399844 21.498047 19.589844 L 20.033203 21.673828 C 19.637203 22.237828 19.558219 22.959703 19.824219 23.595703 C 20.238219 24.585703 21.040797 26.107203 22.466797 27.533203 C 23.892797 28.959203 25.414297 29.761781 26.404297 30.175781 C 27.040297 30.441781 27.762172 30.362797 28.326172 29.966797 L 30.410156 28.501953 C 31.600156 27.849953 33.073844 27.901859 34.214844 28.630859 C 35.465844 29.430859 36.424969 30.045406 37.042969 30.441406 C 37.585969 30.789406 37.939797 31.366141 37.966797 31.994141 C 38.120797 35.558141 35.359641 37.001953 34.556641 37.001953 C 34.000641 37.001953 27.316344 37.761656 19.777344 30.222656 C 12.238344 22.683656 12.998047 15.999359 12.998047 15.443359 C 12.998047 14.640359 14.441859 11.879203 18.005859 12.033203 z"></path>
                  </svg>
                </div>
                <p className="text-gray-700">+2348034030638</p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="text-green-500">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="style=fill">
                      <g id="email">
                        <path
                          id="Subtract"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7 2.75C5.38503 2.75 3.92465 3.15363 2.86466 4.1379C1.79462 5.13152 1.25 6.60705 1.25 8.5V15.5C1.25 17.393 1.79462 18.8685 2.86466 19.8621C3.92465 20.8464 5.38503 21.25 7 21.25H17C18.615 21.25 20.0754 20.8464 21.1353 19.8621C22.2054 18.8685 22.75 17.393 22.75 15.5V8.5C22.75 6.60705 22.2054 5.13152 21.1353 4.1379C20.0754 3.15363 18.615 2.75 17 2.75H7ZM19.2285 8.3623C19.5562 8.10904 19.6166 7.63802 19.3633 7.31026C19.1101 6.98249 18.6391 6.9221 18.3113 7.17537L12.7642 11.4616C12.3141 11.8095 11.6858 11.8095 11.2356 11.4616L5.6886 7.17537C5.36083 6.9221 4.88982 6.98249 4.63655 7.31026C4.38328 7.63802 4.44367 8.10904 4.77144 8.3623L10.3185 12.6486C11.3089 13.4138 12.691 13.4138 13.6814 12.6486L19.2285 8.3623Z"
                          fill="#000000"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <p className="text-gray-700">iftikharntm@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Contact Form) */}
        <div className="w-full md:w-1/2 md:p-10 rounded-sm">
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
    </section>
  );
};

export default ContactForm;
