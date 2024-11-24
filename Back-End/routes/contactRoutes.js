const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Create a new contact message
router.post('/', contactController.createContactMessage);

// Get all contact messages
router.get('/', contactController.getAllContactMessages);

// Get a contact message by ID
router.get('/:id', contactController.getContactMessageById);

// Update a contact message status
router.patch('/:id', contactController.updateContactMessageStatus);

module.exports = router;
