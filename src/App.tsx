import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import UserList from './components/UserList';
import { useActions } from './hooks/useActions';
import { Container } from './styles/Container';
import GlobalStyle from './styles/global';


const App = () => {
  const { checkAuth } = useActions();
  useEffect(() => {
    checkAuth();
  }, [])


  return (
    <>
      <GlobalStyle />
      <Container direction='column'>
          <Header />
          <AppRouter />
      </Container>
    </>
  );
};

export default App;