// const mongoose = require('mongoose');
// const connectDB = require('../config/db'); // Ensure this file correctly exports a function to connect to MongoDB

// const Chef = require('../models/Chef'); // Import the correct Chef model

// const chefs = [
//   {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     password: 'password123', // Ensure you hash the password in a real application
//     specialties: ['Italian', 'French'],
//     experience: 10,
//     profilePicture: 'https://example.com/images/john_doe.jpg',
//   },
//   {
//     name: 'Jane Smith',
//     email: 'jane.smith@example.com',
//     password: 'password456', // Ensure you hash the password in a real application
//     specialties: ['Mexican', 'Japanese'],
//     experience: 8,
//     profilePicture: 'https://example.com/images/jane_smith.jpg',
//   },
//   {
//     name: 'Alice Johnson',
//     email: 'alice.johnson@example.com',
//     password: 'password789', // Ensure you hash the password in a real application
//     specialties: ['Vegan', 'Mediterranean'],
//     experience: 5,
//     profilePicture: 'https://example.com/images/alice_johnson.jpg',
//   },
//   // Add more sample chefs as needed
// ];

// const seedChefs = async () => {
//   try {
//     await connectDB(); // Connect to the database
//     console.log('Database connection established');
    
//     await Chef.deleteMany({}); // Clear existing chefs
//     console.log('Existing chefs cleared');

//     const docs = await Chef.insertMany(chefs); // Insert sample chefs
//     console.log('Sample chefs inserted:', docs);

//     await mongoose.connection.close(); // Close connection after seeding
//     console.log('Database connection closed');
//   } catch (error) {
//     console.error('Error:', error);
//     await mongoose.connection.close(); // Close connection on error
//   }
// };

// seedChefs();



const mongoose = require('mongoose');
const connectDB = require('../config/db'); // Adjust the path to your database connection file

const Chef = require('../models/Chef'); // Adjust the path to your Chef model

// Sample data for chefs
const chefs = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'hashedpassword1', // In a real scenario, ensure you hash passwords
    specialties: ['Italian', 'French'],
    experience: 10,
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgAj4Xfohc6iX0o0lxMX_cpnO_tyUncJyEZg&s',
    isApproved: true,
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    password: 'hashedpassword2', // In a real scenario, ensure you hash passwords
    specialties: ['Mexican', 'Asian'],
    experience: 7,
    profilePicture: 'https://chefaramreed.com/wp-content/uploads/aram-standing-home.jpg',
    isApproved: true,
  },
  {
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    password: 'hashedpassword3', // In a real scenario, ensure you hash passwords
    specialties: ['Vegetarian', 'Vegan'],
    experience: 5,
    profilePicture: 'https://media.istockphoto.com/id/1300835557/photo/smiling-male-cook-on-gray-background.jpg?s=612x612&w=0&k=20&c=3ie8X4mxTkPmgVXqlNIZxE2yyaxVb5R0H-5hnTCzLgI=',
    isApproved: false,
  },
  {
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    password: 'hashedpassword4', // In a real scenario, ensure you hash passwords
    specialties: ['Baking', 'Pastries'],
    experience: 12,
    profilePicture: 'https://cookingenie.com/content/wp-content/uploads/2021/10/Hiring-a-Personal-Chef.jpg',
    isApproved: true,
  },
  {
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    password: 'hashedpassword5', // In a real scenario, ensure you hash passwords
    specialties: ['BBQ', 'Grilling'],
    experience: 8,
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYmUQQDySHnfdTzoWhfBbwmecucZAsLT_cLw&s',
    isApproved: true,
  },
  {
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    password: 'hashedpassword6', // In a real scenario, ensure you hash passwords
    specialties: ['Seafood', 'Mediterranean'],
    experience: 6,
    profilePicture: 'https://www.shutterstock.com/image-photo/young-male-chef-isolated-on-600nw-710598367.jpg',
    isApproved: false,
  },
  {
    name: 'Sophia Martinez',
    email: 'sophia.martinez@example.com',
    password: 'hashedpassword7', // In a real scenario, ensure you hash passwords
    specialties: ['Fusion', 'Healthy'],
    experience: 4,
    profilePicture: 'https://www.ecpi.edu/sites/default/files/chef_9.png',
    isApproved: true,
  },
  {
    name: 'James Lee',
    email: 'james.lee@example.com',
    password: 'hashedpassword8', // In a real scenario, ensure you hash passwords
    specialties: ['Barbecue', 'Steak'],
    experience: 9,
    profilePicture: 'https://chacepeople.com/storage/images/contents/blog/27/1667898337_o-resizer-1-.jpeg',
    isApproved: true,
  },
  {
    name: 'Olivia Garcia',
    email: 'olivia.garcia@example.com',
    password: 'hashedpassword9', // In a real scenario, ensure you hash passwords
    specialties: ['Pasta', 'Seafood'],
    experience: 11,
    profilePicture: 'https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885_640.jpg',
    isApproved: true,
  },
  {
    name: 'Ethan Thompson',
    email: 'ethan.thompson@example.com',
    password: 'hashedpassword10', // In a real scenario, ensure you hash passwords
    specialties: ['Asian Fusion', 'Sushi'],
    experience: 3,
    profilePicture: 'https://as1.ftcdn.net/v2/jpg/03/57/89/06/1000_F_357890671_RACOSXE9vqq46UYeb0xhceZQ4HDdbkMs.jpg',
    isApproved: false,
  },
  {
    name: 'Ava White',
    email: 'ava.white@example.com',
    password: 'hashedpassword11', // In a real scenario, ensure you hash passwords
    specialties: ['Desserts', 'Pastries'],
    experience: 6,
    profilePicture: 'https://onlychefs.co.uk/wp-content/uploads/2015/12/Becoming-a-Personal-Chef-1024x535.png',
    isApproved: true,
  },
];

const seedChefs = async () => {
  try {
    await connectDB(); // Connect to the database
    console.log('Database connection established');

    await Chef.deleteMany({}); // Clear existing chefs
    console.log('Cleared existing chefs');

    // Create chefs
    const docs = await Chef.insertMany(chefs);
    console.log('Sample chefs inserted:', docs);

    await mongoose.connection.close(); // Close connection after seeding
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    await mongoose.connection.close(); // Close connection on error
  }
};

seedChefs();
