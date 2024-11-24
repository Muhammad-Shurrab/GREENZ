import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ChefSpotlight = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    const fetchChefs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/chefs'); // Adjust the URL if necessary
        setChefs(response.data);
      } catch (error) {
        console.error('Error fetching chefs:', error);
      }
    };

    fetchChefs();
  }, []);

  // Show only the first 3 chefs
  const displayChefs = chefs.slice(0, 3);

  return (
    <section className=" py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-green">Meet Our Chefs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayChefs.map((chef) => (
            <div key={chef._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={chef.profilePicture || 'https://via.placeholder.com/400x300'} alt={chef.name} className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-yellow">{chef.name}</h3>
                <p className="text-gray-600">Specialty: {chef.specialties.join(', ') || 'N/A'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChefSpotlight;
