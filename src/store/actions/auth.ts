import axios from 'axios'
import { Dispatch } from 'redux'
import { AuthAction, AuthActionTypes } from '../../types/authToken'
import { IUser } from '../../types/user'
import api from '../../api/axios'
export const loginUser = (username: string, password: string) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({ type: AuthActionTypes.LOGIN })
            const response = await api.post(`/login/`, { username, password })
            localStorage.setItem('token', response.data.token)
            dispatch({ type: AuthActionTypes.LOGIN_SUCCESS, payload: response.data })

        } catch (e) {
            if (axios.isAxiosError(e) && e.response) {
                dispatch({ type: AuthActionTypes.LOGIN_FAILURE, payload: e.response.data })
            }
        }
    }
}


export const logoutUser = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            localStorage.removeItem('token')
            console.log(localStorage.getItem('token'))
            dispatch({ type: AuthActionTypes.LOGOUT });
        } catch (e) {
            console.log(e)
        }
    }
}
export const signinUser = (user: IUser) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({ type: AuthActionTypes.SIGNIN })
            const response = await api.post('/users/', user)
            dispatch({ type: AuthActionTypes.SIGNIN_SUCCESS, payload: response.data })

        } catch (e) {
            dispatch({ type: AuthActionTypes.SIGNIN_FAILURE, payload: 'Login Failed' })
        }
    }
}

export const checkAuth = () => {
    return (dispatch: Dispatch<AuthAction>) => {
        if (localStorage.getItem('token')) {
            dispatch({ type: AuthActionTypes.CHECK_AUTH, payload: true })
        } else {
            dispatch({ type: AuthActionTypes.CHECK_AUTH, payload: false })
        }
    }
}
