const express = require('express');
const router = express.Router();
const Rating = require('../models/Rating');
const Recipe = require('../models/Recipe');

// Add a rating to a recipe
router.post('/ratings', async (req, res) => {
  try {
    const { userId, targetId, rating } = req.body;

    if (rating < 1 || rating > 5) {
      return res.status(400).json({ message: 'Rating must be between 1 and 5' });
    }

    const newRating = new Rating({ userId, type: 'recipe', targetId, rating });
    await newRating.save();

    // Update Recipe's ratings
    const recipe = await Recipe.findById(targetId);
    recipe.ratings.push(newRating._id);
    await recipe.save();

    res.json(newRating);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
