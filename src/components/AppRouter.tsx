import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from '../routes/routes';
import LoginPage from '../pages/LoginPage';
import UsersListPage from '../pages/UsersListPage';

const AppRouter: React.FC = () => {
    const { isAuth } = useTypedSelector(state => state.authReducer)
    return isAuth ? (
        <Routes>
            {privateRoutes.map(({ path, Component }, index) =>
                <Route path={path} element={< Component />} key={path} />
            )}
            <Route path='*' element=<UsersListPage /> />
        </Routes>
    ) : (
        <Routes>
            {
                publicRoutes.map(({ path, Component }, index) =>
                    <Route path={path} element={< Component />} key={path} />
                )}
            <Route path='*' element=<LoginPage /> />
        </Routes>
    );

};

export default AppRouter;