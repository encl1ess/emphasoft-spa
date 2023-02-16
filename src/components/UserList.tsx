import React, {useEffect} from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const UserList: React.FC = () => {
    const {users} = useTypedSelector(state => state.usersReducer)
    const {isAuth} = useTypedSelector(state => state.authReducer)
    const {getUsers} = useActions();

    useEffect(() => {
        if(isAuth) {
            getUsers()
        }
    }, [isAuth])
    return (
        <div>
              {users.map(user =>
                <div key={user.id}>{user.username}</div>
            )}
        </div>
    );
};

export default UserList;