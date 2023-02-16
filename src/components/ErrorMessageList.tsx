import React from 'react';
import { IErrorMessage } from '../hooks/useValidation';
import { IErrors } from '../types/authToken';
import ErrorMessage from './ErrorMessage';

interface IErrorMessageListProps {
    messages: string | IErrors | IErrorMessage,
    idLetter?: string,
    children?: React.ReactNode
}

const ErrorMessageList = ({messages, idLetter = ''}: IErrorMessageListProps):JSX.Element => {
    return (
        <>
         {Object.values(messages).map((message, i) => <ErrorMessage key={idLetter + i} message={message} />)}
        </>
    );
};

export default ErrorMessageList;