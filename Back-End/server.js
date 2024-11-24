// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const path = require('path');
// const userRoutes = require('./routes/userRoutes'); // Adjust path if necessary
// const paymentRoutes = require('./routes/paymentRoutes'); // Adjust path if necessary
// const routes= require('./routes/routes'); // Adjust path if necessary
// // const chefRoutes = require('./routes/routes'); // Adjust path if necessary
// const recipeRoutes = require('./routes/recipeRoutes');
// const commentRoutes = require('./routes/commentRoutes');
// const contactRoutes = require('./routes/contactRoutes');

// dotenv.config();
// const session = require("express-session");
// const passport = require("./config/passport");
// const connectDB = require("./config/db");
// // const userRoutes = require("./routes/userRoutes");
// // const path = require("path");

// // Connect to MongoDB
// connectDB(process.env.MONGO_URL);

// // Initialize app
// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Setup session
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET || `#%pkvn@Pl%C,x2-T)>d"_5M-}ZPp?C`,
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// // Setup Passport
// app.use(passport.initialize());
// app.use(passport.session());

// // API routes
// app.use("/api", userRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/payments/stripe', paymentRoutes);
// app.use('/api', routes);
// // app.use('/api', chefRoutes);
// app.use('/api/recipes', recipeRoutes);
// app.use('/api/comments', commentRoutes);
// app.use('/api/contact', contactRoutes);

// // Serve frontend in production
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "frontend/build")));
//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
//   );
// }

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const jwtDecode = require('jwt-decode'); // This should work fine with CommonJS
// const cookie = require('cookie');
const { getUserIdFromToken } = require("./routes/authUtils"); // Adjust the path as needed

const path = require("path");
const userRoutes = require("./routes/userRoutes");
// const paymentRoutes = require('./routes/paymentRoutes');
const routes = require("./routes/routes");
const recipeRoutes = require("./routes/recipeRoutes");
const commentRoutes = require("./routes/commentRoutes");
const contactRoutes = require("./routes/contactRoutes");
const session = require("express-session");
const passport = require("./config/passport");
const connectDB = require("./config/db");
const reelRoutes = require("./routes/reelRoutes");
const disheCatRoutesHomePgae = require("./routes/dishesCat"); // Adjust the path as necessary
const chefHomeRoutes = require("./routes/chefsHome"); // Adjust the path as necessary
const dishRoutesHome = require("./routes/dishesHome"); // Adjust path if necessary
const recipesRoute = require("./routes/recipesHome"); // Adjust path if necessary
const favoritesRoutes = require("./routes/favorites");
const ratingsRoutes = require("./routes/ratings");

// Load environment variables

// Connect to MongoDB
connectDB(process.env.MONGO_URL);

// Initialize app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Setup session
app.use(
  session({
    secret: process.env.SESSION_SECRET || `#%pkvn@Pl%C,x2-T)>d"_5M-}ZPp?C`,
    resave: false,
    saveUninitialized: true,
  })
);

// Setup Passport
app.use(passport.initialize());
app.use(passport.session());

const authRoutes = require("./routes/authRoutesDabash");

app.use("/api/auth", authRoutes);
// API routes
app.use("/api/users", userRoutes);
app.use("/api/recipes", recipesRoute);
app.use("/api", favoritesRoutes);
app.use("/api", ratingsRoutes);
// app.use('/api/payments/stripe', paymentRoutes); ~
app.use("/api", routes);
app.use("/api/dishes", dishRoutesHome); // Use the dish routes for /api/dishes
app.use("/api/recipes", recipeRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/reels", reelRoutes);
app.use("/api/dishCat", disheCatRoutesHomePgae);
app.use("/api", chefHomeRoutes); // Adjust the path if necessary
app.get("/some-route", (req, res) => {
  const userId = getUserIdFromToken(req.headers.cookie);

  if (userId) {
    res.send(`User ID is ${userId}`);
  } else {
    res.status(401).send("Unauthorized");
  }
});
// Serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
}

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
