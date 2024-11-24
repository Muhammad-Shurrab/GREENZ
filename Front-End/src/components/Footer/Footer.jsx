

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faLeaf, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from "../../assets/logo.png";

const Footer = () => {
  const linkHoverVariants = {
    hover: { scale: 1.05, color: '#4CAF50', transition: { duration: 0.3 } },
  };

  const iconHoverVariants = {
    hover: { scale: 1.2, rotate: 15, transition: { duration: 0.3 } },
  };

  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Brief Description */}
          <div className="flex flex-col items-center md:items-center">
            <Link to="/" className="mb-4 text-green flex justify-center">
              <motion.img
                src={logo}
                alt="Healthy GREENZ Logo"
                width="150"
                height="60"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <p className="text-sm text-white text-center md:text-left">
              Your go-to place for delicious and nutritious recipes. Discover health, one meal at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Our Story', 'Recipes', 'Marketplace', 'Contact'].map((item) => (
                <motion.li key={item} whileHover="hover">
                  <motion.div variants={linkHoverVariants}>
                    <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="text-green hover:text-yellow transition-colors duration-300">
                      {item}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className=''>
            <h3 className="text-lg font-semibold mb-4 text-yellow">Contact Us</h3>
            <ul className="space-y-2 text-green">
              <li className="flex items-center">
                <FontAwesomeIcon icon={faLeaf} className="mr-2 text-yellow" />
                Al karama Street, Jordan
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-yellow" />
                greenz@gmail.com
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow">Stay Connected</h3>
            <p className="text-sm text-white mb-2">Subscribe to our newsletter for healthy tips and recipes!</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-3 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green text-white px-4 py-2 rounded-r-md hover:bg-yellow transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-8 pt-8 border-t border-green-200 flex flex-col-reverse md:flex-row justify-between items-center">
          <p className="text-sm text-green mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Healthy GREENZ. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            {[faFacebookF, faTwitter, faInstagram, faPinterest].map((icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-green hover:text-yellow transition-colors duration-300"
                whileHover="hover"
              >
                <motion.div variants={iconHoverVariants}>
                  <FontAwesomeIcon icon={icon} size="lg" />
                </motion.div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;