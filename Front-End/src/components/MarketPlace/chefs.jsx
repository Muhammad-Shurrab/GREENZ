import React from 'react';
// import shopImage from './images/shops.png';
import getData from '../../Hooks/getData';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Chefs = () => {
  const [data] = getData(`http://localhost:5000/api/fetchChefs`);

  return (
    <>
    <NavBar/>
      <br />
      {data.length > 0 ? (
        <div className="grid grid-cols-1 m-32 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 m-40">
          {data.map((chef) => (
            <div key={chef._id}   className="bg-white   shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
              <img
                className="w-full h-70 object-cover"
                src="https://img.freepik.com/premium-photo/professional-chef-man-showing-sign-delicious-male-chef-white-uniform-with-perfect-sign_763111-6717.jpg"
                alt="Store with Hat"
              />
              <div className="p-5">
              <Link to={`/dishes/${chef._id}`}>
              <h2 className="text-2xl font-semibold text-gray-800 text-center">
              {chef.name}
             
                </h2>
                </Link>
                {/* <div className="mt-4">
                  Add any additional details here
                </div> */}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center">No chefs available.</p>
      )}
      <Footer/>
    </>
  );
};

export default Chefs;

