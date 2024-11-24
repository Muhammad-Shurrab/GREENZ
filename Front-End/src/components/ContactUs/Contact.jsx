import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      console.log('Form submitted:', response.data);
      setStatus('Message sent successfully!');
      // Reset form after submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Failed to send message. Please try again later.');
    }
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-center text-green-600 mb-12">Contact Us</h1>
          </motion.div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-green">Get in Touch</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green text-white py-2 px-4 rounded-md hover:bg-yellow transition duration-300"
                >
                  Send Message
                </button>
                {status && (
                  <p className={`mt-4 text-center ${status.includes('Failed') ? 'text-red-600' : 'text-green'}`}>
                    {status}
                  </p>
                )}
              </form>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-green">Contact Information</h2>
              <div className="space-y-4">
                <p className="flex items-center">
                  <FaEnvelope className="text-green mr-2" />
                  <span>Greenz@gmail.com</span>
                </p>
                <p className="flex items-center">
                  <FaPhone className="text-green mr-2" />
                  <span>+962 782 456 7890</span>
                </p>
                <p className="flex items-center">
                  <FaMapMarkerAlt className="text-green mr-2" />
                  <span>Alkarama Street, Zarqa, Jordan</span>
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-yellow">Find Us on the Map</h3>
                <div className="w-full">
                  <iframe
                    width="100%"
                    height="220"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=zarqa,new%20zarqa,%20al%20karama%20st.+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    title="Google Maps"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
