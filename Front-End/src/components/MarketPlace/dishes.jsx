// import { useParams } from "react-router-dom";
// import getData from "../../Hooks/getData";
// import { FaShoppingCart, FaHeart } from 'react-icons/fa';
// import { useState } from "react";

// function Dishes() {
//   const { id } = useParams(); // Get the ID from the URL
//   console.log("this is id for chef" + id);
//   const [data] = getData(`http://localhost:5000/api/fetchDishes/${id}`);
//   const [isLiked, setIsLiked] = useState(false);

//   const handleClick = () => {
//     setIsLiked(!isLiked);
//   };

//   return (
//     <>
//       <div className="flex flex-col md:flex-row ml-32 mr-32">
//         <div className="md:w-3/4 p-6">
//           <h1 className="text-3xl font-bold mb-6 text-green-800">Food Delivery</h1>

//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Search dishes..."
//               className="w-full p-2 border border-green-300 rounded"
//             />
//           </div>

//           <div className="mb-4">
//             <select className="w-full p-2 border border-green-300 rounded">
//               <option value="All">All Categories</option>
//               <option value="Pizza">Pizza</option>
//               <option value="Burger">Burger</option>
//               <option value="Salad">Salad</option>
//               <option value="Pasta">Pasta</option>
//               <option value="Mexican">Mexican</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       <div className="px-4 py-8 ml-32 mr-32 sm:px-6 lg:px-8">
//         {data.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {data.map((item) => (
//               <div key={item._id} className="bg-white shadow-lg overflow-hidden">
//                 <div className="h-48">
//                   <img
//                     className="w-full h-full object-cover"
//                     src={item.photos[0]} // Assuming there's at least one photo
//                     alt={item.name}
//                   />
//                 </div>
//                 <div className="p-4">
//                   <h2 className="font-bold text-gray-700 text-xl leading-7 mb-2">
//                     {item.name}
//                   </h2>
//                   <p className="text-lg font-bold text-[#0FB478] mb-4">
//                     JD {item.price}
//                   </p>
//                   <FaShoppingCart className="text-gray-700 text-2xl" />
//                   <div>
//                     <FaHeart
//                       onClick={handleClick}
//                       className={`cursor-pointer text-2xl ${isLiked ? 'text-red-500' : 'text-gray-500'}`}
//                     />
//                   </div>
//                   <p className="text-gray-600 mb-4">
//                     {item.ingredients.join(", ")} {/* Display ingredients */}
//                   </p>
//                   <a
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href={`foodiesapp://food/${item._id}`}
//                     className="block w-full px-4 py-2 text-center font-medium tracking-wide text-white bg-[#FFC933] rounded-full hover:bg-[#FFC933DD] focus:outline-none focus:ring-2 focus:ring-[#FFC933] focus:ring-opacity-50"
//                   >
//                     View more details
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center text-gray-600">No Data Available</div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Dishes;


import { useParams } from "react-router-dom";
import getData from "../../Hooks/getData";
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useState } from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

function Dishes() {
  const { id } = useParams(); // Get the ID from the URL
  // console.log("this is id for chef " + id);
  const [data] = getData(`http://localhost:5000/api/fetchDishes/${id}`);
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <>
    <NavBar/>
      <div className="flex flex-col md:flex-row ml-32 mr-32 mt-20">
        <div className="md:w-3/4 p-6">
          <h1 className="text-3xl font-bold mb-6 text-green-800">Food Delivery</h1>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Search dishes..."
              className="w-full p-2 border border-green-300 rounded"
            />
          </div>

          <div className="mb-4">
            <select className="w-full p-2 border border-green-300 rounded">
              <option value="All">All Categories</option>
              <option value="Pizza">Pizza</option>
              <option value="Burger">Burger</option>
              <option value="Salad">Salad</option>
              <option value="Pasta">Pasta</option>
              <option value="Mexican">Mexican</option>
            </select>
          </div>
        </div>
      </div>

      <div className="px-4 py-8 ml-32 mr-32 sm:px-6 lg:px-8">
        {data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {data.map((item) => (
              <div key={item._id} className="bg-white shadow-lg overflow-hidden">
                <div className="h-48">
                  <img
                    className="w-full h-full object-cover"
                    src={item.photos[0]} // Assuming there's at least one photo
                    alt={item.name}
                  />
                </div>
                <div className="p-4">
                  <h2 className="font-bold text-gray-700 text-xl leading-7 mb-2">
                    {item.name}
                  </h2>
                  <p className="text-lg font-bold text-[#0FB478] mb-4">
                    JD {item.price}
                  </p>
                  <FaShoppingCart className="text-gray-700 text-2xl" />
                  <div>
                    <FaHeart
                      onClick={handleClick}
                      className={`cursor-pointer text-2xl ${isLiked ? 'text-red-500' : 'text-gray-500'}`}
                    />
                  </div>
                  <p className="text-gray-600 mb-4">
                    {Array.isArray(item.ingredients) ? item.ingredients.join(", ") : "No ingredients available"}
                  </p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`foodiesapp://food/${item._id}`}
                    className="block w-full px-4 py-2 text-center font-medium tracking-wide text-white bg-[#FFC933] rounded-full hover:bg-[#FFC933DD] focus:outline-none focus:ring-2 focus:ring-[#FFC933] focus:ring-opacity-50"
                  >
                    View more details
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600">No Data Available</div>
        )}
      </div>
      <Footer/>
    </>
  );
}

export default Dishes;
