import LoginPage from '../pages/LoginPage';
import UsersListPage from '../pages/UsersListPage';

export interface IRoute {
    path: string;
    Component: React.ComponentType;
    exact?: boolean;

}

export enum RouteNames {
    LOGIN = '/login',
    USERS = '/users'
}
export const publicRoutes: IRoute[] = [
    {
        path: RouteNames.LOGIN,
        Component: LoginPage,
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