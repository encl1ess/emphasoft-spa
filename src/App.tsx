import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import UserList from './components/UserList';
import { useActions } from './hooks/useActions';
import { Container } from './styles/Container';
import GlobalStyle from './styles/global';
import styled from 'styled-components';
const AppWrapper = styled(Container)`
    height: 100vh;
    overflow: hidden;
    
`

const App = () => {
  const { checkAuth } = useActions();
  useEffect(() => {
    checkAuth();
  }, [])


  return (
    <>
      <GlobalStyle />
      <AppWrapper direction='column' justify="start">
          <Navbar />
          <AppRouter />
      </AppWrapper>
    </>
  );
};

export default App;