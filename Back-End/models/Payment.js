const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  }, // Reference to the User who made the payment

  amount: { 
    type: Number, 
    required: true 
  }, // Payment amount

  method: { 
    type: String, 
    required: true 
  }, // Payment method ('PayPal', 'Stripe', etc.)

  status: { 
    type: String, 
    default: 'completed' 
  }, // Payment status ('pending', 'completed', 'failed')

  transactionId: { 
    type: String, 
    required: true 
  }, // Transaction ID from the payment provider

  chefId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Chef', 
    required: true 
  } // Reference to the Chef associated with the payment
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Create the Payment model using the schema
const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
