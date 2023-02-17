import React from 'react';
import styled, { keyframes } from 'styled-components';
import { IErrorMessage } from '../hooks/useValidation';
import { IErrors } from '../types/errors';
import ErrorMessage from './ErrorMessage';

interface IErrorMessageListProps {
    messages: string | IErrors | IErrorMessage;
    idLetter?: string;
    children?: React.ReactNode;
}


interface IErrorListProps {
    display?: string;
    height?: string;
    animation?: any
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50%) rotateX(90deg); 
  }
  to{
    opacity: 1;
    transform: translateY(0) rotateX(0);
  }
`

const ErrorList = styled.div<IErrorListProps>`
  position: sticky;
  color: red;
  font-size: 0.8em;
  letter-spacing: 0.05em;
  opacity: 1;
  display: flex;
  flex-direction: column;

  span {    
    background: rgba(255, 255, 255, 0.8);
    animation: 0.5s ${fadeIn} linear;
    margin: 0.5em 0;
    padding:  0.5em 1em;
  }
`;


const ErrorMessageList = ({ messages, idLetter = '' }: IErrorMessageListProps): JSX.Element => {
    const list = Object.values(messages);
    return (
        <ErrorList>
            {list.map((message, i) => <ErrorMessage key={idLetter + i} message={message} />)}
        </ErrorList>
    )
};

export default ErrorMessageList;