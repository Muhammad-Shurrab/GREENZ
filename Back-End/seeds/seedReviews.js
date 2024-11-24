const mongoose = require('mongoose');
const connectDB = require('../config/db'); // Adjust path if necessary
const Report = require('../models/Report'); // Adjust path if necessary
const User = require('../models/User'); // Adjust path if necessary
const Recipe = require('../models/Recipe'); // Adjust path if necessary
const Dish = require('../models/Dish'); // Adjust path if necessary

const seedReports = async () => {
  try {
    await connectDB(); // Connect to MongoDB
    console.log('Database connection established');

    // Fetch users, recipes, and dishes from the database
    const users = await User.find();
    const recipes = await Recipe.find();
    const dishes = await Dish.find();

    if (users.length === 0 || recipes.length === 0 || dishes.length === 0) {
      console.log('No users, recipes, or dishes found. Please add some data to the database first.');
      return;
    }

    // Example reports
    const reports = [
      {
        userId: users[0]._id,
        type: 'recipe',
        targetId: recipes[0]._id,
        reason: 'Inappropriate content in the recipe description.',
      },
      {
        userId: users[1]._id,
        type: 'dish',
        targetId: dishes[0]._id,
        reason: 'Misleading information about ingredients.',
      },
      {
        userId: users[2]._id,
        type: 'recipe',
        targetId: recipes[1]._id,
        reason: 'Recipe contains allergens without warning.',
      },
      {
        userId: users[0]._id,
        type: 'dish',
        targetId: dishes[1]._id,
        reason: 'Dish preparation instructions are unclear.',
      },
      {
        userId: users[1]._id,
        type: 'recipe',
        targetId: recipes[2]._id,
        reason: 'Nutritional information is inaccurate.',
      },
      {
        userId: users[2]._id,
        type: 'dish',
        targetId: dishes[2]._id,
        reason: 'The dish photo is misleading.',
      },
      {
        userId: users[0]._id,
        type: 'recipe',
        targetId: recipes[3]._id,
        reason: 'Recipe does not mention required cooking tools.',
      },
      {
        userId: users[1]._id,
        type: 'dish',
        targetId: dishes[3]._id,
        reason: 'Contains inappropriate language in the description.',
      },
      {
        userId: users[2]._id,
        type: 'recipe',
        targetId: recipes[4]._id,
        reason: 'Incomplete list of ingredients.',
      },
      {
        userId: users[0]._id,
        type: 'dish',
        targetId: dishes[4]._id,
        reason: 'Dish includes prohibited ingredients.',
      }
    ];

    // Clear existing reports
    await Report.deleteMany({});

    // Insert new reports
    const docs = await Report.insertMany(reports);
    console.log('Reports inserted:', docs);

    await mongoose.connection.close(); // Close connection after seeding
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error:', error);
    await mongoose.connection.close(); // Close connection on error
  }
};

seedReports();
