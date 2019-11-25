import React from 'react';

const PostCard = ({ post, onPostCardClick }) => {

  const _onClick = () => {
      onPostCardClick(post._id)
  } 
  
  return (
    <div className="post-card-container">
      <div className="post-card" onClick={_onClick}>
        <h1>{post.title}</h1>
        <p>{post.topic.name}</p>
        <p>post by: {post.author.name}</p>
      </div>
    </div>
  );
  
};

export default PostCard;