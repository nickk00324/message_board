import React, { useEffect } from 'react';
import PostCard from './post_card';
import { Link } from 'react-router-dom';


const PostList = props => {

    useEffect( () => {
        props.topic
          ? props.fetchAllTopicPosts(props.topic)
          : props.fetchAllPosts();

    }, [props.dataFetched])

    const onPostCardClick = post_id => {
        props.fetchPostByID(post_id);
    }

    const makePostCards = () => (
      props.posts.map(post => (
        <li key={post._id}>
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