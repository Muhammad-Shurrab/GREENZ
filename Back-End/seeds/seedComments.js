const mongoose = require('mongoose');
const connectDB = require('../config/db'); // Adjust path if necessary
const Comment = require('../models/Comments'); // Adjust path if necessary
const User = require('../models/User'); // Adjust path if necessary
const Recipe = require('../models/Recipe'); // Adjust path if necessary
const Dish = require('../models/Dish'); // Adjust path if necessary

const seedComments = async () => {
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

    // Example comments
    const comments = [
      {
        userId: users[0]._id,
        type: 'recipe',
        targetId: recipes[0]._id,
        comment: 'This recipe turned out great! My family loved it.',
        replies: [
          {
            userId: users[1]._id,
            reply: 'I tried it too, and it was amazing!'
          },
          {
            userId: users[2]._id,
            reply: 'What did you serve it with?'
          }
        ]
      },
      {
        userId: users[1]._id,
        type: 'dish',
        targetId: dishes[0]._id,
        comment: 'The dish was a bit too salty for my taste.',
        replies: [
          {
            userId: users[0]._id,
            reply: 'You can reduce the salt and add more herbs for flavor.'
          }
        ]
      },
      {
        userId: users[2]._id,
        type: 'recipe',
        targetId: recipes[1]._id,
        comment: 'Simple and delicious. Will make again!'
      },
      {
        userId: users[0]._id,
        type: 'dish',
        targetId: dishes[1]._id,
        comment: 'This dish was a hit at the party. Everyone asked for the recipe.',
        replies: [
          {
            userId: users[1]._id,
            reply: 'Glad to hear it! I’ll try it at my next gathering.'
          }
        ]
      },
      {
        userId: users[1]._id,
        type: 'recipe',
        targetId: recipes[2]._id,
        comment: 'The cooking time was off. It needed 10 more minutes.'
      },
      {
        userId: users[2]._id,
        type: 'dish',
        targetId: dishes[2]._id,
        comment: 'Great presentation, but the flavors didn’t quite come together for me.'
      },
      {
        userId: users[0]._id,
        type: 'recipe',
        targetId: recipes[3]._id,
        comment: 'Perfect for a quick weeknight dinner.',
        replies: [
          {
            userId: users[2]._id,
            reply: 'Do you have any tips to make it even quicker?'
          }
        ]
      },
      {
        userId: users[1]._id,
        type: 'dish',
        targetId: dishes[3]._id,
        comment: 'A solid dish, but could use a bit more spice.'
      },
      {
        userId: users[2]._id,
        type: 'recipe',
        targetId: recipes[4]._id,
        comment: 'The instructions were a bit confusing, but it turned out fine in the end.'
      },
      {
        userId: users[0]._id,
        type: 'dish',
        targetId: dishes[4]._id,
        comment: 'A wonderful dish for special occasions!',
        replies: [
          {
            userId: users[1]._id,
            reply: 'I’ll keep it in mind for my next holiday dinner.'
          }
        ]
      }
    ];

    // Clear existing comments
    await Comment.deleteMany({});

    // Insert new comments
    const docs = await Comment.insertMany(comments);
    console.log('Comments inserted:', docs);

    await mongoose.connection.close(); // Close connection after seeding
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error:', error);
    await mongoose.connection.close(); // Close connection on error
  }
};

seedComments();
