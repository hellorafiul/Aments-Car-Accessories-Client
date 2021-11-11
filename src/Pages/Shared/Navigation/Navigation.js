import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css'
import Container from '@mui/material/Container';
import logo from '../../../images/logo.webp'

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: 'white', width: 1 }}>
        <Container>
          <Toolbar>
            <IconButton>
              <img src={logo} alt="" />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Doctors Portal
            </Typography>
            <Box className="aments-nav">
              <Link sx={{ mr: 5 }} style={{ textDecoration: 'none' }} to="/">Home</Link>
              <Link sx={{ ml: 5 }} style={{ textDecoration: 'none' }} to="/shop">Shop</Link>
              <Link style={{ textDecoration: 'none' }} to="/appointment">Dashboard</Link>
            </Box>
            {
              user?.email ? <Button onClick={logout} variant="outlined" style={{ color: '#333', borderColor: '#333' }} size="small">Logout</Button> :
                <NavLink style={{ textDecoration: 'none' }} to="/login"><Button variant="outlined" size="small">Login</Button></NavLink>
            }
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navigation;