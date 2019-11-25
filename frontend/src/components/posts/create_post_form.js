import React, { useState, useEffect } from 'react';

const CreatePostForm = props => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const submit = () => {
        console.log(title, body);
        setTitle('');
        setBody('');
    }
    
    return(
        <div className="form">
            <input type="text" placeholder="title" value={title}onChange={ e => setTitle(e.target.value)} />
            <textarea placeholder="text" value={body} onChange={ e => setBody(e.target.value)} />
            <button onClick={submit}>submit</button>
        </div>
    )
}

export default CreatePostForm;