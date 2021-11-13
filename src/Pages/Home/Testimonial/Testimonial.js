import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { RatingView } from 'react-simple-star-rating'

const Testimonial = (props) => {
  const { name, coments, img, title, rating } = props.testimonial;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card data-aos="fade-up" data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" sx={{ minWidth: 275, }}>
        <CardMedia
          component="img"
          style={{ width: "30%", paddingBottom: '20px', margin: "0 auto" }}
          image={img}
          alt="green iguana"
        />
        <Typography data-aos="fade-up" variant="body1" component="div" sx={{ color: '#666' }}>
          {name} <br />
          <Box sx={{ mb: 1, fontSize: "13px", fontWeight: "bold" }}>{title}</Box>
        </Typography>
        <RatingView ratingValue={rating} /* RatingView Props */ />
        <CardContent data-aos="fade-up" data-aos-duration="1000">
          <Typography color="text.secondary" variant="body2" sx={{ mb: 2 }}>
            {coments.split(' ').slice(0, 40).toString().replace(/,/g, ' ')}...
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Testimonial;