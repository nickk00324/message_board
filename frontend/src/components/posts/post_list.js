import React, { useState, useEffect } from 'react';
import PostCard from './post_card';

const PostList = props => {
    const [posts, setPosts] = useState([]);
    const [shouldGetPosts, setShouldGetPosts] = useState(true);

    useEffect( () => {
        if(shouldGetPosts){
            props.fetchAllPosts();
            setShouldGetPosts(false);
        }
        setPosts(props.posts);
    }, [ [], shouldGetPosts])

    const makePostCards = () =>
      posts.map(post => (
        <li>
          <PostCard post={post} />
        </li>
      ));

    return (
        <ul>
            {makePostCards()}
        </ul>
    )
}



export default PostList;