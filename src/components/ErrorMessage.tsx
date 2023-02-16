import React from 'react';

interface IErrorMessageProps {
    message: string
}

const ErrorMessage = ({message}: IErrorMessageProps) => {
    return (
        <div>
            {message}
        </div>
    );
};

export default ErrorMessage;