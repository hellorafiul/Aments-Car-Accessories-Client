import React from 'react';
import { Box } from '@mui/material';
import comingSoon from '../../../images/comingSoon.jpg'
import './PayNow.css'

const PayNow = () => {
  return (
    <Box className="pay-now">
      <img src={comingSoon} alt="" />
    </Box>
  );
};

export default PayNow;