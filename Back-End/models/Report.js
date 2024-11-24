const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reportSchema = new Schema({
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  }, // Reference to the User who made the report
  type: { 
    type: String, 
    required: true, 
    enum: ['recipe', 'dish'] // To specify if the report is for a recipe or dish
  },
  targetId: { 
    type: Schema.Types.ObjectId, 
    required: true // Reference to either Recipe or Dish
  },
  reason: { 
    type: String, 
    required: true 
  }, // Reason for reporting
  createdAt: { 
    type: Date, 
    default: Date.now 
  }, // Timestamp for report creation
  updatedAt: { 
    type: Date, 
    default: Date.now 
  },// Timestamp for report update
  isDeleted: {
    type: Boolean, // Indicates whether something is approved
    default: false
  }
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
