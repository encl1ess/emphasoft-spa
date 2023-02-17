
import styled from 'styled-components';

const Form = styled.form`
  width: 70vw;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  box-sizing: border-box;
  padding: 3rem;
  min-width: max-content;
  background-image: linear-gradient( 109.6deg, rgba(110,123,251,1) 11.2%, rgba(156,252,248,1) 91.1%);
  input {
    background: white;
    width: 100%;

    height: 2rem;
    margin: 1em 0;
    padding: 0 1.1em;
    border: none;
  }
  label {
    margin-top: 1em;
    text-transform: uppercase;
  }
`;
export default Form;