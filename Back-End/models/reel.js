// models/reel.js
const mongoose = require('mongoose');

const reelSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const Reel = mongoose.model('Reel', reelSchema);

module.exports = Reel;
