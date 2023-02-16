import { AuthAction, AuthActionTypes, AuthState } from '../../types/authToken'

const initialState: AuthState = {
    user: null,
    isAuth: false,
    loading: false,
    error: null,
    token: ''
}


export const authReducer = (state = initialState, action: AuthAction): AuthState => {

    switch (action.type) {
        case AuthActionTypes.LOGIN:
            return {...state, loading: true}
        case AuthActionTypes.LOGIN_SUCCESS:
            return {...state, isAuth: true, loading: false, token: action.payload, error: null}
        case AuthActionTypes.LOGIN_FAILURE:
            return {...state, loading: false, error: action.payload}
        case AuthActionTypes.LOGOUT:
            return {...state, isAuth: false}
        case AuthActionTypes.SIGNIN:
            return {...state, loading: true}
        case AuthActionTypes.SIGNIN_SUCCESS:
            return {...state, isAuth: true, loading: false, user: action.payload}
        case AuthActionTypes.SIGNIN_FAILURE:
            return {...state, loading: false, error: action.payload}
        case AuthActionTypes.CHECK_AUTH: 
            return {...state, isAuth: action.payload}
        default:
            return state
    }

}