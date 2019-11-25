import React from 'react';

const CommentCard = ({ comment }) => (
    <div>
        <p>{comment.text}</p>
        <p>by {comment.author.name}</p>
    </div>
)

export default CommentCard;