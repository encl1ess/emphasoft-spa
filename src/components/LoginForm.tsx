import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { useInput } from '../hooks/useInput';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RouteNames } from '../routes/routes';
import { loginUser } from '../store/asyncActions/auth';
import { Button } from '../styles/Button';
import { Container } from '../styles/Container';
import Form from '../styles/Form';
import ErrorMessageList from './ErrorMessageList';



const LoginForm = () => {
    const username = useInput('', { isEmpty: true, maxLength: 150, pattern: /^[\w.@+-]+$/ })
    const password = useInput('', { isEmpty: true })
    const {error} = useTypedSelector(state => state.authReducer)
    const { loginUser } = useActions();


    return (
        <Form>
            <h1>Login</h1>
            <Container direction='column' align='flex-start'>
            <label htmlFor="username">Username</label>
            <input value={username.value} id='username' name='username' type='text' placeholder='Enter username'
                onChange={e => username.onChange(e)}
                onBlur={e => username.onBlur(e)} />
            {(username.isLeave && username.errorMessage) && <ErrorMessageList messages={username.errorMessage} idLetter='u'/>}
            <label htmlFor="password">Password</label>
            <input value={password.value} id='password' name='password' type='password' placeholder='Enter password'
                onChange={e => password.onChange(e)}
                onBlur={e => password.onBlur(e)} />
            {(password.isLeave && password.errorMessage) && <ErrorMessageList messages={password.errorMessage} idLetter='p'/>}
            </Container>
            <Container>
                <Button disabled={!username.isValid || !password.isValid} onClick={(e) => {
                    e.preventDefault()
                    loginUser(username.value, password.value)
                }
                }>Login</Button>
                <NavLink to={RouteNames.SIGNIN}>
                    <Button >Sign In</Button>
                </NavLink>
            </Container>
            {error && <ErrorMessageList messages={error} idLetter='e'/>}
        </Form>
    );
};

export default LoginForm;