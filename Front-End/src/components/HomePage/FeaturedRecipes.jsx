

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star as StarIcon, StarHalf, StarOff } from 'lucide-react';

const FeaturedRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/recipes');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error('Failed to fetch recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="flex items-center">
        {Array(fullStars).fill().map((_, i) => (
          <StarIcon key={`full-${i}`} className="w-4 h-4 text-yellow-500" />
        ))}
        {hasHalfStar && <StarHalf className="w-4 h-4 text-yellow-500" />}
        {Array(emptyStars).fill().map((_, i) => (
          <StarOff key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <section className="bg-green-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-green">Discover Our Featured Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.slice(0, 3).map((recipe) => (
            <div key={recipe._id} className="bg-white shadow-lg rounded-lg flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105">
              <img 
                src={recipe.photos[0]} 
                alt={recipe.name} 
                className="w-full h-56 object-cover object-center" 
              />
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-semibold mb-2 text-green">{recipe.name}</h3>
                <div className="flex items-center justify-between mb-4 text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{recipe.cookingTime} mins</span>
                  </div>
                  <div className="flex items-center text-yellow">
                    {renderStars(recipe.averageRating)}
                    <span className="ml-2 text-sm font-medium text-green-800">{recipe.averageRating.toFixed(1)} / 5</span>
                  </div>
                </div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {recipe.dietaryRestrictions && recipe.dietaryRestrictions.map((tag, index) => (
                    <span key={index} className="inline-block bg-green text-green-800 text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-green-600 flex-shrink-0">
                <Link 
                  to={`/recipe/${recipe._id}`} 
                  className="block text-center bg-green text-white py-2 px-4 rounded-full hover:bg-yellow transition duration-300"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            to="/recipe" 
            className="inline-block bg-white text-green font-semibold py-3 px-8 rounded-full border-2 border-green hover:bg-yellow hover:text-green-600 transition duration-300"
          >
            Explore All Recipes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;
