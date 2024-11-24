

import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaGlobeAmericas, FaClock, FaShareAlt } from 'react-icons/fa';

const RecipeModal = ({ recipe, closeRecipeDetails, userId }) => {
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
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={closeRecipeDetails}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeRecipeDetails}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4 text-green">{recipe.name}</h2>
        <div className="flex items-center mb-4">
          <FaUtensils className="mr-2" /> {recipe.category}
          <FaGlobeAmericas className="ml-4 mr-2" /> {recipe.cuisine}
          <FaClock className="ml-4 mr-2" /> {recipe.cookingTime} minutes
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
          <ul className="list-disc ml-6">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Instructions:</h3>
          <ol className="list-decimal ml-6">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
        <button
          onClick={handleShare}
          className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <FaShareAlt /> Share
        </button>
      </div>
    </motion.div>
  );
};

export default RecipeModal;
