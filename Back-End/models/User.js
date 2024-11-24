// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// // User Schema
// const userSchema = new Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     match: [/.+@.+\..+/, 'Please enter a valid email address'] // Email validation
//   },
//   password: {
//     type: String,
//     required: function () {
//       return !this.googleId; // Only require password if googleId is not present
//     },
//     minlength: 6 // Example validation for password length

//   },
//   isActive: {
//     type: Boolean,
//     default: true // Default value
//   },
//   profileImage: {
//     type: String // URL to user's profile image
//   },
//   address: { // Address object for users (mainly for chefs)
//     street: { type: String },
//     city: { type: String },
//     state: { type: String },
//     zip: { type: String },
//     country: { type: String }
//   },
//   contactNumber: {
//     type: String
//   },
//   googleId: {
//     type: String // Optional field for Google login
//   },
//   businessDetails: { // Additional business details for chefs
//     paymentInfo: {
//       bankName: { type: String },
//       accountNumber: { type: String },
//       routingNumber: { type: String },
//       paypalId: { type: String }
//     },
//     deliveryOptions: {
//       type: String,
//       enum: ['delivery', 'pickup'] // Enumeration for delivery options
//     }
//   }
// }, {
//   timestamps: true // Automatically manage `createdAt` and `updatedAt`
// });

// // Create the User model using the schema
// const User = mongoose.model('User', userSchema, 'Users');

// module.exports = User;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid email address"], // Email validation
    },
    password: {
      type: String,
      required: function () {
        return !this.googleId; // Only require password if googleId is not present
      },
      minlength: 6, // Example validation for password length
    },
    isActive: {
      type: Boolean,
      default: true, // Default value
    },
    profileImage: {
      type: String, // URL to user's profile image
    },
    address: {
      // Address object for users (mainly for chefs)
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zip: { type: String },
      country: { type: String },
    },
    contactNumber: {
      type: String,
    },
    googleId: {
      type: String, // Optional field for Google login
    },
    businessDetails: {
      // Additional business details for chefs
      paymentInfo: {
        bankName: { type: String },
        accountNumber: { type: String },
        routingNumber: { type: String },
        paypalId: { type: String },
      },
      deliveryOptions: {
        type: String,
        enum: ["delivery", "pickup"], // Enumeration for delivery options
      },
    },
    purchasedDishes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Dish",
      },
    ], // Array of references to purchased dishes
  },
  {
    timestamps: true, // Automatically manage `createdAt` and `updatedAt`
  }
);

// Create the User model using the schema
const User = mongoose.model("User", userSchema, "Users");

module.exports = User;
