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
    loading: boolean;
    error: null | string;
}

export enum UserActionTypes {
    GET_USERS = 'GET_USERS',
    SORT_BY_ID = 'SORT_BY_ID'
}
interface GetUsersAction {
    type: UserActionTypes.GET_USERS;
    payload: IUser[];
}

interface SortByIdAction {
    type: UserActionTypes.SORT_BY_ID;
    payload: IUser[];
}


export type UserAction = GetUsersAction |SortByIdAction;