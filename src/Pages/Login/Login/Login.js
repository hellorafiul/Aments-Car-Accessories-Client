import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import login from '../../../images/login.svg'
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const [loginData, setLoginData] = useState({})
  const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData)
  }

  const handleLoginSubmit = e => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history)
  }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 12 }} item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: '75%', m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onChange={handleOnChange}
              variant="standard" />
            <TextField
              sx={{ width: '75%', m: 1 }}
              id="standard-basic"
              label="Your Password"
              name="password"
              onChange={handleOnChange}
              type="password"
              variant="standard" />
            <Button
              sx={{ width: '75%', m: 1 }}
              type="submit"
              variant="contained">Login</Button>
            <NavLink style={{ textDecoration: "none", p: 1 }} to="/register"><Button variant="text" style={{ textTransform: "capitalize" }}>New user? please Register</Button></NavLink>
          </form>
          {isLoading && <CircularProgress />}
          {user?.email && <Alert severity="success">
            Login Success!
          </Alert>}
          {authError && <Alert severity="error">{authError}</Alert>}
          <p>------------------------------------------</p>
          <Button
            sx={{ width: '50%', m: 1, textTransform: "capitalize" }}
            type="submit"
            size="small"
            onClick={handleGoogleSignIn}
            variant="outlined"><GoogleIcon sx={{ pr: 1 }} color="primary" />SignIn with Google</Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: '100%' }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;