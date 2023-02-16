import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import { authReducer } from './reducers/authReducer';
import { usersReducer } from './reducers/usersReducer';

const rootReducer = combineReducers({
    usersReducer,
    authReducer
})
export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))
