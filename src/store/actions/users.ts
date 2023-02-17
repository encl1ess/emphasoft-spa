import axios from 'axios'
import { Dispatch } from 'redux'
import api from '../../api/axios'
import { IUser, UserAction, UserActionTypes } from '../../types/user'

export const getUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {

            const response = await api.get('/users/')
            console.log(response.data)
            dispatch({type: UserActionTypes.GET_USERS, payload: response.data})   
        } catch(e) {
            console.log(e)
        }
    }
}

export const sortById = (users: IUser[], toLow: boolean) => {
    return (dispatch: Dispatch<UserAction>) => {
        const sortedUsers = [...users.sort((a,b)=> toLow ? b['id']-a['id'] : a['id'] - b['id'])]
        dispatch({type: UserActionTypes.SORT_BY_ID, payload: sortedUsers})   
    }
}