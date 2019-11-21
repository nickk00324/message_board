import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const LoginForm = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = () => {
        let user = {
            email,
            password
        }

        props.login(user);
        clearFields();
        props.history.push('/');
    }

    const clearFields = () => {
        setEmail('');
        setPassword('');
    }

    return (
        <div className="form">
            <input type="email" value={email} placeholder="email" onChange={e => setEmail(e.target.value)}/>
            <input type="password" value={password} placeholder="password" onChange={e => setPassword(e.target.value)}/>
            <button onClick={submit}>submit</button>
        </div>
    ) 
}

export default withRouter(LoginForm);