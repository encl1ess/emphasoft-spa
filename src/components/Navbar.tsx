import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RouteNames } from '../routes/routes';
import { Button } from '../styles/Button';
import { Container } from '../styles/Container';
import {BLUE_GRADIENT } from '../styles/utils/colors';



const StyledNavbar = styled(Container)`
    width: 100%;
    height: 50px;
`

const Navbar = () => {
    const { isAuth } = useTypedSelector(state => state.authReducer)
    const {logoutUser} = useActions()
    return (
        <StyledNavbar bg={BLUE_GRADIENT} justify="end">
            {isAuth ? 
            <Button onClick={logoutUser}>Log out</Button> 
            :
            <NavLink to={RouteNames.LOGIN}>
                <Button>Login</Button>
            </NavLink>
            }
        </StyledNavbar>
    );
};

export default Navbar;