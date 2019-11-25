import React, { useState, useEffect } from 'react';
import PostCard from './post_card';
import { Link } from 'react-router-dom';


const PostList = props => {
    const [posts, setPosts] = useState([]);
    const [shouldGetPosts, setShouldGetPosts] = useState(true);

    useEffect( () => {
        if(shouldGetPosts){
          props.topic ? props.fetchAllTopicPosts(props.topic) : props.fetchAllPosts()
          setShouldGetPosts(false)
        }
        setPosts(props.posts);
    }, [ [], shouldGetPosts])


    const onPostCardClick = post_id => {
        props.fetchPostByID(post_id);
    }

    const makePostCards = () => (
      posts.map(post => (
        <li>
          <Link to={`/topics/${post.topic.name}/${post._id}/${post.title}`}>
            <PostCard post={post} onPostCardClick={onPostCardClick}/>
          </Link>
        </li>
      )));

    return (
        <ul>
            {makePostCards()}
        </ul>
    )
}



export default PostList;