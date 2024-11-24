const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  }, // Reference to the User who made the rating
  type: { 
    type: String, 
    required: true, 
    enum: ['recipe', 'dish'] // To specify if the rating is for a recipe or dish
  },
  targetId: { 
    type: Schema.Types.ObjectId, 
    required: true // Reference to either Recipe or Dish
  },
  rating: { 
    type: Number, 
    required: true, 
    min: 1, 
    max: 5 
  }, // Rating value (1-5)
  createdAt: { 
    type: Date, 
    default: Date.now 
  }, // Timestamp for rating creation
  updatedAt: { 
    type: Date, 
    default: Date.now 
  } // Timestamp for rating update
});

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;
