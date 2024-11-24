import React, { useState, useEffect } from "react";
import axios from "axios";

const UserFavoriteDishes = ({ userId }) => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(`/api/users/${userId}/favorites`);
        setFavorites(response.data.dishes || []);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch favorite dishes");
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [userId]);

  if (loading)
    return <div className="text-center text-gray-600">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-4xl my-8 p-6  w-full  bg-gray-100  rounded-lg shadow-md rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-green text-center mb-6">
        Your Favorite Dishes
      </h2>
      {favorites && favorites.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {favorites.map((dish) => (
            <li
              key={dish._id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-green mb-2">
                {dish.name}
              </h3>
              <p className="text-gray-600 mb-2">{dish.description}</p>
              <p className="text-yellow font-bold mb-2">Price: ${dish.price}</p>
              {dish.photos && dish.photos.length > 0 && (
                <img
                  src={dish.photos[0]}
                  alt={dish.name}
                  className="w-full h-48 object-cover rounded-md"
                />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-600 text-lg">
          You have no favorite dishes yet.
        </p>
      )}
    </div>
  );
};

export default UserFavoriteDishes;
