import React, { useState, useEffect } from "react";
import axios from "axios";

const PurchasedDishes = ({ userId }) => {
  const [dishes, setDishes] = useState([]); // Ensure it's initialized as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPurchasedDishes = async () => {
      try {
        const response = await axios.get(`/api/users/profile${userId}`);

        // Ensure response is an array before setting state
        if (Array.isArray(response.data)) {
          setDishes(response.data);
        } else {
          setDishes([]); // Set an empty array if the response is not an array
        }

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch purchased dishes");
        setLoading(false);
      }
    };

    fetchPurchasedDishes();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-3xl text-center font-bold text-green mb-6">
        Purchased Dishes
      </h2>
      {dishes.length > 0 ? (
        <ul className="space-y-4">
          {dishes.map((dish) => (
            <li
              key={dish._id}
              className="bg-white rounded-lg p-4 flex items-center shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={dish.photos[0]}
                alt={dish.name}
                className="w-24 h-24 object-cover rounded-full border-2 border-yellow mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-green">
                  {dish.name}
                </h3>
                <p className="text-gray-600">{dish.description}</p>
                <p className="text-lg font-medium text-yellow">
                  Price: ${dish.price}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center mt-6">
          No purchased dishes available.
        </p>
      )}
    </div>
  );
};

export default PurchasedDishes;
