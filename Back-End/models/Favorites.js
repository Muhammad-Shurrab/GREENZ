const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const favoritesSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User who owns the favorites
    recipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }], // Array of Recipe IDs (references to Recipes)
    dishes: [{ type: Schema.Types.ObjectId, ref: 'Dish' }], // Array of Dish IDs (references to Dishes)
    createdAt: { type: Date, default: Date.now }, // Timestamp for favorites creation
    updatedAt: { type: Date, default: Date.now } // Timestamp for favorites update
  });
  
  // Create the Favorites model using the schema
  const Favorites = mongoose.model('Favorites', favoritesSchema);
  
  module.exports = Favorites;
  