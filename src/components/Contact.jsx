import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Cards */}
          <div className="card text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Mail className="text-blue-600 dark:text-blue-400" size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <a href="mailto:somnath@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              somnathsingh712@gmail.com
            </a>
          </div>

          <div className="card text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Phone className="text-blue-600 dark:text-blue-400" size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">Phone</h3>
            <a href="tel:+919876543210" className="text-blue-600 dark:text-blue-400 hover:underline">
              +91 9517054746
            </a>
          </div>

          <div className="card text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-blue-600 dark:text-blue-400" size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">Location</h3>
            <p className="text-gray-600 dark:text-gray-400">India</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="card space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full btn bg-blue-600 hover:bg-blue-700 flex items-center justify-center space-x-2"
            >
              <Send size={20} />
              <span>Send Message</span>
            </button>

            {submitted && (
              <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg text-center animate-fadeIn">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>

        {/* Social Links */}
<div className="text-center mt-12">
  <h3 className="text-xl font-bold mb-6">Follow Me</h3>

  <div className="flex justify-center gap-6 flex-wrap">

    <a
      href="https://github.com/somnathsingh712"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
    >
      GitHub
    </a>

    <a
      href="https://in.linkedin.com/in/somnath-singh-yadav"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
    >
      LinkedIn
    </a>

    <a
      href="https://x.com/somnathsingh712"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-lg font-semibold hover:bg-sky-200 dark:hover:bg-sky-800 transition-colors"
    >
      Twitter
    </a>

  </div>
</div>
      </div>
    </section>
  );
}
