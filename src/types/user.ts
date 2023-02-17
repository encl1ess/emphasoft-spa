import { IErrors } from './errors';

export interface IUser {
    id: number;
    username: string;
    first_name?: string;
    last_name?: string;
    is_active: boolean;
    last_login: string;
    is_superuser: boolean;
}

export interface UsersState {
    users: IUser[];
    sortedOrFilteredUsers: IUser[];
    loading: boolean;
    error: null | string | IErrors;
}

export enum UserActionTypes {
    GET_USERS = 'GET_USERS',
    GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
    GET_USERS_FAILURE = 'GET_USERS_FAILURE',
    SORT_BY_ID = 'SORT_BY_ID',
    SEARCH_USERNAME = 'SEARCH_USERNAME'
}

interface GetUsersAction {
    type: UserActionTypes.GET_USERS;
}

interface GetUsersSuccess {
    type: UserActionTypes.GET_USERS_SUCCESS;
    payload: IUser[];
}

interface GetUsersFailure {
    type: UserActionTypes.GET_USERS_FAILURE;
    payload: IErrors | string;
}

interface SortByIdAction {
    type: UserActionTypes.SORT_BY_ID;
    payload: IUser[];
}

interface SearchUsernameAction {
    type: UserActionTypes.SEARCH_USERNAME;
    payload: IUser[];
}

export type UserAction = GetUsersAction | GetUsersSuccess | GetUsersFailure | SortByIdAction | SearchUsernameAction;