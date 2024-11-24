
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaSearch } from 'react-icons/fa';
// import NavBar from '../NavBar/NavBar';
// import Footer from '../Footer/Footer';
// import RecipeCard from './RecipeCard';
// import RecipeModal from './RecipeModal';
// import Filters from './Filters';

// const Recipe = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [filters, setFilters] = useState({
//     name: '',
//     category: '',
//     cuisine: '',
//     dietaryRestrictions: ''
//   });
//   const [selectedRecipe, setSelectedRecipe] = useState(null);
//   const [activeFilters, setActiveFilters] = useState([]);

//   // Retrieve user ID from local storage
//   const userId = localStorage.getItem('user_id'); // Replace 'user_id' with your actual key

//   useEffect(() => {
//     fetchRecipes();
//   }, [filters]);

//   const fetchRecipes = async () => {
//     try {
//       const query = new URLSearchParams(filters).toString();
//       const response = await fetch(`http://localhost:5000/api/recipes?${query}`);
//       const data = await response.json();
//       setRecipes(data);
//     } catch (error) {
//       console.error('Error fetching recipes:', error);
//     }
//   };

//   const openRecipeDetails = (recipe) => {
//     setSelectedRecipe(recipe);
//   };

//   const closeRecipeDetails = () => {
//     setSelectedRecipe(null);
//   };

//   const handleFilterChange = (name, value) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [name]: value
//     }));
//   };

//   const addFilter = (filterName) => {
//     if (filters[filterName] && !activeFilters.includes(filterName)) {
//       setActiveFilters([...activeFilters, filterName]);
//     }
//   };

//   const removeFilter = (filterName) => {
//     setActiveFilters(activeFilters.filter(filter => filter !== filterName));
//     setFilters(prevFilters => ({ ...prevFilters, [filterName]: '' }));
//   };

//   return (
//     <>
//       <NavBar />
//       <div className="container mx-auto p-4 min-h-screen mt-20">
//         <div
//           className="relative mb-8 p-6 rounded-lg shadow-md"
//           style={{
//             backgroundImage: 'url("https://media.post.rvohealth.io/wp-content/uploads/sites/2/2020/10/GRT-226100-Easy-Healthy-Meals-english-muffin-pizza-well-plated-by-erin-1296x728-header.jpg")',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
//           <div className="relative z-10 flex flex-col items-center">
//             <h1 className="text-3xl font-bold text-green mb-4">Discover and Explore Recipes</h1>
//             <p className="text-lg text-gray-200 text-center mb-6">Browse through a variety of recipes, filter by categories, and get detailed instructions with ingredients. Share your thoughts and interact with other food enthusiasts in the comments section.</p>
//             <div className="relative px-2 w-full sm:w-1/2 md:w-1/4">
//               <FaSearch className="absolute left-3 top-3 text-green ml-2" />
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Search ....."
//                 value={filters.name}
//                 onChange={(e) => handleFilterChange('name', e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green"
//               />
//             </div>
//           </div>
//         </div>

//         <Filters
//           filters={filters}
//           setFilter={handleFilterChange}
//         />

//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           {recipes.map(recipe => (
//             <RecipeCard
//               key={recipe._id}
//               recipe={recipe}
//               openRecipeDetails={openRecipeDetails}
//               userId={userId} // Pass userId to RecipeCard
//             />
//           ))}
//         </motion.div>

//         <AnimatePresence>
//           {selectedRecipe && (
//             <RecipeModal
//               recipe={selectedRecipe}
//               closeRecipeDetails={closeRecipeDetails}
//               userId={userId}
//             />
//           )}
//         </AnimatePresence>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Recipe;


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import RecipeCard from './RecipeCard';
import RecipeModal from './RecipeModal';
import Filters from './Filters';

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [filters, setFilters] = useState({
    name: '',
    category: '',
    cuisine: '',
    dietaryRestrictions: ''
  });
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [activeFilters, setActiveFilters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(8);

  const userId = localStorage.getItem('user_id');

  useEffect(() => {
    fetchRecipes();
  }, [filters, currentPage]);

  const fetchRecipes = async () => {
    try {
      const query = new URLSearchParams({
        ...filters,
        page: currentPage,
        limit: recipesPerPage
      }).toString();
      const response = await fetch(`http://localhost:5000/api/recipes?${query}`);
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const openRecipeDetails = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeRecipeDetails = () => {
    setSelectedRecipe(null);
  };

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
    setCurrentPage(1);
  };

  const addFilter = (filterName) => {
    if (filters[filterName] && !activeFilters.includes(filterName)) {
      setActiveFilters([...activeFilters, filterName]);
    }
  };

  const removeFilter = (filterName) => {
    setActiveFilters(activeFilters.filter(filter => filter !== filterName));
    setFilters(prevFilters => ({ ...prevFilters, [filterName]: '' }));
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavBar />
      <div className="container mx-auto p-4 min-h-screen mt-20">
        <motion.div
          className="relative mb-8 p-6 rounded-lg shadow-md bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://media.post.rvohealth.io/wp-content/uploads/sites/2/2020/10/GRT-226100-Easy-Healthy-Meals-english-muffin-pizza-well-plated-by-erin-1296x728-header.jpg")'
          }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-white mb-4">Discover and Explore Recipes</h1>
            <p className="text-lg text-gray-200 text-center mb-6">Browse through a variety of recipes, filter by categories, and get detailed instructions with ingredients.</p>
            <motion.div 
              className="relative px-2 w-full sm:w-1/2 md:w-1/4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaSearch className="absolute left-3 top-3 text-green-500 ml-2" />
              <input
                type="text"
                name="name"
                placeholder="Search recipes..."
                value={filters.name}
                onChange={(e) => handleFilterChange('name', e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 bg-white bg-opacity-80"
              />
            </motion.div>
          </div>
        </motion.div>

        <Filters
          filters={filters}
          setFilter={handleFilterChange}
          activeFilters={activeFilters}
          addFilter={addFilter}
          removeFilter={removeFilter}
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          <AnimatePresence>
            {recipes.map(recipe => (
              <motion.div
                key={recipe._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <RecipeCard
                  recipe={recipe}
                  openRecipeDetails={openRecipeDetails}
                  userId={userId}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Pagination
          recipesPerPage={recipesPerPage}
          totalRecipes={recipes.length}
          paginate={paginate}
          currentPage={currentPage}
        />

        <AnimatePresence>
          {selectedRecipe && (
            <RecipeModal
              recipe={selectedRecipe}
              closeRecipeDetails={closeRecipeDetails}
              userId={userId}
            />
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </motion.div>
  );
};

const Pagination = ({ recipesPerPage, totalRecipes, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-8">
      <ul className="flex space-x-2">
        {pageNumbers.map(number => (
          <motion.li key={number}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded-full ${
                currentPage === number
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-green-200'
              }`}
            >
              {number}
            </button>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Recipe;