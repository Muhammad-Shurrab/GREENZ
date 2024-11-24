const Comment = require('../models/Comments');

// Get comments for a specific recipe or dish
exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ type: req.params.type, targetId: req.params.targetId })
                                  .populate('userId', 'name') // Populate with user names
                                  .populate('replies.userId', 'name');
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching comments' });
  }
};

// Post a new comment
exports.postComment = async (req, res) => {
  const { userId, type, targetId, comment } = req.body;

  try {
    const newComment = new Comment({ userId, type, targetId, comment });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: 'Error posting comment' });
  }
};

// Post a reply to a comment
exports.postReply = async (req, res) => {
  const { userId, reply } = req.body;

  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    comment.replies.push({ userId, reply });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Error posting reply' });
  }
};
