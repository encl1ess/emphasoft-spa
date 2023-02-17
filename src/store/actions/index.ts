import * as UserActionCreators from './users'
import * as AuthActionCreators from './auth'

export default {
    ...UserActionCreators,
    ...AuthActionCreators
}