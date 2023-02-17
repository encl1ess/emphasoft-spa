import styled from 'styled-components';

const SortButton = styled.button`
    font-size: small;
    color: white;
    width: 2em;
    height: 2em;
    background: transparent;
    border: none;

    &.down:after {
        content: "\\1F879";
    }
    &.up:after {
        content: "\\1F87B";
    }
`;
export default SortButton;