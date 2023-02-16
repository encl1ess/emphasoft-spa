import React from 'react';
import styled from 'styled-components';

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