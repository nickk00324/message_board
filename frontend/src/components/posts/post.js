import React, { useState, useEffect } from 'react';
import CommentListContainer from '../comments/comment_list_container';
import CreateCommentContainer from '../comments/create_comment_container';
import { Link } from 'react-router-dom';

const Post = props => {
    const [post, setPost] = useState();
    const [shouldGetPost, setShouldGetPost] = useState(true);

    useEffect( () => {
        if(shouldGetPost){
            props.fetchPostByID(props.post_id)
            setShouldGetPost(false);
        }
        setPost(props.currentPost)
    }, [ [], shouldGetPost])

    const renderPost = () => {
        if(post){
            return (
              <div className="post">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <p>
                  posted by: 
                  <Link to={`/user/${post.author.name}`}>
                    {post.author.name}
                  </Link>
                </p>
                <p>
                  in: 
                  <Link to={`/topics/${post.topic.name}`}>
                    {post.topic.name}
                  </Link>
                </p>
                {props.loggedIn ? <CreateCommentContainer post_id={post._id}/> : null }
                <h2>comments:</h2>
                <CommentListContainer post_id={post._id}/>
              </div>
            );
        } else {
            return(
                <div className="loading">
                    loading...
                </div>
            )
        }
    }


    return (
        renderPost()
    )
}

export default Post;