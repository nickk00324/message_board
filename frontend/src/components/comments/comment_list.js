import React, { useEffect } from 'react';
import CommentCard from './comment_card';


const CommentList = props => {

    useEffect( () => {
        props.fetchCommentsByPostID(props.post_id);
    }, [props.post_id])

    const renderComments = () => {
        if(props.comments.length === 0){
            return <div>no comments :p</div>
        } else {
            return (
                props.comments.map( comment => (
                    <CommentCard comment={comment} key={comment._id} />
                ))
            )
        }
    }

    return renderComments();
        
}

export default CommentList;