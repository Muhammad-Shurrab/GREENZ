// exports.getUserProfile = async (req, res) => {
//   try {
//     const userId = req.user;
//     const user = await User.findById(userId)
//       .select("-password -otp -otpExpiry")
//       .populate("savedRecipes")
//       .populate({
//         path: "orderHistory",
//         match: { status: "completed" },
//         populate: {
//           path: "dishes.dish",
//           model: "Dish",
//         },
//       });

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// exports.updateUserProfile = async (req, res) => {
//   try {
//     const userId = req.user;
//     const { name, email, bio, profilePicture } = req.body;

//     const user = await User.findByIdAndUpdate(
//       userId,
//       { name, email, bio, profilePicture },
//       { new: true, runValidators: true }
//     ).select("-password -otp -otpExpiry");

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// exports.removeSavedRecipe = async (req, res) => {
//   try {
//     const userId = req.user;
//     const { recipeId } = req.params;

//     const user = await User.findByIdAndUpdate(
//       userId,
//       { $pull: { savedRecipes: recipeId } },
//       { new: true }
//     ).select("savedRecipes");

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.json(user.savedRecipes);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// exports.removeOrderHistory = async (req, res) => {
//   try {
//     const userId = req.user;
//     const { orderId } = req.params;

//     const user = await User.findByIdAndUpdate(
//       userId,
//       { $pull: { orderHistory: orderId } },
//       { new: true }
//     ).select("orderHistory");

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.json(user.orderHistory);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };
