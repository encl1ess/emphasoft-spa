
import styled from 'styled-components';
import { Container } from './Container';

const Page = styled(Container)`
    width: 100%;
    height: 100vh;
    margin-top: 1em;
    flex-direction: column;
    justify-content: start;
    box-sizing: border-box;
    padding: 1em;

    overflow-y: hidden;

    @media (max-width: '750px') {
      overflow-x: auto;
    }
`;
export default Page;