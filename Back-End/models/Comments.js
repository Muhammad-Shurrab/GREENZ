const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  }, // Reference to the User who wrote the comment
  type: { 
    type: String, 
    required: true, 
    enum: ['recipe', 'dish'] // To specify if the comment is for a recipe or dish
  },
  targetId: { 
    type: Schema.Types.ObjectId, 
    required: true // Reference to either Recipe or Dish
  },
  comment: { 
    type: String, 
    required: true 
  }, // Comment text
  replies: [{
    userId: { 
      type: Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },
    reply: { 
      type: String, 
      required: true 
    },
    createdAt: { 
      type: Date, 
      default: Date.now 
    }
  }], // Replies to the comment
  createdAt: { 
    type: Date, 
    default: Date.now 
  }, // Timestamp for comment creation
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }, // Timestamp for comment update
  isDeleted: {
    type: Boolean, // Indicates whether something is approved
    default: false
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
