
import React from 'react';
import styled from 'styled-components';
import { BEIGE_LIGHT, BLUE } from './utils/colors';

interface IButtonProps {
    width?: string; 
    border?: string;
    bg?: string;
    color?: string;
    disabled?: boolean;
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = styled.button<IButtonProps>`
    pointer-events:${(props) => props.disabled ? 'none' : null};
    margin: 1em;
    font-weight: 600;
    letter-spacing: 0.08em;
    height: 2em;
    padding: 0 1em;
    border-radius: 1em;
    border: 0.1em solid ${props => props.border || 'transparent'};
    background-color: ${props => props.bg || BLUE};
    color: ${props => props.color || 'white'};
    text-transform: uppercase;
    &:hover:enabled {
        background: white;
        border: 0.1em solid ${BLUE};
        color: ${BLUE};
        cursor: pointer;
    }
    &:disabled {
        background: lightgrey;
        color: darkgrey;
        cursor: pointer;
    }
`
export const Button = (props: IButtonProps) => {
    return <StyledButton {...props} />
};
