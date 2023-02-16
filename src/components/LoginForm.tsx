import React, {useState} from 'react';
import { useInput } from '../hooks/useInput';
import ErrorMessage from './ErrorMessage';



const LoginForm = () => {
    const username = useInput('', {isEmpty: true, maxLength: 150, pattern: /^[\w.@+-]+$/ })
    const password = useInput('',  {isEmpty: true, maxLength: 128, minLength: 8,  pattern: /^(?=.*[A-Z])(?=.*\d).{8,}$/})

    return (
        <form>
            <h1>Login</h1>
            <input value={username.value} name="username" type='text' placeholder='Enter username'
                onChange={e => username.onChange(e)}
                onBlur={e => username.onBlur(e)} />
            {(username.isLeave && username.errorMessage) &&  Object.values(username.errorMessage).map((message, i) => <ErrorMessage key = {'u'+i} message={message}/>)}
            <input value={password.value} name="password" type='password' placeholder='Enter password'
                onChange={e => password.onChange(e)}
                onBlur={e => password.onBlur(e)} />
            {(password.isLeave && password.errorMessage) && Object.values(password.errorMessage).map((message, i) => <ErrorMessage key = {'p'+ i} message={message}/>)}
            {(password.isLeave && password.errorMessage?.pattern) && <ErrorMessage message='The password must contain an uppercase letter number and a special character'/>}
            <button type='submit' disabled={!username.isValid || !password.isValid}>Login</button>
            <button type='submit'>Signin</button>
        </form>
    );
};

export default LoginForm;