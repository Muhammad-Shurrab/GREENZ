const mongoose = require('mongoose');
const connectDB = require('../config/db'); // Adjust path if necessary
const Report = require('../models/Report'); // Adjust path if necessary
const User = require('../models/User'); // Adjust path if necessary
const Recipe = require('../models/Recipe'); // Adjust path if necessary
const Dish = require('../models/Dish'); // Adjust path if necessary

const seedReports = async () => {
  try {
    await connectDB();
    console.log('Database connection established');

    // Fetch users, recipes, and dishes from the database
    const users = await User.find();
    const recipes = await Recipe.find();
    const dishes = await Dish.find();

    if (users.length === 0 || recipes.length === 0 || dishes.length === 0) {
      console.log('Ensure you have users, recipes, and dishes in the database before seeding reports.');
      return;
    }

    // Define sample reports
    const reports = [
      {
        userId: users[0]._id,
        type: 'recipe',
        targetId: recipes[0]._id,
        reason: 'Inappropriate content'
      },
      {
        userId: users[1]._id,
        type: 'dish',
        targetId: dishes[0]._id,
        reason: 'Misleading description'
      },
      {
        userId: users[2]._id,
        type: 'recipe',
        targetId: recipes[1]._id,
        reason: 'Unclear instructions'
      },
      {
        userId: users[3]._id,
        type: 'dish',
        targetId: dishes[1]._id,
        reason: 'Contains allergens'
      }
      // Add more reports as needed
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
