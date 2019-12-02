import React, { useState, useEffect } from 'react';

const Profile = props => {
    
    useEffect( () => {
        props.fetchCommentsByUserID(props.user);
        props.fetchPostsByUserID(props.user);
    }, [props.user])

    const renderUser = () => {
        const userComments = props.comments.map( comment => (
            <li key={comment._id}>
                {comment.text}
            </li>
        ))
        const userPosts = props.posts.map( post => (
            <li key={post._id}>
                {post.title}
            </li>
        ))
        return [...userComments, userPosts]
    }

    return (
        <ul>
           {renderUser()}
        </ul>
    )
}

export default Profile;