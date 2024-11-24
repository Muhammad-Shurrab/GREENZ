const express = require('express');
const router = express.Router();
const Chef = require('../models/Chef'); // Adjust the path as necessary

// Route to fetch all chefs
router.get('/chefs', async (req, res) => {
  try {
    const chefs = await Chef.find().exec();
    res.json(chefs);
  } catch (error) {
    console.error('Error fetching chefs:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
