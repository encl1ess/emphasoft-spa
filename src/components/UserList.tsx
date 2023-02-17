import React, { useEffect, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Table from '../styles/Table';
import Loader from '../styles/Loader';
import SortButton from '../styles/SortButton';
import Wrapper from '../styles/Wrapper';

const UserList: React.FC = () => {
    const { sortedOrFilteredUsers, loading } = useTypedSelector(state => state.usersReducer)
    const { isAuth } = useTypedSelector(state => state.authReducer)
    const { getUsers, sortById } = useActions();
    const [toLow, setToLow] = useState(true)


    useEffect(() => {
        if (isAuth) {
            getUsers()
        }
    }, [isAuth])

    if (loading) {
        return (
            <Wrapper className='loader'>
                <Loader />
            </Wrapper>
        )
    }
    return (
        <Wrapper>
            <Table>
                <thead>
                    <tr>
                        <th>id<SortButton className={toLow ? 'down' : 'up'} onClick={() => {
                            setToLow(!toLow)
                            sortById(sortedOrFilteredUsers, toLow)
                        }} /></th>
                        <th>username</th>
                        <th>first name</th>
                        <th>last name</th>
                        <th>is active</th>
                        {/* Этот параметр на бекенде не заполняется (с фронта его не поменять) */}
                        <th>last login</th>
                        <th>is superuser</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedOrFilteredUsers.map((user) =>
                        <tr key={user.username}>
                            {
                                Object.values(user).map((elem, id, array) => <td key={array[1] + id}>{
                                    !elem ?
                                        <span>&#8212;</span>
                                        :
                                        elem === true ? <span>&#10004;</span> : elem
                                }</td>
                                )
                            }

                        </tr>
                    )}
                </tbody>
            </Table>
        </Wrapper>
    );
};

export default UserList;