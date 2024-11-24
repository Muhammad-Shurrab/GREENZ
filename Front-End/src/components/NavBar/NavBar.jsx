import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaUserCircle,
  FaSignInAlt,
  FaUserPlus,
  FaShoppingCart,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Cookies from "js-cookie"; // Import js-cookie
import logo from "../../assets/logo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track authentication

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    // Check for token in cookies to determine authentication
    const token = Cookies.get("token");
    if (token) {
      try {
        const decoded = JSON.parse(atob(token.split(".")[1])); // Decode the token payload
        console.log(decoded);
        const userId = decoded.id;
        console.log(userId);

        // Store user ID in local storage
        localStorage.setItem("user_id", userId);

        setIsAuthenticated(true); // Set authentication status
      } catch (error) {
        console.error("Error decoding token:", error);
        setIsAuthenticated(false);
        localStorage.removeItem("user_id"); // Remove user ID from local storage
      }
    } else {
      setIsAuthenticated(false);
      localStorage.removeItem("user_id"); // Remove user ID from local storage
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("token"); // Remove token from cookies
    localStorage.removeItem("user_id"); // Remove user ID from local storage
    setIsAuthenticated(false); // Update authentication state
  };

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "Our Story" },
    { to: "/ReelsList", label: "GreenzReels" },
    { to: "/recipe", label: "Recipes" },
    { to: "/marketplace", label: "Marketplace" },
    { to: "/contact", label: "Contact Us" },
  ];

  const MenuLink = ({ to, children }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <NavLink
        to={to}
        className={({ isActive }) =>
          `text-green hover:text-yellow transition-colors duration-300 ${
            isActive ? "text-gray-600 text-xl mb-4 font-bold" : ""
          }`
        }
        onClick={() => setIsMenuOpen(false)}
      >
        {children}
      </NavLink>
    </motion.div>
  );

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-12 h-12" />
            <span className="text-2xl font-bold text-green">GREENZ</span>
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <MenuLink key={item.to} to={item.to}>
                {item.label}
              </MenuLink>
            ))}
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative"
                >
                  <NavLink
                    to="/profile"
                    className="text-green hover:text-yellow transition-colors duration-300"
                  >
                    <FaUserCircle className="text-2xl" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                      3
                    </span>
                  </NavLink>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative"
                >
                  <NavLink
                    to="/cart"
                    className="text-green hover:text-yellow transition-colors duration-300"
                  >
                    <FaShoppingCart className="text-2xl" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                      2
                    </span>
                  </NavLink>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold flex items-center"
                  >
                    <FaSignInAlt className="mr-2" />
                    Log Out
                  </button>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <NavLink
                    to="/log-in"
                    className="bg-transparent ring-2 ring-yellow1 text-yellow1 px-4 py-2 rounded-full font-semibold transition-colors duration-300 flex items-center"
                  >
                    <FaSignInAlt className="mr-2" />
                    Log In
                  </NavLink>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <NavLink
                    to="/sign-up"
                    className="bg-green text-white px-4 py-2 rounded-full font-semibold hover:bg-green transition-colors duration-300 flex items-center"
                  >
                    <FaUserPlus className="mr-2" />
                    Register
                  </NavLink>
                </motion.div>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-green hover:text-yellow transition-colors duration-300"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-2">
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    <MenuLink to={item.to}>{item.label}</MenuLink>
                  </motion.li>
                ))}
                {isAuthenticated ? (
                  <>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.5 }}
                    >
                      <MenuLink to="/profile">Profile</MenuLink>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.6 }}
                    >
                      <MenuLink to="/cart">Cart</MenuLink>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.7 }}
                    >
                      <button
                        onClick={handleLogout}
                        className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold flex items-center"
                      >
                        <FaSignInAlt className="mr-2" />
                        Log Out
                      </button>
                    </motion.li>
                  </>
                ) : (
                  <>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.5 }}
                    >
                      <MenuLink to="/login">Log In</MenuLink>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.6 }}
                    >
                      <MenuLink to="/register">Register</MenuLink>
                    </motion.li>
                  </>
                )}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
