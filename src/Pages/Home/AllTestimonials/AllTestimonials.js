import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material/';
import Testimonial from './../Testimonial/Testimonial';

const testimonials = [
  {
    rating: 5,
    title: "Banker",
    name: 'Regina Miles',
    coments: 'Fantastic service. They easily understand my car issue and work on it. Very quick and reliable service.',
    img: 'https://i.ibb.co/GtTDpQn/user-1.png'
  },

  {
    rating: 2,
    title: "Freelancer",
    name: 'Karen Hudson',
    coments: 'Michael was very accommodating on my return/exchange transaction. But the Indian guy was very rude and Bossy. All I was asking was the time of delivery, but he told me to get my phone and check on autozone at northern blvd if the item is available. So he refered me to a rival company. As I was reasoning to him that my phone is not with me that i left it in the car, he told me sarcastically that “yeah its really far, like in florida”. Bottomline is, all i wanted to find out was the time my order will be delivered, but why he has to complicate things up? Maybe my wife is using my phone on an overseas call or maybe my daughter is playing on it. It does not matter! I just want the time it will be delivered, thats all. But I appreciate his sarcasm of telling me that he just wanted for my family’s safety especially that a storm is coming. (IDK he is also a weatherman). Point of the matter is that, he just wanted to boss around people and wanted to do things his way. He cant be talking that way if he is in customer service/sales. I ended up refunding my item instead of exchanging it. 5 star for Michael and Thumbs down for the Rude guy.',
    img: 'https://i.ibb.co/N9JXGdh/user-3.png'

  },
  {
    rating: 5,
    title: "Developer",
    name: 'Sofia Koller',
    coments: 'Good and prompt service and fair price, otherwise I would have been stuck in the city',
    img: 'https://i.ibb.co/vd0GSjJ/user-2.png'

  }
]

const AllTestimonials = () => {
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