
import React from 'react';
import styled from 'styled-components';
interface IContainerProps {
    width?: string;
    direction?: string;
    justify?: string;
    align?: string;
    bg?: string; 
    children: React.ReactNode;
}

const StyledContainer = styled.div<IContainerProps>`
    width: ${props => props.width || '100%'};
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'center'};
    align-items: ${props => props.align || 'center'};
    background: ${props => props.bg || 'transparent'};
    padding: 0;
`
export const Container = (props: IContainerProps) => {
    return <StyledContainer {...props}/>
};
