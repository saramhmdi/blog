import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import { Link } from "react-router-dom";

const Header = () => {
    return (
    <AppBar position='sticky'>
        <Container maxWidth='lg'>

            <Toolbar>

                <Typography component="h1" variant='h5' fontWeight='200' flex={1} >
                <Link to="/" style={{textDecoration:"none", color: "#fff"}}>وبلاگ بوتواستارت</Link>
                </Typography >
                <Link to="/"  style={{color: "#fff"}}>
                <MenuBookRoundedIcon />
                </Link>
                
            </Toolbar>
        </Container>
    </AppBar>

    );
};

export default Header;

