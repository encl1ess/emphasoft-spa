import React from 'react';
import styled from 'styled-components';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Button } from '../styles/Button';
import { Container } from '../styles/Container';
import { BEIGE } from '../styles/utils/colors';



const StyledNavbar = styled(Container)`
    width: 100%;
    min-height: 50px;
    height: 9vh;
`

const Navbar = () => {
    const { isAuth } = useTypedSelector(state => state.authReducer)
    const {logoutUser} = useActions()
    return (
        <StyledNavbar bg={BEIGE} justify="end">
            {isAuth ? 
            <Button onClick={logoutUser}>Log out</Button> 
            :
            <Button>Login</Button>
            }
        </StyledNavbar>
    );
};

export default Navbar;