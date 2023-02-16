import React from 'react';
import UserList from '../components/UserList';
import Page from '../styles/Page';

const UsersListPage: React.FC = () => {
    return (
        <Page>
            <UserList />
        </Page>
    );
};

export default UsersListPage;