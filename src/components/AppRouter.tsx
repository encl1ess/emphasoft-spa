import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes, RouteNames } from '../routes/routes';
import UsersListPage from '../pages/UsersListPage';

const AppRouter: React.FC = () => {
    const { isAuth } = useTypedSelector(state => state.authReducer)
    return isAuth ? (
        <Routes>
            {privateRoutes.map(({ path, Component }, index) =>
                <Route path={path} element={< Component />} key={path} />
            )}
            <Route path='*' element={<Navigate replace to={RouteNames.USERS} />}/>
        </Routes>
    ) : (
        <Routes>
            {
                publicRoutes.map(({ path, Component }, index) =>
                    <Route path={path} element={< Component />} key={path} />
                )}
            <Route path='*' element={<Navigate replace to={RouteNames.LOGIN} />}/>
        </Routes>
    );

};

export default AppRouter;