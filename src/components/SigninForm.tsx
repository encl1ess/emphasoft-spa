import React, {useState} from 'react';
import {NavLink } from 'react-router-dom';
import { useInput } from '../hooks/useInput';
import { RouteNames } from '../routes/routes';
import { Button } from '../styles/Button';
import Form from '../styles/Form';
import ErrorMessage from './ErrorMessage';



const SigninForm = () => {
    const username = useInput('', {isEmpty: true, maxLength: 150, pattern: /^[\w.@+-]+$/ })
    const password = useInput('',  {isEmpty: true, maxLength: 128, minLength: 8,  pattern: /^(?=.*[A-Z])(?=.*\d).{8,}$/})

    return (
        <Form>
            <h1>Signin</h1>
            <label>Here sign in form should be</label>
            {/* <input value={username.value} name="username" type='text' placeholder='Enter username'
                onChange={e => username.onChange(e)}
                onBlur={e => username.onBlur(e)} />
            {(username.isLeave && username.errorMessage) &&  Object.values(username.errorMessage).map((message, i) => <ErrorMessage key = {'u'+i} message={message}/>)}
            <input value={password.value} name="password" type='password' placeholder='Enter password'
                onChange={e => password.onChange(e)}
                onBlur={e => password.onBlur(e)} />
            {(password.isLeave && password.errorMessage) && Object.values(password.errorMessage).map((message, i) => <ErrorMessage key = {'p'+ i} message={message}/>)}
            {(password.isLeave && password.errorMessage?.pattern) && <ErrorMessage message='The password must contain an uppercase letter number and a special character'/>}
            */}
            <NavLink to={RouteNames.LOGIN}>
                <Button> Return to Login</Button>
            </NavLink>
            {/* <Button disabled={!username.isValid || !password.isValid}>Signin</Button> */}
        </Form>
    );
};

export default SigninForm;