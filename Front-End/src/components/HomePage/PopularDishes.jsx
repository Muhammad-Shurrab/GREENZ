

// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';
// // // import { Link } from 'react-router-dom';

// // // const PopularDishes = () => {
// // //   const [dishes, setDishes] = useState([]);

// // //   useEffect(() => {
// // //     const fetchDishes = async () => {
// // //       try {
// // //         const response = await axios.get('http://localhost:5000/api/dishes'); // Adjust the URL as necessary
// // //         setDishes(response.data.slice(0, 3)); // Slice to get only the first 3 dishes
// // //       } catch (error) {
// // //         console.error('Error fetching dishes:', error);
// // //       }
// // //     };

// // //     fetchDishes();
// // //   }, []);

// // //   return (
// // //     <section className="bg-gray-100 py-12">
// // //       <div className="container mx-auto">
// // //         <h2 className="text-3xl font-bold text-center mb-8 text-green">Popular Dishes for Sale</h2>
// // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // //           {dishes.map((dish) => (
// // //             <div key={dish._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
// // //               <img src={dish.photos[0] || 'https://via.placeholder.com/400x300'} alt={dish.name} className="w-full h-48 object-cover" />
// // //               <div className="p-6">
// // //                 <h3 className="text-xl font-semibold mb-2 text-yellow">{dish.name}</h3>
// // //                 <p className="text-gray-600">Prepared by {dish.name}</p>
// // //                 <div className="mt-4">
// // //                   <span className="text-lg font-bold ">${dish.price}</span>
// // //                   <Link to={`/dish/${dish._id}`} className="text-blue-600 hover:underline ml-4">Buy Now</Link>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // export default PopularDishes;



// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { Link } from 'react-router-dom';
// // import { motion } from 'framer-motion';
// // import { ChefHat, DollarSign, ShoppingCart } from 'lucide-react';

// // const PopularDishes = () => {
// //   const [dishes, setDishes] = useState([]);

// //   useEffect(() => {
// //     const fetchDishes = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:5000/api/dishes');
// //         setDishes(response.data.slice(0, 3));
// //       } catch (error) {
// //         console.error('Error fetching dishes:', error);
// //       }
// //     };

// //     fetchDishes();
// //   }, []);

// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.3
// //       }
// //     }
// //   };

// //   const itemVariants = {
// //     hidden: { y: 20, opacity: 0 },
// //     visible: {
// //       y: 0,
// //       opacity: 1,
// //       transition: {
// //         type: 'spring',
// //         stiffness: 100
// //       }
// //     }
// //   };

// //   return (
// //     <div className="bg-gradient-to-br from-green-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
// //       <motion.div 
// //         className="max-w-7xl mx-auto"
// //         initial="hidden"
// //         animate="visible"
// //         variants={containerVariants}
// //       >
// //         <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
// //           Popular Dishes for Sale
// //         </h2>

// //         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
// //           {dishes.map((dish) => (
// //             <motion.div 
// //               key={dish._id} 
// //               className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
// //               variants={itemVariants}
// //             >
// //               <img 
// //                 src={dish.photos} 
// //                 alt={dish.name} 
// //                 className="w-full h-48 object-cover"
// //               />
// //               <div className="p-6">
// //                 <h3 className="text-xl font-semibold text-gray-900 mb-2">{dish.name}</h3>
// //                 <div className="flex items-center text-gray-600 mb-4">
// //                   <ChefHat className="w-5 h-5 mr-2" />
// //                   <span>Prepared by {dish.chef}</span>
// //                 </div>
// //                 <p className="text-gray-600 mb-4 line-clamp-2">{dish.description}</p>
// //                 <div className="flex justify-between items-center">
// //                   <span className="text-2xl font-bold text-green-600 flex items-center">
// //                     <DollarSign className="w-6 h-6 mr-1" />
// //                     {dish.price.toFixed(2)}
// //                   </span>
// //                   <Link 
// //                     to={`/dish/${dish._id}`}
// //                     className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out flex items-center"
// //                   >
// //                     <ShoppingCart className="w-5 h-5 mr-2" />
// //                     Buy Now
// //                   </Link>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default PopularDishes;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { ChefHat, DollarSign, ShoppingCart } from 'lucide-react';

// const PopularDishes = () => {
//   const [dishes, setDishes] = useState([]);

//   useEffect(() => {
//     const fetchDishes = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/dishes');
//         setDishes(response.data.slice(0, 3)); // Limiting to 3 dishes
//       } catch (error) {
//         console.error('Error fetching dishes:', error);
//       }
//     };

//     fetchDishes();
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: 'spring',
//         stiffness: 100
//       }
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-green-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
//       <motion.div 
//         className="max-w-7xl mx-auto"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
//           Popular Dishes for Sale
//         </h2>

//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {dishes.map((dish) => (
//             <motion.div 
//               key={dish._id} 
//               className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
//               variants={itemVariants}
//             >
//               <img 
//                 src={dish.photos[0]} // Use the first photo in the array
//                 alt={dish.name} 
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">{dish.name}</h3>
//                 <div className="flex items-center text-gray-600 mb-4">
//                   <ChefHat className="w-5 h-5 mr-2" />
//                   <span>Prepared by {/* Assuming chef name is fetched and populated */}{dish.chefId.name}</span>
//                 </div>
//                 <p className="text-gray-600 mb-4 line-clamp-2">{dish.description}</p>
//                 <div className="flex justify-between items-center">
//                   <span className="text-2xl font-bold text-green-600 flex items-center">
//                     <DollarSign className="w-6 h-6 mr-1" />
//                     {dish.price.toFixed(2)}
//                   </span>
//                   <Link 
//                     to={`/dish/${dish._id}`}
//                     className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out flex items-center"
//                   >
//                     <ShoppingCart className="w-5 h-5 mr-2" />
//                     Buy Now
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default PopularDishes;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChefHat, DollarSign, ShoppingCart } from 'lucide-react';

const PopularDishes = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/dishes');
        setDishes(response.data.slice(0, 3)); // Limiting to 3 dishes
      } catch (error) {
        console.error('Error fetching dishes:', error);
      }
    };

    fetchDishes();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h2 className="text-3xl font-extrabold text-green text-center mb-12">
          Popular Dishes for Sale
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <motion.div 
              key={dish._id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
              variants={itemVariants}
            >
              <img 
                src={dish.photos[0]} // Use the first photo in the array
                alt={dish.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{dish.name}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <ChefHat className="w-5 h-5 mr-2" />
                  <span>Prepared by {dish.chefId.name}</span> {/* Display chef's name */}
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">{dish.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600 flex items-center">
                    <DollarSign className="w-6 h-6 mr-1 text-green" />
                    {dish.price.toFixed(2)}
                  </span>
                  <Link 
                    to={`/details/${dish._id}`}
                    className="bg-green hover:bg-yellow text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out flex items-center"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Buy Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PopularDishes;
