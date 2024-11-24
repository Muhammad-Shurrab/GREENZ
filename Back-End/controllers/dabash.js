// const Chef = require('../models/Chef');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// exports.register = async (req, res) => {
//   const { name, email, password, specialties, experience } = req.body;

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newChef = new Chef({
//       name,
//       email,
//       password: hashedPassword,
//       specialties,
//       experience,
//     });

//     await newChef.save();
//     res.status(201).json({ message: 'Chef registered' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// }; 

// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'your-email@gmail.com',
//     pass: 'your-email-password'
//   }
// });

// exports.register = async (req, res) => {
//   const { name, email, password, specialties, experience } = req.body;

//   try {
//     // Check if email already exists
//     const existingChef = await Chef.findOne({ email });
//     if (existingChef) {
//       return res.status(400).json({ error: 'Email already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newChef = new Chef({
//       name,
//       email,
//       password: hashedPassword,
//       specialties,
//       experience,
//     });

//     await newChef.save();

//     // Send confirmation email
//     const mailOptions = {
//       from: 'areejabumahfouz@gmail.com',
//       to: email,
//       subject: 'Registration Successful',
//       text: `Hello ${name},\n\nThank you for registering as a chef.\n\nBest regards,\nThe Team`
//     };

//     await transporter.sendMail(mailOptions);

//     res.status(201).json({ message: 'Chef registered and email sent' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// const nodemailer = require('nodemailer');
// const bcrypt = require('bcryptjs');
// const Chef = require('../models/Chef'); // Ensure this path is correct

// // Set up the Nodemailer transport
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER, // Use environment variable for email
//     pass: process.env.EMAIL_PASS  // Use environment variable for password
//   }
// });

// exports.register = async (req, res) => {
//   const { name, email, password, specialties, experience } = req.body;

//   try {
//     // Check if email already exists
//     const existingChef = await Chef.findOne({ email });
//     if (existingChef) {
//       return res.status(400).json({ error: 'Email already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new Chef instance
//     const newChef = new Chef({
//       name,
//       email,
//       password: hashedPassword,
//       specialties,
//       experience,
//     });

//     // Save the new Chef to the database
//     await newChef.save();

//     // Prepare the email options
//     const mailOptions = {
//       from: process.env.EMAIL_USER, // Use environment variable for sender email
//       to: email,
//       subject: 'Registration Successful',
//       text: `Hello ${name},\n\nThank you for registering as a chef.\n\nBest regards,\nThe Team`
//     };

//     // Send the email
//     await transporter.sendMail(mailOptions);

//     // Respond with success
//     res.status(201).json({ message: 'Chef registered and email sent' });
//   } catch (err) {
//     // Handle errors and respond with error message
//     console.error('Error registering chef or sending email:', err);
//     res.status(500).json({ error: err.message });
//   }
// };


const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const Chef = require('../models/Chef'); // Ensure this path is correct
require('dotenv').config();

// Set up the Nodemailer transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Use environment variable for email
    pass: process.env.EMAIL_PASS  // Use environment variable for password
  }
});

exports.register = async (req, res) => {
  const { name, email, password, specialties, experience } = req.body;

  try {
    // Check if email already exists
    const existingChef = await Chef.findOne({ email });
    if (existingChef) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new Chef instance
    const newChef = new Chef({
      name,
      email,
      password: hashedPassword,
      specialties,
      experience,
    });

    // Save the new Chef to the database
    await newChef.save();

    // Prepare the email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Use environment variable for sender email
      to: email,
      subject: 'Registration Successful',
      text: `Hello ${name},\n\nThank you for registering as a chef.\n\nBest regards,\nThe Team`
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with success
    res.status(201).json({ message: 'Chef registered and email sent' });
  } catch (err) {
    // Handle errors and respond with error message
    console.error('Error registering chef or sending email:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
