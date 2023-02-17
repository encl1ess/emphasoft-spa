
import styled from 'styled-components';

const SortButton = styled.button`
   
    color: white;
    width: 2em;
    height: 2em;
    background: transparent;
    border: none;
    position: absolute;
    right: 0.5em;
    top: 50%;
    bottom: 50%;
    transform: translateY(-50%);
    padding-left: 1em;

    &.down:after {
        content: "\\1F879";
    }
    &.up:after {
        content: "\\1F87B";
    }
`;
export default SortButton;