import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-blue-50 min-h-screen flex flex-col justify-between">
      {/* Hero Section */}
      <section className="bg-white py-16 shadow-lg rounded-lg w-full">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold text-indigo-700">Contact Us</h1>
          <p className="text-lg font-medium mt-4 text-gray-500">
            We're here to help! Feel free to reach out to us with any questions.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-16 shadow-lg rounded-lg w-full flex-grow">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center text-indigo-600 mb-8">Get in Touch</h2>

          <form className="space-y-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-600">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="mt-2 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-600">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
                />
              </div>
            </div>

            {/* Subject Input */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-600">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="mt-2 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
              />
            </div>

            {/* Message Input */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-600">Message</label>
              <textarea
                rows="6"
                placeholder="Type your message here..."
                className="mt-2 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-full hover:from-indigo-600 hover:to-purple-600 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
