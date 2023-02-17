import axios from 'axios'
// import request from "axios";
import { Dispatch } from 'redux'
import api from '../../api/axios'
import { IUser, UserAction, UserActionTypes } from '../../types/user'

export const getUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.GET_USERS})   
            const response = await api.get('/users/')
            dispatch({type: UserActionTypes.GET_USERS_SUCCESS, payload: response.data})   
        }  catch (e) {
            if (axios.isAxiosError(e) && e.response) {
                dispatch({ type: UserActionTypes.GET_USERS_FAILURE, payload: e.response.data })
            }
        }
    }
}

export const sortById = (users: IUser[], toLow: boolean) => {
    return (dispatch: Dispatch<UserAction>) => {
        const sortedUsers = [...users.sort((a,b)=> toLow ? b['id']-a['id'] : a['id'] - b['id'])]
        dispatch({type: UserActionTypes.SORT_BY_ID, payload: sortedUsers})   
    }
}

export const searchUsername = (users: IUser[], value: string) =>{
    return (dispatch: Dispatch<UserAction>) => {
        const filteredUsers = [...users.filter(elem => elem.username.toLowerCase().includes(value.toLowerCase()))]
        dispatch({type: UserActionTypes.SEARCH_USERNAME, payload: filteredUsers})   
    }
}