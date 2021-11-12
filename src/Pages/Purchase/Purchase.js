import React, { useState, useEffect } from 'react';
import './Purchase.css'
import { Box, Divider, Grid, Typography, Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { RatingView } from 'react-simple-star-rating'

const Purchase = () => {
  const { id } = useParams()
  const [details, setDetails] = useState([])
  const [specificDetail, setSpecificDetail] = useState({})

  useEffect(() =>
    fetch("/services.json")
      .then(res => res.json())
      .then(data => {
        setDetails(data)
        console.log(data)
      })
    , [])


  useEffect(() => {
    if (details.length > 0) {
      const matchedData = details.find(detail => detail.id == id)
      // delete matchedData.id;
      setSpecificDetail(matchedData);
    }
  }, [details]);

  return (
    <Box sx={{ flexGrow: 1, mt: 15, mb: 15 }}>
      <Container><Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={4}>
          <Box><img src={specificDetail?.img} alt="" style={{ width: "100%" }} /></Box>
        </Grid>
        <Grid sx={{ textAlign: 'left' }} item xs={12} sm={8} md={8}>
          <Typography variant="h2" gutterBottom component="div">
            {specificDetail?.name}
          </Typography>
          <Typography variant="body2" gutterBottom component="div" sx={{ display: "flex", alignItems: 'center' }}>
            <Box sx={{ mr: 2 }}><RatingView ratingValue={specificDetail?.rating} /></Box>
            <Box>(Customer review {specificDetail?.rating} /5)</Box>
          </Typography>
          <Typography variant="h5" gutterBottom component="div" sx={{ color: "red", fontFamily: "monospace" }}>
            ${specificDetail?.price}
          </Typography>
          <Typography variant="body2" gutterBottom component="div" sx={{ mb: 3 }}>
            {specificDetail?.description}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Box className="variable-single-item" sx={{ mt: 2 }}>
            <span style={{ mb: 2 }}>Color</span>
            <Box className="product-variable-color">
              <label for="product-color-red">
                <input name="product-color" id="product-color-red" className="color-select" type="radio" checked />
                <span className="product-color-red"></span>
              </label>
              <label for="product-color-tomato">
                <input name="product-color" id="product-color-tomato" className="color-select" type="radio" />
                <span className="product-color-tomato"></span>
              </label>
              <label for="product-color-green">
                <input name="product-color" id="product-color-green" className="color-select" type="radio" />
                <span className="product-color-green"></span>
              </label>
              <label for="product-color-light-green">
                <input name="product-color" id="product-color-light-green" className="color-select" type="radio" />
                <span className="product-color-light-green"></span>
              </label>
              <label for="product-color-blue">
                <input name="product-color" id="product-color-blue" className="color-select" type="radio" />
                <span className="product-color-blue"></span>
              </label>
              <label for="product-color-light-blue">
                <input name="product-color" id="product-color-light-blue" className="color-select" type="radio" />
                <span className="product-color-light-blue"></span>
              </label>
            </Box>
          </Box>
          <Box className="d-flex align-items-center">
            <div className="variable-single-item ">
              <span>Quantity</span>
              <Box sx={{ display: 'flex', }}>
                <div className="product-variable-quantity">
                  <input min="1" max="100" value="1" type="number" />
                </div>
                <div className="product-add-to-cart-btn">
                  <button>Order Now</button>
                </div>
              </Box>
            </div>
          </Box>
          <Box className="product-details-meta mb-20">
            <ul>
              <li><a href="#"><i className="fas fa-heart"></i>Add to wishlist</a></li>
              <li><a href="#"><i className="far fa-share-square"></i>Compare</a></li>
            </ul>
          </Box>
        </Grid>
      </Grid></Container>
    </Box>
  );
};

export default Purchase;