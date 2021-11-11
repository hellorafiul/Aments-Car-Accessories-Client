import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert, AlertTitle } from '@mui/material';
import login from '../../../images/signUp.svg'
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    console.log(newLoginData)
    setLoginData(newLoginData)
  }

  const handleLoginSubmit = e => {

    if (loginData.password !== loginData.password2) {
      alert('Your Password is not matched')
      return
    }

    registerUser(loginData.email, loginData.password, loginData.name, history)
    e.preventDefault();
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 12 }} item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          {!isLoading && <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: '75%', m: 1 }}
              id="standard-basic"
              label="Your Name"
              name="name"
              type="text"
              onBlur={handleOnBlur}
              variant="standard" />
            <TextField
              sx={{ width: '75%', m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              type="email"
              onBlur={handleOnBlur}
              variant="standard" />
            <TextField
              sx={{ width: '75%', m: 1 }}
              id="standard-basic"
              label="Password"
              name="password"
              onBlur={handleOnBlur}
              type="password"
              variant="standard" />
            <TextField
              sx={{ width: '75%', m: 1 }}
              id="standard-basic"
              label="Confirm Password"
              name="password2"
              onBlur={handleOnBlur}
              type="password"
              variant="standard" />
            <Button
              sx={{ width: '75%', m: 1 }}
              type="submit"
              variant="contained">Register</Button>
            <NavLink style={{ textDecoration: "none", p: 1 }} to="/login"><Button variant="text" style={{ textTransform: "capitalize" }}>Already have an Account? Please Login</Button></NavLink>
          </form>}
          {isLoading && <CircularProgress />}
          {user?.email && <Alert severity="success">
            <strong>Congratulations!</strong> Your Account has been created successfully.
          </Alert>}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: '100%' }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;