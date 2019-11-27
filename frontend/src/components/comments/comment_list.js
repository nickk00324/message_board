import React, { useState, useEffect } from 'react';
import CommentCard from './comment_card';
import { isEqual } from 'lodash';



const CommentList = props => {

    const [comments, setComments] = useState([]);
    const [currentPost, setCurrentPost] = useState('');

    useEffect( () => {
        props.fetchCommentsByPostID(props.post_id);
        setComments(props.comments);
    }, [ props.dataFetched ])



    const renderComments = () => {
        if(comments.length === 0){
            return <div>no comments :p</div>
        } else {
            return (
                comments.map( comment => (
                    <CommentCard comment={comment} key={comment._id} />
                ))
            )
        }
    }

    return renderComments();
        
}

export default CommentList;