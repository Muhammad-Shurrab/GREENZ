// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import { Salad, Coffee, IceCream, Pizza } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const RecipeCategories = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/dishCat/categories');
//         setCategories(response.data);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const limitedCategories = categories.slice(0, 4);

//   const getCategoryIcon = (category) => {
//     switch (category.toLowerCase()) {
//       case 'salads':
//         return <Salad size={40} />;
//       case 'beverages':
//         return <Coffee size={40} />;
//       case 'desserts':
//         return <IceCream size={40} />;
//       default:
//         // return <Pizza size={40} />;
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1
//     }
//   };

//   return (
//     <section className="container mx-auto py-16 px-4">
//       <h2 className="text-4xl font-bold text-center mb-12 text-green">Explore Our Delicious Categories</h2>
//       <motion.div 
//         className="grid grid-cols-2 md:grid-cols-4 gap-8"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {limitedCategories.map((category) => (
//           <motion.div 
//             key={category} 
//             className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
//             variants={itemVariants}
//             whileHover={{ y: -5 }}
//           >
//             <div className="p-6 flex flex-col items-center">
//               <div className="mb-4 text-green-600">
//                 {getCategoryIcon(category)}
//               </div>
//               <h3 className="text-xl font-semibold text-center text-yellow">{category}</h3>
//               <p className="mt-2 text-m text-center text-gray-600">Discover amazing {category.toLowerCase()} recipes</p>
            
//               <Link to="/marketPlace">
//               <motion.button 
//                 className="mt-4 px-4 py-2 bg-green text-white rounded-full text-sm font-medium transition duration-300 hover:bg-y"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Explore
//               </motion.button>
//               </Link>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }

// export default RecipeCategories;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Salad, Coffee, IceCream, Pizza } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecipeCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/dishCat/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const limitedCategories = categories.slice(0, 4);

  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'salads':
        return <Salad size={40} />;
      case 'beverages':
        return <Coffee size={40} />;
      case 'desserts':
        return <IceCream size={40} />;
      default:
        // return <Pizza size={40} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-green">Explore Our Delicious Categories</h2>
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {limitedCategories.map((category) => (
          <motion.div 
            key={category} 
            className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl h-full flex flex-col justify-between"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="p-6 flex flex-col items-center flex-grow">
              <div className="mb-4 text-green-600">
                {getCategoryIcon(category)}
              </div>
              <h3 className="text-xl font-semibold text-center text-yellow">{category}</h3>
              <p className="mt-2 text-m text-center text-gray-600">Discover amazing {category.toLowerCase()} recipes</p>
            </div>
            <div className="p-6">
              <Link to="/marketPlace">
                <motion.button 
                  className="w-full px-4 py-2 bg-green text-white rounded-full text-sm font-medium transition duration-300 hover:bg-yellow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default RecipeCategories;
