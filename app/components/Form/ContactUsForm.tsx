'use client';

import Link from 'next/link';
import { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    location: '',
    company: '',
    message: '',
    agree: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value, type } = target;
    setForm({ ...form, [name]: type === 'checkbox' ? (target as HTMLInputElement).checked : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submit logic
    console.log('Form submitted:', form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6">
      <div>
        <label className="block text-black font-semibold font-mullish">Your Name <span className="text-danger">*</span></label>
        <input
          type="text"
          name="name"
          placeholder='Enter your name'
          value={form.name}
          onChange={handleChange}
          required
          className="w-full bg-transparent border-[1px] border-gray-lightest mt-1 px-4 py-3 font-mullish placeholder:text-gray-light rounded-lg"
        />
        <p className="text-sm text-[#00000080] font-normal font-mullish">We will get back to you</p>
      </div>

      <div>
        <label className="block text-black font-semibold font-mullish">Email <span className="text-danger">*</span></label>
        <input
          type="email"
          name="email"
          placeholder='Enter your email'
          value={form.email}
          onChange={handleChange}
          required
          className="w-full bg-transparent border-[1px] border-gray-lightest mt-1 px-4 py-3 font-mullish placeholder:text-gray-light rounded-lg"
        />
        <p className="text-sm text-[#00000080] font-normal font-mullish">We will keep it private</p>
      </div>

      <div>
        <label className="block text-black font-semibold font-mullish">Location <span className="text-danger">*</span></label>
        <input
          type="text"
          name="location"
          placeholder='City, State/Province'
          value={form.location}
          onChange={handleChange}
          required
          className="w-full bg-transparent border-[1px] border-gray-lightest mt-1 px-4 py-3 font-mullish placeholder:text-gray-light rounded-lg"
        />
        <p className="text-sm text-[#00000080] font-normal font-mullish">We will serve you better</p>
      </div>

      <div>
        <label className="block text-black font-semibold font-mullish">Company <span className="text-danger">*</span></label>
        <input
          type="text"
          name="company"
          placeholder='Company'
          value={form.company}
          onChange={handleChange}
          required
          className="w-full bg-transparent border-[1px] border-gray-lightest mt-1 px-4 py-3 font-mullish placeholder:text-gray-light rounded-lg"
        />
        <p className="text-sm text-[#00000080] font-normal font-mullish">We will serve you better</p>
      </div>

      <div>
        <label className="block text-black font-semibold font-mullish">Message <span className="text-danger">*</span></label>
        <textarea
          name="message"
          placeholder='Your message here'
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full bg-transparent border-[1px] border-gray-lightest mt-1 px-4 py-3 font-mullish placeholder:text-gray-light rounded-lg"
        />
        <p className="text-sm text-[#00000080] font-normal font-mullish">Tell us more about your project</p>
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          name="agree"
          checked={form.agree}
          onChange={handleChange}
          required
          className="w-4 h-4 p-2 rounded-lg"
        />
        <label className="text-sm">
          By checking, I acknowledge that I have reviewed the{' '}
          <Link href="/privacy-policy" className="text-[#007AFF]">
            privacy statement
          </Link>{' '}
          of this website, and by submitting this form I agree to its terms. <span className="text-danger">*</span>
        </label>
      </div>

      <button
        type="submit"
        className="bg-primary hover:border-[1px] border-gray-lightest-primary text-white py-2 px-6 rounded-full font-normal font-mullish"
      >
        Contact Us
      </button>
    </form>
  );
}

export default ContactForm;