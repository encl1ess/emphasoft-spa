import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IUser } from '../types/user';
const UserList: React.FC = () => {
    const { users } = useTypedSelector(state => state.usersReducer)
    const { isAuth } = useTypedSelector(state => state.authReducer)
    const { getUsers } = useActions();

    useEffect(() => {
        if (isAuth) {
            getUsers()
        }
    }, [isAuth])
    return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>username</th>
                    <th>first name</th>
                    <th>last name</th>
                    <th>is active</th>
                    <th>last login</th>
                    <th>is superuser</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, id) =>
                    <tr key={id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.is_active ? 'Yes' : 'No'}</td>
                        <td>{user.last_login ? user.last_login.toString() : 'unknown'}</td>
                        <td>{user.is_superuser ? 'Yes' : 'No'}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default UserList;