// controllers/reelController.js
const Reel = require('../models/reel');

const getReels = async (req, res) => {
  try {
    const reels = await Reel.find();
    res.json(reels);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reels' });
  }
};

const addReel = async (req, res) => {
  try {
    const newReel = new Reel(req.body);
    await newReel.save();
    res.status(201).json(newReel);
  } catch (error) {
    res.status(400).json({ message: 'Error adding reel' });
  }
};

module.exports = { getReels, addReel };
