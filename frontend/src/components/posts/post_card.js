import React from 'react';

const PostCard = ({ post }) => (
    <div className="post-card-container">
        <div className="post-card">
            <h1>{post.title}</h1>
            <p>topic</p>
            <p>post by: user</p>
        </div>
    </div>
)

export default PostCard;