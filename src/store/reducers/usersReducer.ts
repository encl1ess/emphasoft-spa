import { UsersState, UserActionTypes, UserAction } from '../../types/user'



const initialState: UsersState = {
    users: [],
    sortedOrFilteredUsers: [],
    loading: false,
    error: null
}


export const usersReducer = (state = initialState, action: UserAction): UsersState => {

    switch (action.type) {
        case UserActionTypes.GET_USERS:
            return {...state, loading: true}
        case UserActionTypes.GET_USERS_SUCCESS:
            return {...state, loading: false, users: [...action.payload], sortedOrFilteredUsers: [...action.payload]}
        case UserActionTypes.GET_USERS_FAILURE:
            return {...state, loading: false, error: action.payload}
        case UserActionTypes.SORT_BY_ID:
            return {
                ...state, sortedOrFilteredUsers: [...action.payload]
            }
        case UserActionTypes.SEARCH_USERNAME:
            return {
                ...state, sortedOrFilteredUsers: [...action.payload]
            }
        default:
            return state
    }

}

// export const getUsersAction = (payload) => ({type: GET_USERS, payload})