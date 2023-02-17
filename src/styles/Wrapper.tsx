import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
    overflow: auto;
    width: inherit;
    height: 100vh;
    min-width: max-content;
    padding-bottom: 1em;
    box-sizing: border-box;
    position: relative;
    &.loader {
        overflow: visible;
        width: inherit;
        height: inherit;
        display: flex;
        align-items: center;
        justify-items: center;
    }
`
export default Wrapper;