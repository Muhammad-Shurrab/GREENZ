

import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "GREENZ has transformed my meal planning! Their recipes are delicious, easy to follow, and truly healthy. I've lost 10 pounds without feeling like I'm on a diet.",
    userName: "Emily R.",
    userTitle: "Busy Mom & Fitness Enthusiast",
    userImage: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
    rating: 3,
  },
  {
    id: 2,
    text: "As a vegetarian, I often struggled to find varied, protein-rich meals. GREENZ offers an amazing selection of plant-based recipes that keep me satisfied and energized.",
    userName: "Michael L.",
    userTitle: "Vegetarian Chef",
    userImage: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    rating: 5,
  },
  {
    id: 3,
    text: "The meal kits from GREENZ are a game-changer. Fresh ingredients, perfectly portioned, and minimal prep time. It's like having a personal nutritionist and chef!",
    userName: "Sarah K.",
    userTitle: "Working Professional",
    userImage: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-green">Healthy Living, Happy Customers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? 'text-yellow fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img src={testimonial.userImage} alt={testimonial.userName} className="w-12 h-12 rounded-full object-cover border-2 border-green-500" />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-green-800">{testimonial.userName}</h4>
                  <p className="text-sm text-gray-600">{testimonial.userTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;