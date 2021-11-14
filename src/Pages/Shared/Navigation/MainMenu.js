import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import logo from '../../../images/Aments.png'
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './Navigation.css'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function MainMenu() {
  const { user, logout } = useAuth();
  console.log(user)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>{user?.email && <p>Howdy, {user.displayName}!</p>}</MenuItem>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={logout} >{
        user?.email ? <Button variant="outlined" style={{ color: '#333', borderColor: '#333', padding: "0px 20px" }} size="small">Logout</Button> :
          <Link style={{ textDecoration: 'none' }} to="/login"><Button style={{ color: '#333', borderColor: '#333', padding: "0px 20px" }} variant="outlined">Login</Button></Link>
      }</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton>
          <Link style={{ textDecoration: 'none', color: "black", fontSize: "16px" }} to="/">Home</Link>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton>
          <Link style={{ textDecoration: 'none', color: "black", fontSize: "18px" }} to="/shop">Shop</Link>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton>
          {user.email && <Link style={{ textDecoration: 'none', color: "black", fontSize: "18px" }} to="/dashboard">Dashboard</Link>}
        </IconButton>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {
            user?.email ? <Stack direction="row" spacing={2}>
              <Avatar alt="" src={user?.photoURL} />
            </Stack> : <AccountCircle />
          }
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: '#333', }}>
        <Container>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <Link to="/"><img src={logo} alt="" /></Link>
            </IconButton>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex', } }}>
              <IconButton className="aments-nav">
                <Link style={{ textDecoration: 'none', color: "white", fontSize: "18px", fontFamily: 'Raleway' }} to="/">Home</Link>
              </IconButton>
              <IconButton className="aments-nav">
                <Link style={{ textDecoration: 'none', color: "white", fontSize: "18px", fontFamily: 'Raleway' }} to="/shop">Shop</Link>
              </IconButton>
              <IconButton className="aments-nav">
                {user.email && <Link style={{ textDecoration: 'none', color: "white", fontSize: "18px", fontFamily: 'Raleway' }} to="/dashboard">Dashboard</Link>}
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                {
                  user?.email ? <Stack direction="row" spacing={2}>
                    <Avatar alt="" src={user?.photoURL} />
                  </Stack> : <AccountCircle />
                }
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
