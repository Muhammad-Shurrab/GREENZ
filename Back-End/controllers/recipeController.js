// const Recipe = require('../models/Recipe');

// // Get all recipes with optional filtering
// exports.getRecipes = async (req, res) => {
//   try {
//     const { name, category, cuisine, dietaryRestrictions } = req.query;

//     const filters = {};
//     if (name) filters.name = { $regex: name, $options: 'i' };
//     if (category) filters.category = category;
//     if (cuisine) filters.cuisine = cuisine;
//     if (dietaryRestrictions) filters.dietaryRestrictions = { $in: dietaryRestrictions.split(',') };

//     const recipes = await Recipe.find(filters);
//     res.json(recipes);  // All fields including `photos` are returned by default
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // Get a single recipe by ID
// exports.getRecipeById = async (req, res) => {
//   try {
//     const recipe = await Recipe.findById(req.params.id);
//     if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
//     res.json(recipe);  // All fields including `photos` are returned by default
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // Create a new recipe
// exports.createRecipe = async (req, res) => {
//   const { chefId, name, category, ingredients, instructions, cookingTime, cuisine, dietaryRestrictions, categories, photos } = req.body;
//   try {
//     const newRecipe = new Recipe({
//       chefId, name, category, ingredients, instructions, cookingTime, cuisine, dietaryRestrictions, categories, photos
//     });
//     await newRecipe.save();
//     res.status(201).json(newRecipe);  // All fields including `photos` are returned
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // Update a recipe by ID
// exports.updateRecipe = async (req, res) => {
//   try {
//     const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedRecipe) return res.status(404).json({ message: 'Recipe not found' });
//     res.json(updatedRecipe);  // All fields including `photos` are returned by default
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // Delete a recipe by ID
// exports.deleteRecipe = async (req, res) => {
//   try {
//     const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
//     if (!deletedRecipe) return res.status(404).json({ message: 'Recipe not found' });
//     res.json({ message: 'Recipe deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

const Recipe = require("../models/Recipe");

// Get all recipes with optional filtering by category
// exports.getRecipes = async (req, res) => {
//   try {
//     const { category } = req.query;
//     const filters = {};

//     if (category) filters.category = category;

//     const recipes = await Recipe.find(filters);
//     res.json(recipes);  // All fields including `photos` are returned by default
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// Get all recipes with optional filtering by category, etc.
// exports.getRecipes = async (req, res) => {
//   try {
//     const { name, category, cuisine, dietaryRestrictions } = req.query;
//     const filters = {};

//     if (name) filters.name = { $regex: name, $options: 'i' };
//     if (category) filters.category = category;
//     if (cuisine) filters.cuisine = cuisine;
//     if (dietaryRestrictions) filters.dietaryRestrictions = { $in: dietaryRestrictions.split(',') };

//     const recipes = await Recipe.find(filters);
//     res.json(recipes);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

exports.getRecipes = async (req, res) => {
  try {
    const { category } = req.query;
    const filters = {};

    if (category && category !== "All") {
      filters.category = category;
    }

    const recipes = await Recipe.find(filters);
    res.json(recipes); // All fields including `photos` are returned by default
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single recipe by ID
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.json(recipe); // All fields including `photos` are returned by default
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new recipe
exports.createRecipe = async (req, res) => {
  const {
    chefId,
    name,
    category,
    ingredients,
    instructions,
    cookingTime,
    cuisine,
    dietaryRestrictions,
    categories,
    photos,
  } = req.body;
  try {
    const newRecipe = new Recipe({
      chefId,
      name,
      category,
      ingredients,
      instructions,
      cookingTime,
      cuisine,
      dietaryRestrictions,
      categories,
      photos,
    });
    await newRecipe.save();
    res.status(201).json(newRecipe); // All fields including `photos` are returned
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a recipe by ID
exports.updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedRecipe)
      return res.status(404).json({ message: "Recipe not found" });
    res.json(updatedRecipe); // All fields including `photos` are returned by default
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a recipe by ID
exports.deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe)
      return res.status(404).json({ message: "Recipe not found" });
    res.json({ message: "Recipe deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
