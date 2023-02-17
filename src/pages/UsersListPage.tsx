import React from 'react';
import SearchInput from '../components/SearchInput';
import UserList from '../components/UserList';
import Page from '../styles/Page';

const UsersListPage: React.FC = () => {
    return (
        <Page>
            <SearchInput/>
            <UserList />
        </Page>
    );
};

export default UsersListPage;