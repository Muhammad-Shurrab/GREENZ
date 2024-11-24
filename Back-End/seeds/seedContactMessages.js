const mongoose = require('mongoose');
const connectDB = require('../config/db'); // Adjust the path if necessary
const ContactMessage = require('../models/ContactUs'); // Adjust the path if necessary
const User = require('../models/User'); // Adjust the path if necessary

const seedContactMessages = async () => {
  try {
    await connectDB(); // Connect to MongoDB
    console.log('Database connection established');

    // Fetch users from the database
    const users = await User.find();

    // Example contact messages
    const contactMessages = [
      {
        userId: users[0] ? users[0]._id : null,
        name: users[0] ? users[0].name : 'John Doe',
        email: users[0] ? users[0].email : 'john.doe@example.com',
        message: 'I have a question about your service.',
        status: 'new'
      },
      {
        userId: users[1] ? users[1]._id : null,
        name: users[1] ? users[1].name : 'Jane Smith',
        email: users[1] ? users[1].email : 'jane.smith@example.com',
        message: 'Can I update my account details?',
        status: 'new'
      },
      {
        name: 'Guest User',
        email: 'guest1@example.com',
        message: 'I am unable to log in to my account.',
        status: 'new'
      },
      {
        name: 'Guest User',
        email: 'guest2@example.com',
        message: 'How do I reset my password?',
        status: 'read'
      },
      {
        userId: users[2] ? users[2]._id : null,
        name: users[2] ? users[2].name : 'Alice Johnson',
        email: users[2] ? users[2].email : 'alice.johnson@example.com',
        message: 'Can you help me with a billing issue?',
        status: 'resolved'
      },
      {
        name: 'Guest User',
        email: 'guest3@example.com',
        message: 'I have a suggestion for your website.',
        status: 'new'
      },
      {
        name: 'Guest User',
        email: 'guest4@example.com',
        message: 'Your service is fantastic!',
        status: 'read'
      },
      {
        userId: users[3] ? users[3]._id : null,
        name: users[3] ? users[3].name : 'Robert Brown',
        email: users[3] ? users[3].email : 'robert.brown@example.com',
        message: 'I found a bug in your application.',
        status: 'resolved'
      },
      {
        name: 'Guest User',
        email: 'guest5@example.com',
        message: 'Can I change my subscription plan?',
        status: 'new'
      },
      {
        userId: users[4] ? users[4]._id : null,
        name: users[4] ? users[4].name : 'Maria Garcia',
        email: users[4] ? users[4].email : 'maria.garcia@example.com',
        message: 'Where can I find your privacy policy?',
        status: 'read'
      }
    ];

    // Clear existing contact messages
    await ContactMessage.deleteMany({});

    // Insert new contact messages
    const docs = await ContactMessage.insertMany(contactMessages);
    console.log('Contact messages inserted:', docs);

    await mongoose.connection.close(); // Close the connection after seeding
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error:', error);
    await mongoose.connection.close(); // Close the connection on error
  }
};

seedContactMessages();
