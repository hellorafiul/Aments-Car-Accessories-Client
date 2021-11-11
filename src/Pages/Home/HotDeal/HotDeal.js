import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, Container, Typography } from '@mui/material';
import wheel from "../../../images/wheel.webp"
import vails from "../../../images/vails.webp"
import piston from "../../../images/piston.webp"
import offerBg from "../../../images/offerBg.webp"
import './HotDeal.css'

const HotDeal = () => {
  return (
    <Container sx={{ mb: 15 }}>
      <Typography sx={{ fontFamily: 'Raleway', fontWeight: "700", pb: 0, float: "left" }} variant="h3" gutterBottom component="div">
        <span style={{ borderBottom: '3px solid red', fontStyle: 'italic' }}>Pop</span>ular Categories
      </Typography>
      <Box sx={{ flexGrow: 1, pt: 20 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <div className="banner-single " data-aos="fade-right" data-aos-easing="linear"
              data-aos-duration="1500">
              <div className="banner-image">
                <img className="banner-img" src={wheel} alt="" />
              </div>
              <div className="banner-content">
                <span className="banner-text-tiny">Car Wheel</span>
                <h3 className="banner-text-large">30% Off</h3>
                <Link to="/shop" className="banner-link">Shop Now</Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="banner-single " data-aos="fade-up" data-aos-easing="linear"
              data-aos-duration="1500">
              <div className="banner-image">
                <img className="banner-img" src={vails} alt="" />
              </div>
              <div className="banner-content">
                <span className="banner-text-tiny">Car Vails</span>
                <h3 className="banner-text-large">40% Off</h3>
                <Link to="/shop" className="banner-link">Shop Now</Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="banner-single " data-aos="fade-left" data-aos-easing="linear"
              data-aos-duration="1500">
              <div className="banner-image">
                <img className="banner-img" src={piston} alt="" />
              </div>
              <div className="banner-content">
                <span className="banner-text-tiny">Car Piston</span>
                <h3 className="banner-text-large">50% Off</h3>
                <Link to="/shop" className="banner-link">Shop Now</Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>

      <Box style={{ marginTop: "10px" }} className="banner-single" data-aos="fade-up" data-aos-easing="linear"
        data-aos-duration="1500">
        <Box className="banner-image">
          <img className="banner-img banner-img-big" src={offerBg} alt="" />
        </Box>
        <div className="banner-content">
          <span className="banner-text-small">2021 Latest Collection</span>
          <h2 className="banner-text-big"><span className="banner-text-big-highlight">-40%</span> Offer All Car Parts</h2>
        </div>
      </Box>

    </Container>
  );
};

export default HotDeal;