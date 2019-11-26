import React, { useState, useEffect, Fragment } from 'react';
import CommentCard from './comment_card';


const CommentList = props => {
    const [comments, setComments] = useState([]);
    const [shouldGetComments, setShouldGetComments] = useState(true);

    useEffect( () => {
        if(shouldGetComments){
            props.fetchCommentsByPostID(props.post_id);
            setShouldGetComments(false);
        }
        setComments(props.comments);
    }, [ [], shouldGetComments])

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