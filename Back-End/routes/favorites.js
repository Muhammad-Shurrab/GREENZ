// const express = require('express');
// const router = express.Router();
// const Favorites = require('../models/Favorites');

// // Add recipe to favorites
// router.post('/users/:userId/favorites', async (req, res) => {
//   try {
//     const { recipeId } = req.body;
//     const { userId } = req.params;

//     let favorites = await Favorites.findOne({ userId });

//     if (!favorites) {
//       favorites = new Favorites({ userId, recipes: [recipeId] });
//     } else if (!favorites.recipes.includes(recipeId)) {
//       favorites.recipes.push(recipeId);
//     } else {
//       return res.status(400).json({ message: 'Recipe already in favorites' });
//     }

//     await favorites.save();
//     res.json(favorites);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Remove recipe from favorites
// router.delete('/users/:userId/favorites', async (req, res) => {
//   try {
//     const { recipeId } = req.body;
//     const { userId } = req.params;

//     const favorites = await Favorites.findOne({ userId });

//     if (favorites) {
//       favorites.recipes = favorites.recipes.filter(id => id.toString() !== recipeId);
//       await favorites.save();
//     } else {
//       return res.status(404).json({ message: 'Favorites not found for this user' });
//     }

//     res.json(favorites);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const Favorites = require('../models/Favorites');

// Add recipe to favorites
router.post('/users/:userId/favorites', async (req, res) => {
  try {
    const { userId, recipeId } = req.body;
    let favorites = await Favorites.findOne({ userId });

    if (!favorites) {
      favorites = new Favorites({ userId, recipes: [recipeId] });
    } else if (!favorites.recipes.includes(recipeId)) {
      favorites.recipes.push(recipeId);
    } else {
      return res.status(400).json({ message: 'Recipe already in favorites' });
    }

    await favorites.save();
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Remove recipe from favorites
router.delete('/users/:userId/favorites', async (req, res) => {
  try {
    const { userId, recipeId } = req.body;
    const favorites = await Favorites.findOne({ userId });

    if (favorites) {
      favorites.recipes = favorites.recipes.filter(id => id.toString() !== recipeId);
      await favorites.save();
    }

    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
