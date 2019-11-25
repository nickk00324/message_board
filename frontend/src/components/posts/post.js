import React, { useState, useEffect } from 'react';
import CommentListContainer from '../comments/comment_list_container';

const Post = props => {
    const [post, setPost] = useState();
    const [shouldGetPost, setShouldGetPost] = useState(true);

    useEffect( () => {
        console.log(props.post_id)
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
                    <p>posted by: {post.author.name}</p>
                    <p>in: {post.topic.name}</p>
                    <h2>comments:</h2>
                    <CommentListContainer post_id={post._id}/>
                </div>
            )
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