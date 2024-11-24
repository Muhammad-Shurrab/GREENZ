// // routes/recipes.js

// const express = require('express');
// const router = express.Router();
// const Recipe = require('../models/Recipe'); // Adjust path if necessary

// // GET /api/recipes
// router.get('/', async (req, res) => {
//   try {
//     const recipes = await Recipe.find({ isApproved: true }); // Fetch only approved recipes
//     res.json(recipes);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe'); // Adjust path if necessary
const Rating = require('../models/Rating'); // Adjust path if necessary

// Route to get all recipes with average ratings
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.aggregate([
      {
        $lookup: {
          from: 'ratings',  // Make sure this matches the collection name
          localField: '_id',
          foreignField: 'targetId',
          as: 'ratings'
        }
      },
      {
        $addFields: {
          averageRating: {
            $cond: {
              if: { $gt: [{ $size: '$ratings' }, 0] },
              then: {
                $divide: [
                  { $sum: '$ratings.rating' },
                  { $size: '$ratings' }
                ]
              },
              else: 0
            }
          }
        }
      }
    ]).exec();
    res.json(recipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
