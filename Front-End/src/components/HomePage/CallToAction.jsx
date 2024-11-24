// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Leaf, ArrowRight } from 'lucide-react';

// const CallToAction = () => {
//   return (
//     <section className="bg-gradient-to-br from-green to-green text-white py-16 relative overflow-hidden">
//       <div className="absolute inset-0 bg-pattern opacity-10"></div>
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-3xl mx-auto text-center">
//           <Leaf className="w-16 h-16 mx-auto mb-6 animate-bounce text-yellow" />
//           <h2 className="text-4xl font-bold mb-6 leading-tight">
//             Embrace a Healthier Lifestyle with GREENZ
//           </h2>
//           <p className="text-xl mb-8 leading-relaxed">
//             Discover a world of nutritious, delicious recipes and meal plans tailored to your needs. 
//             Join thousands of happy customers who have transformed their eating habits and feel amazing every day.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
//             <Link 
//               to="/signup" 
//               className="bg-white text-yellow px-8 py-3 rounded-full font-bold text-lg hover:bg-green-100 transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
//             >
//               Join Now
//               <ArrowRight className="ml-2 w-5 h-5" />
//             </Link>
            
//           </div>
//         </div>
//       </div>
//       <div className="mt-12 text-center">
//         <p className="text-lg font-medium mb-4 text-yellow">Trusted by health-conscious individuals worldwide</p>
//         <div className="flex justify-center items-center space-x-8">
//           {['5,000+', '500+', '98%'].map((stat, index) => (
//             <div key={index} className="text-center">
//               <p className="text-3xl font-bold mb-2">{stat}</p>
//               <p className="text-sm opacity-75">
//                 {index === 0 ? 'Happy Customers' : index === 1 ? 'Recipes' : 'Satisfaction Rate'}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default CallToAction;


import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-br from-green to-green text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className='flex'>

          <h2 className="text-4xl font-bold leading-tight">
          Showcase Your Expertise with GREENZ          </h2>
          <Leaf className="w-16 h-16 mx-auto  animate-bounce text-yellow" />
          </div>
          <p className="text-l mb-8 leading-relaxed">
          Join our chef community, share your creations, and inspire health-conscious food lovers.

          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/signup" 
              className="bg-white text-yellow px-8 py-3 rounded-full font-bold text-lg hover:bg-green-100 transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
            >
              Join as a Chef
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p className="text-lg font-medium mb-4 text-yellow">Trusted by renowned chefs and culinary experts worldwide</p>
        <div className="flex justify-center items-center space-x-8">
          {['1,000+', '200+', '95%'].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-bold mb-2">{stat}</p>
              <p className="text-sm opacity-75">
                {index === 0 ? 'Expert Chefs' : index === 1 ? 'Shared Recipes' : 'Positive Feedback'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
