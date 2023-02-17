import React from 'react';
import styled from 'styled-components';
import SearchInput from '../components/SearchInput';
import UserList from '../components/UserList';
import { Container } from '../styles/Container';
import Page from '../styles/Page';




const UsersListPage: React.FC = () => {
    return (
        <Page>
            <SearchInput />
            <UserList />
        </Page>
    );
};

export default UsersListPage;