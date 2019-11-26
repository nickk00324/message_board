import React, { useState, useEffect } from 'react';

const Profile = props => {
    const [user, setUser] = useState(undefined);
    const [comments, setComments] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        props.fetchUser(props.user)
        if(props.viewUser.id){
            props.fetchCommentsByUserID(props.viewUser.id);
            props.fetchPostsByUserID(props.viewUser.id);
            setUser(props.viewUser);
            setComments(props.comments);
            setPosts(props.posts);
        }
    }, [ props.viewUser.id ])

    

    return (
        <h1>this will be the user profile</h1>
    )
}

export default Profile;