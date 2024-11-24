// const mongoose = require('mongoose');
// const connectDB = require('../config/db'); // Adjust path if necessary
// const Reel = require('../models/reel'); // Adjust path if necessary

// const seedReels = async () => {
//   try {
//     // Connect to database
//     await connectDB();

//     // Clear existing data
//     await Reel.deleteMany({});

//     // Sample data
//     const reels = [
//       { title: 'Healthy Smoothie Recipe', url: 'https://www.youtube.com/shorts/RS-nrbwkfUI?feature=share' },
//       { title: 'Vegan Salad Bowl', url: 'https://www.youtube.com/shorts/Cby6l41RdbI?feature=share' },
//       { title: 'Quinoa and Veggie Stir Fry', url: 'https://www.youtube.com/shorts/gcqyapUVUsM?feature=share' },
//     ];

//     // Insert sample data
//     await Reel.insertMany(reels);
//     console.log('Database seeded successfully');
//   } catch (error) {
//     console.error('Error seeding database:', error);
//   } finally {
//     mongoose.connection.close();
//   }
// };

// seedReels();





const mongoose = require('mongoose');
const connectDB = require('../config/db'); // Adjust path if necessary
const Reel = require('../models/reel'); // Adjust path if necessary

const seedReels = async () => {
  try {
    // Connect to database
    await connectDB();

    // Clear existing data
    await Reel.deleteMany({});

    // Sample data with 20 videos
    const reels = [
      { title: 'Healthy Smoothie Recipe', url: 'https://www.youtube.com/shorts/RS-nrbwkfUI?feature=share' },
      { title: 'Vegan Salad Bowl', url: 'https://www.youtube.com/shorts/M7s6kyxm54E?feature=share' },
      { title: 'Quinoa and Veggie Stir Fry', url: 'https://www.youtube.com/shorts/gcqyapUVUsM?feature=share' },
      { title: 'Avocado Toast with Egg', url: 'https://www.youtube.com/shorts/gR8PtEBkrIQ?feature=share' },
      { title: 'Healthy Breakfast Bowl', url: 'https://www.youtube.com/shorts/qZyCXizKApA?feature=share' },
      { title: 'Low-Calorie Pasta', url: 'https://www.youtube.com/shorts/6FlZbWsbREQ?feature=share' },
      { title: 'Grilled Chicken Salad', url: 'https://www.youtube.com/shorts/uAXb5pWD5WI?feature=share' },
      { title: 'Baked Sweet Potato Fries', url: 'https://www.youtube.com/shorts/zmnYUUfPbq4?feature=share' },
      { title: 'Homemade Granola Bars', url: 'https://www.youtube.com/shorts/5TwJnfjp9KA?feature=share' },
      { title: 'Greek Yogurt Parfait', url: 'https://www.youtube.com/shorts/Fe92Xpi1FhI?feature=share' },
      { title: 'Stuffed Bell Peppers', url: 'https://www.youtube.com/shorts/nMS_24mmp7I?feature=share' },
      { title: 'Vegetable Stir-Fry', url: 'https://www.youtube.com/shorts/B6XX3y5VDQE?feature=share' },
      { title: 'Zucchini Noodles', url: 'https://www.youtube.com/shorts/70ZlMx794ZI?feature=share' },
      { title: 'Cauliflower Pizza Crust', url: 'https://www.youtube.com/shorts/42ld_orG_NQ?feature=share' },
      { title: 'Baked Salmon Recipe', url: 'https://www.youtube.com/shorts/MVHlEgPMUyc?feature=share' },
      { title: 'Chia Seed Pudding', url: 'https://www.youtube.com/shorts/OndOP2PRIaE?feature=share' },
      { title: 'Oven-Roasted Vegetables', url: 'https://www.youtube.com/shorts/aWeHckhduso?feature=share' },
      { title: 'Green Detox Juice', url: 'https://www.youtube.com/shorts/QR8_MKdDKS0?feature=share' },
      { title: 'Healthy Energy Balls', url: 'https://www.youtube.com/shorts/G_N9_MK8BxU?feature=share' },
      { title: 'Tomato Basil Soup', url: 'https://www.youtube.com/shorts/IBYLQmqP_es?feature=share' },
    ];

    // Insert sample data
    await Reel.insertMany(reels);
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedReels();
