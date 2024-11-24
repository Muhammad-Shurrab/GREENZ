

import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaGlobeAmericas, FaClock, FaShareAlt } from 'react-icons/fa';

const RecipeCard = ({ recipe, openRecipeDetails }) => {
  const handleShare = () => {
    // Share URL and recipe content
    const shareData = {
      title: recipe.name,
      text: `${recipe.name} - ${recipe.category}: ${recipe.instructions.join(' ')}`,
      url: window.location.href // URL of the current page
    };
    
    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Thanks for sharing!'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
      // Fallback for browsers that do not support the Share API
      alert('Sharing is not supported in this browser.');
    }
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:scale-105 hover:opacity-90 transition duration-300"
      whileHover={{ y: -5 }}
      onClick={() => openRecipeDetails(recipe)}
    >
      <div
        className="h-48 bg-cover bg-center rounded-t-lg"
        style={{ backgroundImage: `url(${recipe.photos && recipe.photos[0]})` }}
      ></div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-green">{recipe.name}</h2>
        <p className="text-gray mb-1"><FaUtensils className="inline mr-2" />{recipe.category}</p>
        <p className="text-gray mb-1"><FaGlobeAmericas className="inline mr-2" />{recipe.cuisine}</p>
        <p className="text-gray"><FaClock className="inline mr-2" />{recipe.cookingTime} minutes</p>
        <button
          onClick={handleShare}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <FaShareAlt /> Share
        </button>
      </div>
    </motion.div>
  );
};

export default RecipeCard;
