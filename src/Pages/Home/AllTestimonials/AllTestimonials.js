import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material/';
import Testimonial from './../Testimonial/Testimonial';



const AllTestimonials = () => {
  const [testimonials, setTestimonials] = React.useState([]);
  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/reviews`)
      .then(res => res.json())
      .then(data => {
        [data[1], data[2]] = [data[2], data[1]]
        setTestimonials(data)
      })
  }, [])
  return (
    <Box sx={{ flexGrow: 1, mt: 5 }} style={{ paddingBottom: '100px' }}>
      <Container>
        <Typography sx={{ fontFamily: 'Raleway', fontWeight: "700", pb: 0, float: "left", mb: 10 }} variant="h3" gutterBottom component="div">
          <span style={{ borderBottom: '3px solid red', fontStyle: 'italic' }}>Happy</span> Clients says
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ paddingTop: "30px" }}>
          {testimonials.map(testimonial =>
            <Testimonial
              key={testimonial.name}
              testimonial={testimonial}
            ></Testimonial>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default AllTestimonials;