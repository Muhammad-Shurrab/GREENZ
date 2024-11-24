const mongoose = require('mongoose');
const connectDB = require('../config/db'); // Adjust the path if necessary
const Order = require('../models/Order'); // Adjust the path if necessary
const User = require('../models/User'); // Adjust the path if necessary
const Chef = require('../models/Chef'); // Adjust the path if necessary
const Dish = require('../models/Dish'); // Adjust the path if necessary

const seedOrders = async () => {
  try {
    await connectDB(); // Connect to MongoDB
    console.log('Database connection established');

    // Fetch users, chefs, and dishes from the database
    const users = await User.find();
    const chefs = await Chef.find();
    const dishes = await Dish.find();

    // Example orders
    const orders = [
      {
        userId: users[0]._id,
        chefId: chefs[0]._id,
        dishId: dishes[0]._id,
        quantity: 2,
        totalPrice: 50.00,
        status: 'completed',
        deliveryDetails: {
          address: {
            street: '123 Main St',
            city: 'Amman',
            state: 'Amman',
            zip: '11181',
            country: 'Jordan'
          },
          contactNumber: '+96212345678',
          deliveryOption: 'delivery'
        }
      },
      {
        userId: users[1]._id,
        chefId: chefs[1]._id,
        dishId: dishes[1]._id,
        quantity: 1,
        totalPrice: 30.00,
        status: 'pending',
        deliveryDetails: {
          address: {
            street: '456 Elm St',
            city: 'Zarqa',
            state: 'Zarqa',
            zip: '13110',
            country: 'Jordan'
          },
          contactNumber: '+96287654321',
          deliveryOption: 'pickup'
        }
      },
      {
        userId: users[2]._id,
        chefId: chefs[2]._id,
        dishId: dishes[2]._id,
        quantity: 3,
        totalPrice: 75.00,
        status: 'completed',
        deliveryDetails: {
          address: {
            street: '789 Oak St',
            city: 'Irbid',
            state: 'Irbid',
            zip: '21110',
            country: 'Jordan'
          },
          contactNumber: '+96211223344',
          deliveryOption: 'delivery'
        }
      },
      {
        userId: users[3]._id,
        chefId: chefs[0]._id,
        dishId: dishes[1]._id,
        quantity: 2,
        totalPrice: 60.00,
        status: 'pending',
        deliveryDetails: {
          address: {
            street: '321 Pine St',
            city: 'Madaba',
            state: 'Madaba',
            zip: '17100',
            country: 'Jordan'
          },
          contactNumber: '+96299887766',
          deliveryOption: 'pickup'
        }
      },
      {
        userId: users[0]._id,
        chefId: chefs[1]._id,
        dishId: dishes[0]._id,
        quantity: 1,
        totalPrice: 25.00,
        status: 'completed',
        deliveryDetails: {
          address: {
            street: '987 Cedar St',
            city: 'Salt',
            state: 'Balqa',
            zip: '19100',
            country: 'Jordan'
          },
          contactNumber: '+96255443322',
          deliveryOption: 'delivery'
        }
      },
      {
        userId: users[1]._id,
        chefId: chefs[2]._id,
        dishId: dishes[2]._id,
        quantity: 2,
        totalPrice: 55.00,
        status: 'completed',
        deliveryDetails: {
          address: {
            street: '654 Maple St',
            city: 'Aqaba',
            state: 'Aqaba',
            zip: '77110',
            country: 'Jordan'
          },
          contactNumber: '+96244332211',
          deliveryOption: 'delivery'
        }
      },
      {
        userId: users[2]._id,
        chefId: chefs[0]._id,
        dishId: dishes[1]._id,
        quantity: 3,
        totalPrice: 90.00,
        status: 'pending',
        deliveryDetails: {
          address: {
            street: '159 Birch St',
            city: 'Karak',
            state: 'Karak',
            zip: '61710',
            country: 'Jordan'
          },
          contactNumber: '+96266778899',
          deliveryOption: 'pickup'
        }
      },
      {
        userId: users[3]._id,
        chefId: chefs[1]._id,
        dishId: dishes[0]._id,
        quantity: 1,
        totalPrice: 20.00,
        status: 'completed',
        deliveryDetails: {
          address: {
            street: '753 Spruce St',
            city: 'Mafraq',
            state: 'Mafraq',
            zip: '77100',
            country: 'Jordan'
          },
          contactNumber: '+96222334455',
          deliveryOption: 'delivery'
        }
      },
      {
        userId: users[0]._id,
        chefId: chefs[2]._id,
        dishId: dishes[2]._id,
        quantity: 2,
        totalPrice: 50.00,
        status: 'completed',
        deliveryDetails: {
          address: {
            street: '852 Fir St',
            city: 'Jerash',
            state: 'Jerash',
            zip: '26110',
            country: 'Jordan'
          },
          contactNumber: '+96266778855',
          deliveryOption: 'delivery'
        }
      },
      {
        userId: users[1]._id,
        chefId: chefs[0]._id,
        dishId: dishes[1]._id,
        quantity: 4,
        totalPrice: 100.00,
        status: 'pending',
        deliveryDetails: {
          address: {
            street: '951 Palm St',
            city: 'Maan',
            state: 'Maan',
            zip: '71110',
            country: 'Jordan'
          },
          contactNumber: '+96244335577',
          deliveryOption: 'pickup'
        }
      }
    ];

    // Clear existing orders
    await Order.deleteMany({});

    // Insert new orders
    const docs = await Order.insertMany(orders);
    console.log('Orders inserted:', docs);

    await mongoose.connection.close(); // Close the connection after seeding
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error:', error);
    await mongoose.connection.close(); // Close the connection on error
  }
};

seedOrders();
