
import React from 'react';
import styled from 'styled-components';
interface IFormProps {
    children: React.ReactNode
}

const Form = styled.form`
  width: 70vw;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-content: center;

  input {
    width: 100%;
  }


`;
export default Form;