const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const notificationSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User who receives the notification
    type: { type: String, required: true }, // Notification type (e.g., 'order', 'message', 'alert')
    message: { type: String, required: true }, // Notification message content
    read: { type: Boolean, default: false }, // Status of the notification (read/unread)
    createdAt: { type: Date, default: Date.now }, // Timestamp for notification creation
    updatedAt: { type: Date, default: Date.now } // Timestamp for notification update
  });
  
  // Create the Notification model using the schema
  const Notification = mongoose.model('Notification', notificationSchema);
  
  module.exports = Notification;
  