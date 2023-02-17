import { IErrors } from './errors';
import { IUser } from './user'


export interface AuthState {
    user: IUser | null;
    isAuth: boolean;
    token: string;
    loading: boolean;
    error: null | string | IErrors;
}

export enum AuthActionTypes {
    LOGIN = 'LOGIN',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAILURE = 'LOGIN_FAILURE',
    LOGOUT = 'LOGOUT',
    SIGNIN = 'SIGNIN',
    SIGNIN_SUCCESS = 'SIGNIN_SUCCESS',
    SIGNIN_FAILURE = 'SIGNIN_FAILURE',
    CHECK_AUTH = 'CHECK_AUTH'
}

interface LoginAction {
    type: AuthActionTypes.LOGIN;
}

interface LoginActionSuccess {
    type: AuthActionTypes.LOGIN_SUCCESS;
    payload: string;
}

interface LoginActionFailure {
    type: AuthActionTypes.LOGIN_FAILURE;
    payload: string;
}

interface LogoutAction {
    type: AuthActionTypes.LOGOUT;
}


interface SigninAction {
    type: AuthActionTypes.SIGNIN;
}

interface SigninActionSuccess {
    type: AuthActionTypes.SIGNIN_SUCCESS;
    payload: IUser;
}

interface SigninActionFailure {
    type: AuthActionTypes.SIGNIN_FAILURE;
    payload: IErrors | string;
}

interface CheckAuthAction {
    type: AuthActionTypes.CHECK_AUTH; 
    payload: boolean;
}

export type AuthAction = LogoutAction
    | LoginAction | LoginActionSuccess | LoginActionFailure
    | SigninAction | SigninActionSuccess | SigninActionFailure | CheckAuthAction
