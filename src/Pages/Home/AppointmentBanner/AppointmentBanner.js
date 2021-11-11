import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
  background: `url(${bg})`,
  marginTop: 100,
  backgroundColor: 'rgba(45, 58, 74, 0.9)',
  backgroundBlendMode: 'darken, luminosity',
}

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: 500, marginTop: '-120px' }}
            src={doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={6} sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          textAlign: 'left',
          alignItems: 'center'
        }}>
          <Box sx={{ pr: 5, pl: 2 }}>
            <Typography variant="h6" sx={{ color: '#18D2B5', pb: 2 }}>
              Appointment
            </Typography>
            <Typography variant="h4" sx={{ color: 'white', pb: 1 }}>
              Make an Appointment Today
            </Typography>
            <Typography variant="" sx={{ color: 'white', mb: 4, display: 'block' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam quasi maiores eius id eos error. Earum quasi iusto similique?
            </Typography>
            <Button variant="contained" sx={{
              background: 'rgb(15,207,234)',
              background: 'linear-gradient(90deg, rgba(15,207,234,1) 0%, rgba(17,211,198,1) 0%, rgba(24,211,176,1) 0%, rgba(0,212,255,1) 100%);'
            }}>Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </Box >
  );
};

export default AppointmentBanner;