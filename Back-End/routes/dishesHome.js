const express = require('express');
const router = express.Router();
const Dish = require('../models/Dish'); // Adjust path if necessary

// Route to get all dishes with populated chef details
router.get('/', async (req, res) => {
  try {
    const dishes = await Dish.find()
      .populate('chefId', 'name') // Populate the chefId field and select only the name field
      .exec();
    res.json(dishes);
  } catch (error) {
    console.error('Error fetching dishes:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
