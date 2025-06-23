

'use client';

import React from 'react';

const ContactForm = () => {
  return (
    <section className="bg-black-gray text-white py-32 px-6 md:px-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Let’s keep in touch</h2>
          <p className="text-gray-400">Contact us to learn more about Hausba’s capabilities.</p>
        </div>

        {/* Right Section */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Your Name <span className="text-orange-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-black border border-gray-600 rounded-md text-white placeholder-gray-400"
              required
            />
            <p className="text-xs text-gray-500 mt-1">We’ll get back to you</p>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email <span className="text-orange-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-black border border-gray-600 rounded-md text-white placeholder-gray-400"
              required
            />
            <p className="text-xs text-gray-500 mt-1">We’ll keep it private</p>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message <span className="text-orange-500">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Your message here"
              className="w-full px-4 py-3 bg-black border border-gray-600 rounded-md text-white placeholder-gray-400"
              required
            ></textarea>
            <p className="text-xs text-gray-500 mt-1">Tell us more about your project</p>
          </div>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300"
          >
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
