import React, { useState, useEffect } from 'react';
import './Purchase.css'
import { Box, Divider, Grid, Typography, Container, Alert } from '@mui/material';
import { useParams } from 'react-router-dom';
import { RatingView } from 'react-simple-star-rating'
import useAuth from './../../hooks/useAuth';

const Purchase = () => {
  const { user } = useAuth();
  const { id } = useParams()
  const [details, setDetails] = useState([])
  const [specificDetail, setSpecificDetail] = useState({})
  const [confirmOrder, setConfirmOrder] = useState(false)

  useEffect(() =>
    fetch(`${process.env.REACT_APP_API}/products`)
      .then(res => res.json())
      .then(data => {
        setDetails(data)
        console.log(data)
      })
    , [])


  useEffect(() => {
    if (details.length > 0) {
      const matchedData = details.find(detail => detail._id == id)
      delete matchedData.id;
      setSpecificDetail(matchedData);
    }
  }, [details]);


  // Handle Book now 
  const handleBookNow = (order) => {
    fetch(`${process.env.REACT_APP_API}/orders/`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          setConfirmOrder(true)
        }
      })
  }

  return (
    <Box sx={{ flexGrow: 1, mt: 15, mb: 15 }}>
      <Typography sx={{ flexGrow: 1, mb: 5, mr: 20, ml: 20 }}>
        {confirmOrder && <Alert severity="success">
          Order Completed Successfully!
        </Alert>}
      </Typography>
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
                  <button onClick={() => handleBookNow({
                    email: user?.email,
                    status: 'Pending',
                    name: specificDetail?.name,
                    price: specificDetail?.price,
                    description: specificDetail?.description,
                    rating: specificDetail?.rating,
                    img: specificDetail?.img
                  })}>Order Now</button>
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