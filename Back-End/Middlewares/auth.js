const jwt = require("jsonwebtoken");
const Chef = require("../models/Chef");

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token; // Ensure token is being set in cookies

  if (!token) {
    console.log("No token provided");
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded || !decoded.id) {
      console.log("Token decoding failed or ID not found in token", decoded);
      return res.status(401).json({ message: "Invalid token" });
    }

    req.user = await Chef.findById(decoded.id);

    if (!req.user) {
      console.log("User not found with ID:", decoded.id);
      return res.status(401).json({ message: "User not found" });
    }

    next();
  } catch (err) {
    console.error("Authentication error:", err);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = authMiddleware;
