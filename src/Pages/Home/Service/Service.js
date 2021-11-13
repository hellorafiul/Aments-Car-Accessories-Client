import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link, useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { RatingView } from 'react-simple-star-rating'

const Service = (props) => {
  const { name, description, img, price, rating, _id } = props.service || {};
  console.log(_id)
  const history = useHistory()
  const handleDetails = (key) => {
    const uri = `/shop/${key}`
    console.log(uri)
    history.push(uri)
  }
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card data-aos="fade-up" data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" sx={{ minWidth: 275, }}>
        <CardMedia
          component="img"
          style={{ width: "80%", height: '70%', margin: "0 auto" }}
          image={img}
          alt="green iguana"
        />
        <RatingView ratingValue={rating} /* RatingView Props */ />
        <CardContent data-aos="flip-up" data-aos-duration="1000">
          <Typography data-aos="fade-up" variant="h5" component="div" sx={{ mb: 2 }}>
            {name}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            {description.split(' ').slice(0, 30).toString().replace(/,/g, ' ')}... See more
          </Typography>
        </CardContent>
        <Box data-aos="zoom-in-left" data-aos-duration="3000" sx={{ display: 'flex', justifyContent: 'space-around', borderTop: "1px solid #ddd", pt: 2 }}>
          <Typography variant="h5" component="div" sx={{ mb: 2 }}>
            <span style={{ color: 'red' }}>$</span>{price}
          </Typography>
          <Box style={{ textDecoration: 'none' }} onClick={() => handleDetails(_id)}><Button sx={{ color: 'red' }} variant="text">View Details</Button></Box>
        </Box>
      </Card>
    </Grid>
  );
};

export default Service;