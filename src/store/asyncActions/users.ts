import axios from 'axios'
import { Dispatch } from 'redux'
import api from '../../api/axios'
import { UserAction, UserActionTypes } from '../../types/user'

export const getUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {

            const response = await api.get('/users/')
            console.log(response)
            dispatch({type: UserActionTypes.GET_USERS, payload: response.data})
            
        } catch(e) {
            console.log(e)
        }
    }
}