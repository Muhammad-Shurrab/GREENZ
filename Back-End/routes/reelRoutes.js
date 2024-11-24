// routes/reelRoutes.js
const express = require('express');
const { getReels, addReel } = require('../controllers/reelController');

const router = express.Router();

router.get('/', getReels);
router.post('/', addReel);

module.exports = router;
