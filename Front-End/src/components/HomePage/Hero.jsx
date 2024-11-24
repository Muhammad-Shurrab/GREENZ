import React, { useState } from "react";
import { Link } from "react-router-dom";
import Film from "../../assets/heroFilm.mp4";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);

  const handleToggleSound = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        src={Film}
        autoPlay
        loop
        muted={isMuted}
        className="absolute top-0 left-0 w-full h-full object-cover "
      ></video>

      {/* Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-8 bg-black bg-opacity-50">
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Welcome to <span className="text-green">GREENZ</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl max-w-lg mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Discover and enjoy delicious, nutritious recipes and shop for premium
          ingredients from top chefs.
        </motion.p>
        <div className="mt-6 flex gap-4 flex-col md:flex-row">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <Link
              to="/recipe"
              className="inline-block font-bold text-l bg-gray-600 px-6 py-3 rounded-full text-white hover:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Explore Recipes
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            <Link
              to="/marketplace"
              className="inline-block font-bold text-l bg-yellow px-6 py-3 rounded-full text-gray-800 hover:bg-green transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green"
            >
              Discover Marketplace
            </Link>
          </motion.div>
        </div>
        <motion.button
          onClick={handleToggleSound}
          className="absolute bottom-4 right-4 px-2 py-2 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 flex items-center gap-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          {isMuted ? (
            <>
              <FaVolumeMute className="text-lg" />
            </>
          ) : (
            <>
              <FaVolumeUp className="text-lg" />
            </>
          )}
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
