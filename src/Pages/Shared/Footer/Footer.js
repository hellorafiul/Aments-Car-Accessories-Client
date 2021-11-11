import React from 'react';
import './Footer.css'
import { Box, Grid, Container, Typography } from '@mui/material';
import logo from '../../../images/Aments-black.png'
import support from '../../../images/support-icon.webp'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <Box className="footer">
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <div className="footer-widget footer-widget-contact aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                <div className="footer-logo">
                  <img src={logo} alt="" />
                </div>
                <div className="footer-contact">
                  <p><strong>Aments</strong> has more than 25 years experiences in the field of automotive chassis parts, provides services of drive shaft renewing or repairing, also has a factory for manufacturing all kinds of drive shafts, CV joints and relatived parts</p>
                  <div className="customer-support">
                    <div className="customer-support-icon">
                      <img src={support} alt="" />
                    </div>
                    <div className="customer-support-text">
                      <span>Customer Support</span>
                      <Link className="customer-support-text-phone" to="/">(08) 123 456 789</Link>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ justifyContent: 'center' }}>
              <div className="footer-widget footer-widget-subscribe aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                <h3 className="footer-widget-title">Subscribe newsletter to get updated</h3>
                <form action="#" method="post">
                  <div className="footer-subscribe-box default-search-style d-flex">
                    <input className="default-search-style-input-box border-around border-right-none subscribe-form" type="email" placeholder="Enter your email" required="" />
                    <button className="default-search-style-input-btn" type="submit">Subscribe</button>
                  </div>
                </form>
                <p className="footer-widget-subscribe-note">We’ll never share your email address <br /> with a third-party.</p>
                <ul className="footer-social">
                  <li><Link to="" className="facebook"><i className="fa fa-facebook"></i></Link></li>
                  <li><Link to="" className="twitter"><i className="fa fa-twitter"></i></Link></li>
                  <li><Link to="" className="youtube"><i className="fa fa-youtube"></i></Link></li>
                  <li><Link to="" className="pinterest"><i className="fa fa-pinterest"></i></Link></li>
                  <li><Link to="" className="instagram"><i className="fa fa-instagram"></i></Link></li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className="footer-widget footer-widget-menu" data-aos="fade-up" data-aos-delay="600">
                <h3 className="footer-widget-title">Quick Links</h3>
                <div className="footer-menu">
                  <ul className="footer-menu-nav">
                    <li><Link to="/">Delivery</Link></li>
                    <li><Link to="/">About Us</Link></li>
                    <li><Link to="/">Contact us</Link></li>
                    <li><Link to="/shop">Stores</Link></li>
                  </ul>
                  <ul className="footer-menu-nav">
                    <li><Link to="/">Legal Notice</Link></li>
                    <li><Link to="/">Secure payment</Link></li>
                    <li><Link to="/">Sitemap</Link></li>
                    <li><Link to="/">My Account</Link></li>
                  </ul>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography className="author" sx={{ background: "#66666617", padding: "10px", borderBottom: '3px solid #ddd' }}>Powered by <Link to="//www.facebook.com/heyrafiul/" target="_blank">Md. Rafiul Alam</Link></Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;