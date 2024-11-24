import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(`Email submitted: ${email}`);
  };

  return (
    <section className="container mx-auto py-12 px-4">
      {/* Motion.div for entrance animation */}
      <motion.div
        className="bg-white shadow-xl rounded-lg p-8 text-center max-w-lg mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-4xl font-extrabold mb-4 text-gray-800 transition-transform duration-500 ease-in-out transform hover:translate-x-1">
          Stay Updated
        </h2>
        <p className="text-gray-600 mb-6 text-lg transition-opacity duration-500 ease-in-out hover:opacity-80">
          Subscribe to our newsletter for the latest recipes, offers, and more.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <motion.input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border-2 border-gray-300 rounded-md w-full max-w-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 1.05 }}
          />
          <motion.button
            type="submit"
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            whileHover={{ scale: 1.1, boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)' }}
          >
            Subscribe
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

export default NewsletterSignup;
