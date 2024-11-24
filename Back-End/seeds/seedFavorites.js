const mongoose = require('mongoose');
const connectDB = require('../config/db'); // Adjust the path if necessary
const Favorites = require('../models/Favorites'); // Adjust the path if necessary
const User = require('../models/User'); // Adjust the path if necessary
const Recipe = require('../models/Recipe'); // Adjust the path if necessary
const Dish = require('../models/Dish'); // Adjust the path if necessary

const seedFavorites = async () => {
  try {
    await connectDB(); // Connect to MongoDB
    console.log('Database connection established');

    // Fetch users, recipes, and dishes from the database
    const users = await User.find();
    const recipes = await Recipe.find();
    const dishes = await Dish.find();

    // Example favorites
    const favorites = [
      {
        userId: users[0]._id,
        recipes: [recipes[0]._id, recipes[1]._id],
        dishes: [dishes[0]._id],
      },
      {
        userId: users[1]._id,
        recipes: [recipes[2]._id],
        dishes: [dishes[1]._id, dishes[2]._id],
      },
      {
        userId: users[2]._id,
        recipes: [recipes[1]._id],
        dishes: [dishes[3]._id],
      },
      {
        userId: users[3]._id,
        recipes: [recipes[3]._id, recipes[4]._id],
        dishes: [dishes[4]._id],
      },
      {
        userId: users[4]._id,
        recipes: [recipes[0]._id, recipes[5]._id],
        dishes: [dishes[2]._id, dishes[1]._id],
      },
      {
        userId: users[5]._id,
        recipes: [recipes[2]._id],
        dishes: [dishes[3]._id, dishes[5]._id],
      },
      {
        userId: users[6]._id,
        recipes: [recipes[4]._id],
        dishes: [dishes[1]._id],
      },
      {
        userId: users[7]._id,
        recipes: [recipes[5]._id],
        dishes: [dishes[0]._id],
      },
      {
        userId: users[4]._id,
        recipes: [recipes[3]._id],
        dishes: [dishes[2]._id],
      },
      {
        userId: users[5]._id,
        recipes: [recipes[0]._id],
        dishes: [dishes[4]._id],
      },
    ];

    // Clear existing favorites
    await Favorites.deleteMany({});

    // Insert new favorites
    const docs = await Favorites.insertMany(favorites);
    console.log('Favorites inserted:', docs);

    await mongoose.connection.close(); // Close the connection after seeding
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error:', error);
    await mongoose.connection.close(); // Close the connection on error
  }
};

seedFavorites();
