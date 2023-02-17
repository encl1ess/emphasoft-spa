import styled, { keyframes } from 'styled-components';
import { BLUE } from './utils/colors';


const rotation = keyframes`
    0% {
        transform: rotate(0deg) scale(1);
    }
    50% {
        transform: rotate(180deg) scale(1.5);
    }
    100% {
        transform: rotate(360deg) scale(1);
    }
`

const Loader = styled.div`
    position: absolute;
    top: 30%;
    width: 5em;
    height: 5em;
    border: 0.5rem dashed ${BLUE};
    border-radius: 50%;
    animation: ${rotation} 2s infinite linear;
`;
export default Loader;