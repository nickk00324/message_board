import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const SignUpForm = props => {
    const [name, setName] = useState('');   
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [password2, setPassword2]  = useState(''); 

    const submit = () => {
        let newUser = {
            name,
            email,
            password,
            password2
        }

        props.signup(newUser);
        clearFields();
        props.history.push('/login');
    }

    const clearFields = () => {
        setName('');
        setEmail('');
        setPassword('');
        setPassword2('');
    }

    return (
        <div className="form">
            <input type="name" placeholder="username" onChange={e => setName(e.target.value)}/>
            <input type="email" placeholder="email" onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
            <input type="password" placeholder="confirm password" onChange={e => setPassword2(e.target.value)}/>
            <button onClick={submit}>submit</button>
        </div>
    )
}

export default withRouter(SignUpForm);