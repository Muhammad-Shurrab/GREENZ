import React, { useEffect, useState } from 'react';

const CommentSection = ({
  comments,
  handleCommentSubmit,
  handleReplySubmit,
  newComment,
  setNewComment,
  newReply,
  setNewReply
}) => {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    // Retrieve user_id from local storage
    const storedUserId = localStorage.getItem('user_id');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  return (
    <div>
      <h3 className="text-xl font-semibold mb-2 text-green">Comments</h3>
      <div className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full p-2 border rounded-md"
        />
        <button
          onClick={handleCommentSubmit}
          className="mt-2 px-4 py-2 bg-green text-white rounded-md hover:bg-yellow"
        >
          Submit
        </button>
      </div>
      <div>
        {comments.map(comment => (
          <div key={comment._id} className="mb-4 p-4 border rounded-md shadow-sm">
            <p className="text-yellow mb-2">
              <strong>{comment.userId.name}</strong> {comment.createdAt}
            </p>
            <p className="text-gray mb-2">{comment.comment}</p>
            <div>
              <textarea
                value={newReply[comment._id] || ''}
                onChange={(e) => setNewReply({ ...newReply, [comment._id]: e.target.value })}
                placeholder="Write a reply..."
                className="w-full p-2 border rounded-md mb-2"
              />
              <button
                onClick={() => handleReplySubmit(comment._id)}
                className="px-4 py-2 bg-green text-white rounded-md hover:bg-yellow"
              >
                Reply
              </button>
              {comment.replies && comment.replies.map(reply => (
                <div key={reply._id} className="mt-2 p-2 border-l-4 border-green">
                  <p className="text-gray mb-2">
                    <strong className="text-yellow">{reply.userId.name}:</strong> {reply.reply}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
