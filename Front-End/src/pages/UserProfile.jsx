import React, { useState, useEffect } from "react";
import axios from "axios";
import { Edit, Save } from "lucide-react";
import PurchasedDishes from "../components/ProfileC/PurchasedDishes";
import UserFavoriteDishes from "../components/ProfileC/UserFavoriteDishes";

const UserProfilePage = () => {
  const [user, setUser] = useState(); // Initially set user to null
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [purchasedDishes, setPurchasedDishes] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [macros, setMacros] = useState(null);
  const userId = localStorage.getItem("user_id");

  // Fetch user data, saved recipes, etc.
  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem("user_id");
      if (!userId) {
        console.error("User ID is missing");
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:5000/api/users/profile/${userId}`
        );
        console.log("API Response:", response.data); // Check the response structure
        setUser(response.data.user || {}); // Ensure user is not undefined
        setSavedRecipes(response.data.savedRecipes || []);
        setAge(response.data.age || "");
        setRecentlyViewed(response.data.recentlyViewed || []);
        setPurchasedDishes(response.data.purchasedDishes || []);
        setOrderHistory(response.data.orderHistory || []);
        setReviews(response.data.reviews || []);
      } catch (error) {
        console.error(
          "Error fetching user data:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchUserData();
  }, []);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = async () => {
    setEditMode(false);
    try {
      const updatedData = {
        name: user?.name,
        password: user?.password,
        profilePhoto: user?.profilePhoto,
        address: user?.address,
        email: user?.email,
        phoneNumber: user?.phoneNumber,
      };

      await axios.put(
        `http://localhost:5000/api/users/profile/${userId}`,
        updatedData
      );
      console.log("User data updated successfully");
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const calculateMacros = () => {
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    setMacros({
      calories: Math.round(bmr * 1.2),
      protein: Math.round((bmr * 1.2 * 0.3) / 4),
      carbs: Math.round((bmr * 1.2 * 0.5) / 4),
      fat: Math.round((bmr * 1.2 * 0.2) / 9),
    });
  };

  if (!user) return <div>Loading...</div>; // Prevent rendering when user is null

  return (
    <>
      <div className="bg-white min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-green mb-8">User Profile</h1>

          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Personal Information</h2>
              {editMode ? (
                <button
                  onClick={handleSave}
                  className="flex items-center text-green"
                >
                  <Save size={20} className="mr-1" /> Save
                </button>
              ) : (
                <button
                  onClick={handleEdit}
                  className="flex items-center text-green"
                >
                  <Edit size={20} className="mr-1" /> Edit
                </button>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <img
                  src={user?.profilePhoto || "default-profile.jpg"} // Fallback to default image
                  alt="Profile"
                  className="w-32 h-32 rounded-full mb-4"
                />
                {editMode && (
                  <input
                    type="text"
                    value={user?.profilePhoto || ""}
                    onChange={(e) =>
                      setUser({ ...user, profilePhoto: e.target.value })
                    }
                    placeholder="Enter profile photo URL"
                    className="w-full p-2 border rounded mb-2"
                  />
                )}
              </div>
              <div>
                <label className="block mb-2">Name</label>
                {editMode ? (
                  <input
                    type="text"
                    value={user?.name || ""}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  <p>{user?.name}</p>
                )}
              </div>
              <div>
                <label className="block mb-2">Email</label>
                {editMode ? (
                  <input
                    type="text"
                    value={user?.email || ""}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  <p>{user?.email}</p>
                )}
              </div>
              {/* <div>
              <label className="block mb-2">Password</label>
              {editMode ? (
                <input
                  type="password"
                  value={user?.password || ""}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                />
              ) : (
                <p>{user?.password}</p>
              )}
            </div> */}
            </div>
          </div>

          {/* Macro Calculator and other sections */}
        </div>
      </div>
      <PurchasedDishes />
      <UserFavoriteDishes />
    </>
  );
};

export default UserProfilePage;
