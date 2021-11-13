import React from 'react';
import Services from './../Services/Services';
import Banner from './../Banner/Banner';
import MainMenu from './../../Shared/Navigation/MainMenu';
import HotDeal from '../HotDeal/HotDeal';
import AllTestimonials from '../AllTestimonials/AllTestimonials';
// import Testimonial from './../Testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      <MainMenu></MainMenu>
      <Banner></Banner>
      <Services limit="6"></Services>
      <HotDeal></HotDeal>
      <AllTestimonials></AllTestimonials>
    </div>
  );
};

export default Home;