// // const User = require("../models/User");
// // const bcrypt = require("bcryptjs");
// // const jwt = require("jsonwebtoken");

// // exports.register = async (req, res) => {
// //   const { name, email, password, specialties, experience } = req.body;

// //   try {
// //     const hashedPassword = await bcrypt.hash(password, 10);
// //     const newUser = new User({
// //       name,
// //       email,
// //       password: hashedPassword,
// //       specialties,
// //       experience,
// //     });

// //     await newUser.save();
// //     res.status(201).json({ message: "User registered" });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };

// // exports.login = async (req, res) => {
// //   const { email, password } = req.body;

// //   try {
// //     const user = await User.findOne({ email });

// //     if (!user) return res.status(400).json({ message: "Invalid credentials" });

// //     const isMatch = await bcrypt.compare(password, user.password);

// //     if (!isMatch)
// //       return res.status(400).json({ message: "Invalid credentials" });

// //     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
// //       expiresIn: "1h",
// //     });

// //     res.json({ token });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };

// const User = require("../models/User");
// const bcrypt = require("bcryptjs");

// // Google Authentication Controller
// const googleAuth = (req, res) => {
//   res.send("Google authentication successful");
// };

// // User Registration Controller
// const registerUser = async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     // Check if user already exists
//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // Create a new user
//     user = new User({
//       name,
//       email,
//       password: await bcrypt.hash(password, 10),
//     });

//     await user.save();
//     res.status(201).json({ message: "User registered successfully" });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error");
//   }
// };

// module.exports = {
//   googleAuth,
//   registerUser,
// };

const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Google Authentication Controller
const googleAuth = (req, res) => {
  res.send("Google authentication successful");
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json(token);
};

// User Registration Controller
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    user = new User({
      name,
      email,
      password: await bcrypt.hash(password, 10),
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const logIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json(token);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// profil;e
// Assuming you have imported the User model at the top of the file
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id); // Find user by ID from the route
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({
      user, // Include other related data as needed
      savedRecipes: [], // Placeholder, fetch this from your DB if needed
      recentlyViewed: [],
      purchasedDishes: [],
      orderHistory: [],
      reviews: [],
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  const { name, email, password, address, phoneNumber, profileImage } =
    req.body;
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.password = password || user.password;
    user.address = address || user.address;
    user.contactNumber = phoneNumber || user.contactNumber;
    user.profileImage = profileImage || user.profileImage;

    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Orders
const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId })
      .populate("dishId")
      .populate("chefId");

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};

// controllers/favoritesController.js
const Favorites = require("../models/Favorites");

const getUserFavorites = async (req, res) => {
  try {
    const favorites = await Favorites.findOne({
      userId: req.params.userId,
    }).populate("dishes");

    if (!favorites) {
      return res.status(404).json({ message: "Favorites not found" });
    }
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch favorites" });
  }
};

module.exports = {
  googleAuth,
  registerUser,
  logIn,
  getUser,
  updateUser,
  getUserOrders,
  getUserFavorites,
};

///
