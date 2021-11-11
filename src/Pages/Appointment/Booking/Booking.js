import React from 'react';
import { Button, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import BookingModal from './../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
  const { name, time, space } = booking;
  const [openBooking, setBookingOpen] = React.useState(false);
  const handlebookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
          <Typography variant="h4" gutterBottom component="div" sx={{ color: "rgb(15,207,234)" }}>
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div" sx={{ color: "gray" }} >
            {time}
          </Typography>
          <Typography variant="body" sx={{ fontWeight: "bold" }} display="block" gutterBottom>
            {space} Spaces Available
          </Typography>
          <Button variant="contained" sx={{
            background: 'rgb(15,207,234)',
            background: 'linear-gradient(90deg, rgba(15,207,234,1) 0%, rgba(17,211,198,1) 0%, rgba(24,211,176,1) 0%, rgba(0,212,255,1) 100%);',
            mt: 2,
          }}
            onClick={handlebookingOpen}
          >Book an Appointment</Button>
        </Paper>
      </Grid>
      <BookingModal
        booking={booking}
        handleBookingClose={handleBookingClose}
        openBooking={openBooking}
        date={date}

      ></BookingModal>
    </>
  );
};

export default Booking;