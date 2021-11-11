import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
  const { name, time } = booking;
  const { user } = useAuth()

  const handleBookingSubmit = e => {
    alert("submiting")

    // Collect data from the form
    // send to the server

    e.preventDefault();
    handleBookingClose()
  }
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBooking}
      onClose={handleBookingClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openBooking}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={handleBookingSubmit}>
            <TextField
              disabled
              id="filled-size-small"
              defaultValue={time}
              size="small"
              sx={{ width: '90%', m: 1 }}
            />
            <TextField
              id="filled-size-small"
              placeholder="Your Name"
              size="small"
              sx={{ width: '90%', m: 1 }}
            />
            <TextField
              id="filled-size-small"
              placeholder="Your Email"
              size="small"
              sx={{ width: '90%', m: 1 }}
            />
            <TextField
              id="filled-size-small"
              placeholder="Phone Number"
              size="small"
              sx={{ width: '90%', m: 1 }}
            />
            <TextField
              disabled
              id="filled-size-small"
              defaultValue={date.toDateString()}
              size="small"
              sx={{ width: '90%', m: 1 }}
            />
            <Button type='submit' variant="contained" sx={{ width: '90%', m: 1 }}>Submit Now</Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;