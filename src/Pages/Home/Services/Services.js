import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material/';
import Service from './../Service/Service';


const Services = ({ limit }) => {
  const [services, setServices] = useState([]);
  useEffect(() =>
    fetch(`${process.env.REACT_APP_API}/products?limit=${limit}`)
      .then(res => res.json())
      .then(data => {
        setServices(data)
        console.log(data)
      })

    , [])

  return (
    <Box sx={{ flexGrow: 1, mt: 5 }} style={{ paddingTop: "30px", paddingBottom: '100px' }}>
      <Container>
        <Typography sx={{ fontFamily: 'Raleway', fontWeight: "700", pb: 0, float: "left" }} variant="h3" gutterBottom component="div">
          <span style={{ borderBottom: '3px solid red', fontStyle: 'italic' }}>Ne</span>w Arrivals
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ paddingTop: "30px" }}>
          {services.map(service =>
            <Service
              key={service._id}
              service={service}
            ></Service>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;