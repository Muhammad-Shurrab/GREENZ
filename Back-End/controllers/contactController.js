const ContactMessage = require('../models/ContactUs');

// Create a new contact message
exports.createContactMessage = async (req, res) => {
  try {
    const { userId, name, email, message } = req.body;
    const newMessage = new ContactMessage({ userId, name, email, message });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all contact messages
exports.getAllContactMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a contact message by ID
exports.getContactMessageById = async (req, res) => {
  try {
    const message = await ContactMessage.findById(req.params.id);
    if (!message) return res.status(404).json({ error: 'Message not found' });
    res.status(200).json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a contact message status
exports.updateContactMessageStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const message = await ContactMessage.findByIdAndUpdate(
      req.params.id,
      { status, updatedAt: Date.now() },
      { new: true }
    );
    if (!message) return res.status(404).json({ error: 'Message not found' });
    res.status(200).json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
