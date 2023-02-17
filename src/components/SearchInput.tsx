import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Container } from '../styles/Container';
import { BLUE } from '../styles/utils/colors';

const Input = styled.input`
margin: 1em;

  border: 0;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  background: white;
  border-radius: 3px;
  box-shadow: ${BLUE} 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, #93b6f6 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgba(156,252,248,1) 20px -20px;
  margin-bottom: 1em;
`;


const InputContainer = styled.fieldset`
     position: relative;
  padding: 0;
  margin: 0;
  border: 0;
  width: 50vh;
`

const SearchInput = () => {
  const { users } = useTypedSelector(state => state.usersReducer)
  const [searchValue, setSearchValue] = useState('')
  const {searchUsername} = useActions()
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    searchUsername(users, searchValue);
  }, [searchValue])
    return (
        <InputContainer>
            <Input value={searchValue} onChange={onChange} type="text" placeholder="Search..." />
        </InputContainer>
    );
};

export default SearchInput;