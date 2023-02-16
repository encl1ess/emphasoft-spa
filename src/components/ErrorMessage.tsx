import React from 'react';

interface IErrorMessageProps {
    message: string
}

const ErrorMessage = ({message}: IErrorMessageProps) => {
    return (
        <span>
            {message}
        </span>
    );
};

export default ErrorMessage;