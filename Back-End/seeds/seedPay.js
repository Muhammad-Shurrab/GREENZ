const mongoose = require('mongoose');
const connectDB = require('../config/db'); // Adjust path if necessary
const Payment = require('../models/Payment'); // Adjust path if necessary
const User = require('../models/User'); // Adjust path if necessary
const Chef = require('../models/Chef'); // Adjust path if necessary

const seedPayments = async () => {
  try {
    await connectDB(); // Connect to MongoDB
    console.log('Database connection established');

    // Fetch users and chefs from the database
    const users = await User.find();
    const chefs = await Chef.find();

    if (users.length === 0 || chefs.length === 0) {
      console.log('No users or chefs found. Please add some data to the database first.');
      return;
    }

    // Example payments
    const payments = [
      {
        userId: users[0]._id,
        amount: 29.99,
        method: 'PayPal',
        status: 'completed',
        transactionId: 'txn_1234567890',
        createdAt: new Date(),
        updatedAt: new Date(),
        chefId: chefs[0]._id
      },
      {
        userId: users[1]._id,
        amount: 49.99,
        method: 'Stripe',
        status: 'pending',
        transactionId: 'txn_0987654321',
        createdAt: new Date(),
        updatedAt: new Date(),
        chefId: chefs[1]._id
      },
      {
        userId: users[2]._id,
        amount: 15.00,
        method: 'PayPal',
        status: 'completed',
        transactionId: 'txn_1122334455',
        createdAt: new Date(),
        updatedAt: new Date(),
        chefId: chefs[2]._id
      },
      {
        userId: users[0]._id,
        amount: 100.00,
        method: 'Stripe',
        status: 'failed',
        transactionId: 'txn_6677889900',
        createdAt: new Date(),
        updatedAt: new Date(),
        chefId: chefs[3]._id
      },
      {
        userId: users[1]._id,
        amount: 65.75,
        method: 'PayPal',
        status: 'completed',
        transactionId: 'txn_5544332211',
        createdAt: new Date(),
        updatedAt: new Date(),
        chefId: chefs[0]._id
      },
      {
        userId: users[2]._id,
        amount: 80.50,
        method: 'Stripe',
        status: 'completed',
        transactionId: 'txn_9988776655',
        createdAt: new Date(),
        updatedAt: new Date(),
        chefId: chefs[1]._id
      },
      {
        userId: users[0]._id,
        amount: 120.00,
        method: 'PayPal',
        status: 'completed',
        transactionId: 'txn_2233445566',
        createdAt: new Date(),
        updatedAt: new Date(),
        chefId: chefs[2]._id
      },
      {
        userId: users[1]._id,
        amount: 95.00,
        method: 'Stripe',
        status: 'pending',
        transactionId: 'txn_6655443322',
        createdAt: new Date(),
        updatedAt: new Date(),
        chefId: chefs[3]._id
      },
      {
        userId: users[2]._id,
        amount: 45.25,
        method: 'PayPal',
        status: 'completed',
        transactionId: 'txn_7766554433',
        createdAt: new Date(),
        updatedAt: new Date(),
        chefId: chefs[0]._id
      },
      {
        userId: users[0]._id,
        amount: 200.00,
        method: 'Stripe',
        status: 'failed',
        transactionId: 'txn_4455667788',
        createdAt: new Date(),
        updatedAt: new Date(),
        chefId: chefs[1]._id
      },
      {
        userId: users[1]._id,
        amount: 30.00,
        method: 'PayPal',
        status: 'completed',
        transactionId: 'txn_8899776655',
        createdAt: new Date(),
        updatedAt: new Date(),
        chefId: chefs[2]._id
      },
      {
        userId: users[2]._id,
        amount: 55.00,
        method: 'Stripe',
        status: 'pending',
        transactionId: 'txn_3344556677',
        createdAt: new Date(),
        updatedAt: new Date(),
        chefId: chefs[3]._id
      }
    ];

    // Clear existing payments
    await Payment.deleteMany({});

    // Insert new payments
    const docs = await Payment.insertMany(payments);
    console.log('Payments inserted:', docs);

    await mongoose.connection.close(); // Close connection after seeding
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error:', error);
    await mongoose.connection.close(); // Close connection on error
  }
};

seedPayments();
