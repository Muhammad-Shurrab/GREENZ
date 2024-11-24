const mongoose = require('mongoose');
const connectDB = require('../config/db'); // Adjust path if necessary
const Notification = require('../models/Notification'); // Adjust path if necessary
const User = require('../models/User'); // Adjust path if necessary

// Sample notifications data
const notifications = [
    {
        userId: 'user_id_1', // Replace with actual ObjectId if available
        type: 'order',
        message: 'Your order #12345 has been shipped.',
        read: false,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        userId: 'user_id_2', // Replace with actual ObjectId if available
        type: 'message',
        message: 'You have a new message from Jane Doe.',
        read: false,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        userId: 'user_id_1', // Replace with actual ObjectId if available
        type: 'alert',
        message: 'Your subscription is about to expire.',
        read: true,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        userId: 'user_id_3', // Replace with actual ObjectId if available
        type: 'order',
        message: 'Your order #67890 has been delivered.',
        read: false,
        createdAt: new Date(),
        updatedAt: new Date()
    }
];

const seedNotifications = async () => {
    try {
        await connectDB(); // Connect to the database

        // Fetch users dynamically if needed
        const users = await User.find({}); // Fetch all users

        // Replace placeholder user IDs with actual ones
        const updatedNotifications = notifications.map(notification => ({
            ...notification,
            userId: notification.userId && users.find(user => user._id.toString() === notification.userId)?._id
        }));

        await Notification.deleteMany(); // Clear existing data
        const result = await Notification.insertMany(updatedNotifications); // Insert new data
        console.log('Notifications inserted:', result);
    } catch (error) {
        console.error('Error seeding Notifications:', error);
    } finally {
        mongoose.disconnect(); // Close the connection properly
    }
};

seedNotifications();
