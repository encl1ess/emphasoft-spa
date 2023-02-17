import {UsersState, UserActionTypes, UserAction } from '../../types/user'



const initialState: UsersState = {
    users: [],
    loading: false,
    error: null
}


export const usersReducer = (state = initialState, action: UserAction): UsersState => {

    switch(action.type) {
        case UserActionTypes.GET_USERS: 
            return {
                ...state, users: [...action.payload]
            }
        case UserActionTypes.SORT_BY_ID: 
            return {
                ...state, users: [...action.payload]
            }
        default:
            return state
    }

}

// export const getUsersAction = (payload) => ({type: GET_USERS, payload})