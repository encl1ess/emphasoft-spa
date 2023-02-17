import styled from 'styled-components';

const SortButton = styled.button`
    font-size: small;
    color: white;
    width: 2em;
    height: 2em;
    background: transparent;
    border: none;
    &.down:after,
    &.up:after {
        content: '>';
        display: inline-block;
        font-weight: 400;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        
    }

    &.down:after {
        transform: rotate(90deg);
    }
    &.up:after {
        transform: rotate(-90deg);
    }
`;
export default SortButton;