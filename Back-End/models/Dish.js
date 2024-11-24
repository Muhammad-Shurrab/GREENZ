const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
  chefId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Chef', 
    required: true 
  }, // Reference to the Chef (User)
  category: { 
    type: String, 
    required: true 
  }, 
  name: { 
    type: String, 
    required: true 
  }, // Name of the dish
  description: { 
    type: String, 
    required: true 
  }, // Description of the dish
  price: { 
    type: Number, 
    required: true 
  }, // Price of the dish
  photos: [{ 
    type: String 
  }], // Array of URLs to dish photos
  availableQuantity: { 
    type: Number, 
    required: true 
  }, // Available quantity for sale
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
  }, // Timestamp for dish creation
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }, // Timestamp for dish update
  isApproved: {
    type: Boolean, // Indicates whether the dish is approved
    default: false
  },
  favorites: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  nutrition: {
    calories: { 
      type: Number, 
      required: true 
    }, // Caloric content of the dish
    protein: { 
      type: Number, 
      required: true 
    }, // Protein content (in grams)
    fat: { 
      type: Number, 
      required: true 
    }, // Fat content (in grams)
    carbohydrates: { 
      type: Number, 
      required: true 
    }, // Carbohydrate content (in grams)
    fiber: { 
      type: Number, 
      required: false 
    }, // Fiber content (in grams)
    sugar: { 
      type: Number, 
      required: false 
    }, // Sugar content (in grams)
    sodium: { 
      type: Number, 
      required: false 
    }  // Sodium content (in milligrams)
  }
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
