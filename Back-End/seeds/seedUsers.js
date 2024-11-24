const mongoose = require('mongoose');
const connectDB = require('../config/db');
const User = require('../models/User'); // Adjust path if necessary


const users = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password123', // This will be hashed
    isActive: true,
    profileImage: 'https://example.com/profile1.jpg',
    address: {
      street: '123 Elm Street',
      city: 'Springfield',
      state: 'IL',
      zip: '62701',
      country: 'USA'
    },
    contactNumber: '+1234567890',
    googleId: 'googleId1',
    businessDetails: {
      paymentInfo: {
        bankName: 'Bank A',
        accountNumber: '123456789',
        routingNumber: '987654321',
        paypalId: 'paypalId1'
      },
      deliveryOptions: 'delivery'
    }
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    password: 'password456', // This will be hashed
    isActive: true,
    profileImage: 'https://example.com/profile2.jpg',
    address: {
      street: '456 Oak Avenue',
      city: 'Metropolis',
      state: 'NY',
      zip: '10001',
      country: 'USA'
    },
    contactNumber: '+0987654321',
    googleId: 'googleId2',
    businessDetails: {
      paymentInfo: {
        bankName: 'Bank B',
        accountNumber: '987654321',
        routingNumber: '123456789',
        paypalId: 'paypalId2'
      },
      deliveryOptions: 'pickup'
    }
  }
];
  


const seedUsers = async () => {
  try {
    await connectDB();
    console.log('Database connection established');

    await User.deleteMany({}); // Clear existing users
    const docs = await User.insertMany(users);
    console.log('Users inserted:', docs);

    await mongoose.connection.close(); // Close connection after seeding
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error:', error);
    await mongoose.connection.close(); // Close connection on error
  }
};

seedUsers();

