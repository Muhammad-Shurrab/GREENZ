const mongoose = require('mongoose');
const connectDB = require('../config/db'); // Adjust path if necessary
const Category = require('../models/Category'); // Adjust path if necessary

// Sample categories data
const categories = [
    {
        name: 'Vegan',
        type: 'recipe',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Gluten-Free',
        type: 'recipe',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Dessert',
        type: 'dish',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Low-Carb',
        type: 'dish',
        createdAt: new Date(),
        updatedAt: new Date()
    }
];

const seedCategories = async () => {
    try {
        await connectDB(); // Connect to the database
        await Category.deleteMany(); // Clear existing data
        const result = await Category.insertMany(categories); // Insert new data
        console.log('Categories inserted:', result);
    } catch (error) {
        console.error('Error seeding Categories:', error);
    } finally {
        mongoose.disconnect(); // Close the connection properly
    }
};

seedCategories();
