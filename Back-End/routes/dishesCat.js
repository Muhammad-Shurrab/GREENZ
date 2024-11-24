const express = require('express');
const router = express.Router();
const Dish = require('../models/Dish'); // Adjust the path as necessary

// Route to fetch dishes by category
router.get('/dishes', async (req, res) => {
  try {
    const category = req.query.category;
    if (!category) {
      return res.status(400).json({ message: 'Category query parameter is required' });
    }

    // Find dishes by category
    const dishes = await Dish.find({ category: category }).exec();
    res.json(dishes);
  } catch (error) {
    console.error('Error fetching dishes:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route to fetch all unique categories
router.get('/categories', async (req, res) => {
  try {
    // Aggregate to get unique categories
    const categories = await Dish.distinct('category').exec();
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
