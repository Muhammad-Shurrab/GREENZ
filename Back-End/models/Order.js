const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  }, // Reference to the User who placed the order

  chefId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Chef', // Ensure this matches your Chef model name
    required: true 
  }, // Reference to the Chef who owns the dish

  dishId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Dish', 
    required: true 
  }, // Reference to the ordered dish

  quantity: { 
    type: Number, 
    required: true 
  }, // Quantity of the dish ordered

  totalPrice: { 
    type: Number, 
    required: true 
  }, // Total price for the order

  status: { 
    type: String, 
    required: true, 
    enum: ['completed', 'pending'], // Restrict status values
    default: 'pending' // Optional: set a default value if needed
  },

  deliveryDetails: { // Delivery details object
    address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zip: { type: String },
      country: { type: String }
    },
    contactNumber: { type: String },
    deliveryOption: { 
      type: String,
      enum: ['delivery', 'pickup'] // Restrict delivery options
    }
  }
}, {
  timestamps: true // Automatically manage `createdAt` and `updatedAt`
});

// Create the Order model using the schema
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
