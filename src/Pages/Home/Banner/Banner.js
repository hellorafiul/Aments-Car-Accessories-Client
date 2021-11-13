import React from 'react';
import './Banner.css'
import Box from '@mui/material/Box';
import { Grid, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <Box className="banner">
      <Container>
        <Grid container spacing={2}>
          <Grid item sx={{ width: "50%", textAlign: "left" }}>
            <Typography data-aos="zoom-out-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" variant="subtitle1" gutterBottom component="div">
              World Best Quality
            </Typography>
            <Typography data-aos="zoom-out-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" sx={{ fontFamily: 'Raleway', fontWeight: "700", pb: 0, }} variant="h2" gutterBottom component="div">
              <span style={{ borderBottom: '3px solid red' }}>Ne</span>w Car Parts
            </Typography>
            <Typography data-aos="zoom-out-up" data-aos-easing="ease-in-sine"
              data-aos-duration="1000" sx={{ fontSize: "12px", fontFamily: 'Raleway', lineHeight: "20px" }} variant="body2" gutterBottom>
              Don't trust your vehicle to just any aftermarket part. Go with the peace of mind that comes with knowing your vehicle is in the best hands. Shop our selection of <strong>Aments Genuine Accessories</strong> designed to best equip your vehicle.
            </Typography>
            <Link to="/shop"><div data-aos="zoom-out-up"
              data-aos-duration="1000" data-aos-easing="ease-in-sine" className="box-2">
              <div className="custom-btn btn-three">
                <span>Shop Now</span>
              </div>
            </div></Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;