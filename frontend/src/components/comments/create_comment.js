import React, { useState } from 'react';
import { refresh } from 'react-router-dom';

const CreateComment = props => {
    const [input, setInput] = useState('');

    const submit = () => {
        const newComment = {
            text: input,
            author: props.currentUser.id,
            post: props.post_id
        }
        props.createComment(newComment);
        setInput('');
        window.location.reload();
    }


    return (
        <div className="comment-form">
            <textarea placeholder="write a comment" onChange={ e => setInput(e.target.value)} value={input}></textarea>
            <button onClick={submit}>submit</button>
        </div>
    )
}

export default CreateComment;