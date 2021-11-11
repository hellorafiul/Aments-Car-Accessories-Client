import React from 'react';
import Services from './../Services/Services';
import AppointmentBanner from './../AppointmentBanner/AppointmentBanner';
import Banner from './../Banner/Banner';
import Navigation from './../../Shared/Navigation/Navigation';
import MainMenu from './../../Shared/Navigation/MainMenu';
import HotDeal from '../HotDeal/HotDeal';

const Home = () => {
  return (
    <div>
      <MainMenu></MainMenu>
      {/* <Navigation></Navigation> */}
      <Banner></Banner>
      <Services></Services>
      <HotDeal></HotDeal>
      {/* <AppointmentBanner></AppointmentBanner> */}
    </div>
  );
};

export default Home;