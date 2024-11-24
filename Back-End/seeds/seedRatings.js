const mongoose = require('mongoose');
const connectDB = require('../config/db'); // Adjust the path if necessary
const Rating = require('../models/Rating'); // Adjust the path if necessary
const User = require('../models/User'); // Adjust the path if necessary
const Recipe = require('../models/Recipe'); // Adjust the path if necessary
const Dish = require('../models/Dish'); // Adjust the path if necessary

const seedRatings = async () => {
  try {
    await connectDB(); // Connect to MongoDB
    console.log('Database connection established');

    // Fetch users, recipes, and dishes from the database
    const users = await User.find();
    const recipes = await Recipe.find();
    const dishes = await Dish.find();

    // Example ratings
    const ratings = [
      {
        userId: users[0]._id,
        type: 'recipe',
        targetId: recipes[0]._id,
        rating: 4
      },
      {
        userId: users[1]._id,
        type: 'dish',
        targetId: dishes[0]._id,
        rating: 5
      },
      {
        userId: users[2]._id,
        type: 'recipe',
        targetId: recipes[1]._id,
        rating: 3
      },
      {
        userId: users[3]._id,
        type: 'dish',
        targetId: dishes[1]._id,
        rating: 4
      },
      {
        userId: users[0]._id,
        type: 'recipe',
        targetId: recipes[2]._id,
        rating: 5
      },
      {
        userId: users[1]._id,
        type: 'dish',
        targetId: dishes[2]._id,
        rating: 2
      },
      {
        userId: users[2]._id,
        type: 'recipe',
        targetId: recipes[0]._id,
        rating: 4
      },
      {
        userId: users[3]._id,
        type: 'dish',
        targetId: dishes[0]._id,
        rating: 3
      },
      {
        userId: users[0]._id,
        type: 'recipe',
        targetId: recipes[1]._id,
        rating: 4
      },
      {
        userId: users[1]._id,
        type: 'dish',
        targetId: dishes[1]._id,
        rating: 5
      },
      {
        userId: users[4]._id,
        type: 'recipe',
        targetId: recipes[3]._id,
        rating: 4
      },
      {
        userId: users[5]._id,
        type: 'dish',
        targetId: dishes[3]._id,
        rating: 5
      },
      {
        userId: users[6]._id,
        type: 'recipe',
        targetId: recipes[4]._id,
        rating: 3
      },
      {
        userId: users[7]._id,
        type: 'dish',
        targetId: dishes[4]._id,
        rating: 4
      },
      {
        userId: users[4]._id,
        type: 'recipe',
        targetId: recipes[5]._id,
        rating: 5
      },
      {
        userId: users[5]._id,
        type: 'dish',
        targetId: dishes[5]._id,
        rating: 2
      },
      {
        userId: users[6]._id,
        type: 'recipe',
        targetId: recipes[3]._id,
        rating: 4
      },
      {
        userId: users[7]._id,
        type: 'dish',
        targetId: dishes[3]._id,
        rating: 3
      },
      {
        userId: users[4]._id,
        type: 'recipe',
        targetId: recipes[4]._id,
        rating: 4
      },
      {
        userId: users[5]._id,
        type: 'dish',
        targetId: dishes[4]._id,
        rating: 5
      }
    ];

    // Clear existing ratings
    await Rating.deleteMany({});

    // Insert new ratings
    const docs = await Rating.insertMany(ratings);
    console.log('Ratings inserted:', docs);

    await mongoose.connection.close(); // Close the connection after seeding
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error:', error);
    await mongoose.connection.close(); // Close the connection on error
  }
};

seedRatings();
