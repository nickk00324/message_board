import React from 'react';
import PostListContainer from '../posts/post_list_container';

const Home = props => (
    <PostListContainer currentUser={props.currentUser} params={props.params} />
)

export default Home;