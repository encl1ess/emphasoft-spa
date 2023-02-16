import LoginPage from '../pages/LoginPage';
import SigninPage from '../pages/SigninPage';
import UsersListPage from '../pages/UsersListPage';

export interface IRoute {
    path: string;
    Component: React.ComponentType;
    exact?: boolean;

}

export enum RouteNames {
    LOGIN = '/login',
    SIGNIN = '/signin',
    USERS = '/users'
}
export const publicRoutes: IRoute[] = [
    {
        path: RouteNames.LOGIN,
        Component: LoginPage,
        exact: true
    },
    {
        path: RouteNames.SIGNIN,
        Component: SigninPage,
        exact: true
    }
]


export const privateRoutes: IRoute[] = [

    {
        path: RouteNames.USERS,
        Component: UsersListPage,
        exact: true
    }

]