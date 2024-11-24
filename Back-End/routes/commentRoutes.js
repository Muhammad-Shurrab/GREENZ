// routes/commentRoutes.js
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Get comments for a specific recipe or dish
router.get('/:type/:targetId', commentController.getComments);

// Post a new comment
router.post('/', commentController.postComment);

// Post a reply to a comment
router.post('/:commentId/replies', commentController.postReply);

module.exports = router;
