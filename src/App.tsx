import React, { useEffect } from 'react';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import UserList from './components/UserList';
import { useActions } from './hooks/useActions';
import { useTypedSelector } from './hooks/useTypedSelector';
import { Container } from './styles/Container';
import GlobalStyle from './styles/global';


const App = () => {
  const { isAuth } = useTypedSelector(state => state.authReducer)
  const { checkAuth } = useActions();
  useEffect(() => {
    checkAuth();
  }, [])


  return (
    <>
      <GlobalStyle />
      <Container direction='column'>
        <Header/>
        <LoginForm />
        <UserList />
      </Container>
    </>
  );
};

export default App;