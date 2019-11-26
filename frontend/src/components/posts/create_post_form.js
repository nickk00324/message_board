import React, { useState, useEffect } from 'react';

const CreatePostForm = props => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [selectedTopic, setSelectedTopic] = useState('');
    const [topics, setTopics] = useState([]);

    useEffect( () => {
        props.fetchAllTopics();
        setTopics(props.topics);
    }, [ props.topics[0].name ])

    const submit = () => {
        const newPost = {
            title,
            body,
            author: props.currentUser.id,
            topic_id: selectedTopic
        }
        props.createPost(newPost);
        setTitle('');
        setBody('');
        setSelectedTopic('');
    }

    const getTopicOptions = () => (
        topics.map( topic => (
            <option key={topic._id} value={topic._id}>{topic.name}</option>
        ))
    )
    
    return (
      <div className="form">
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          placeholder="text"
          value={body}
          onChange={e => setBody(e.target.value)}
        />
        <select defaultValue="post in" onChange={ e => setSelectedTopic(e.target.value)}>
          <option disabled>post in</option>
          {getTopicOptions()}
        </select>
        <button onClick={submit}>submit</button>
      </div>
    );
}

export default CreatePostForm;