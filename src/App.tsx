import React, { useEffect } from 'react';
import LoginForm from './components/LoginForm';
import UserList from './components/UserList';
import { useActions } from './hooks/useActions';
import { useTypedSelector } from './hooks/useTypedSelector';



const App = () => {
  const { isAuth } = useTypedSelector(state => state.authReducer)
  const { checkAuth } = useActions();
  useEffect(() => {
    checkAuth();
  }, [])


  return (
    <div>
      <LoginForm />
      <UserList />
    </div>
  );
};

export default App;