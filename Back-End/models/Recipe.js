const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  chefId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Chef', 
    required: true 
  }, // Reference to the Chef (User)
  name: { 
    type: String, 
    required: true 
  }, // Name of the recipe
  category: { 
    type: String, 
    required: true 
  },
  ingredients: [{ 
    type: String, 
    required: true 
  }], // List of ingredients
  instructions: [{ 
    type: String, 
    required: true 
  }], // List of step-by-step instructions
  cookingTime: { 
    type: Number, 
    required: true 
  }, // Time required to cook in minutes
  cuisine: { 
    type: String 
  }, // Type of cuisine (e.g., Italian, Chinese)
  favorites: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  dietaryRestrictions: [{ 
    type: String 
  }], // Dietary restrictions (e.g., vegan, gluten-free)
  categories: [{ 
    type: String 
  }], // Recipe categories (e.g., dessert, main course)
  photos: [{ 
    type: String 
  }], // Array of URLs to recipe photos
  ratings: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Rating' 
  }], // Array of references to Rating documents
  reviews: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Review' 
  }], // Array of references to Review documents
  reports: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Report' 
  }], // Array of references to Report documents
  createdAt: { 
    type: Date, 
    default: Date.now 
  }, // Timestamp for recipe creation
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }, // Timestamp for recipe update
  isApproved: {
    type: Boolean, // Indicates whether something is approved
    default: false
  },
  nutrition: { // New nutrition field
    calories: {
      type: Number, // Total calories
      required: true
    },
    fat: {
      type: Number, // Total fat in grams
      required: true
    },
    protein: {
      type: Number, // Total protein in grams
      required: true
    },
    carbohydrates: {
      type: Number, // Total carbohydrates in grams
      required: true
    },
    fiber: {
      type: Number, // Total fiber in grams
      required: true
    },
    sugar: {
      type: Number, // Total sugar in grams
      required: true
    }
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
