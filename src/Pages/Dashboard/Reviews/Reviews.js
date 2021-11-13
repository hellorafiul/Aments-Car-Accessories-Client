import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './Reviews.css'
import useAuth from './../../../hooks/useAuth';
import { Typography, Box, Alert } from '@mui/material';

const Reviews = () => {
  const { user } = useAuth();
  const [reviewSuccess, setreviewSuccess] = useState(false)
  console.log(reviewSuccess)

  const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    data.email = user?.email;
    fetch(`${process.env.REACT_APP_API}/reviews`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
        if (result.insertedId) {
          setreviewSuccess(true)
        }

      })
    console.log(data)
    reset();
  };
  return (
    <Box>
      <Typography>
        <Typography variant="h3"> Place A Review</Typography>
        {reviewSuccess && <Alert severity="success">
          Review submitted Successfully!
        </Alert>}
      </Typography>

      <form className="reviews" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true })}
          placeholder="Your name"
        />
        <input
          {...register("title", { required: true })}
          placeholder="Your job title"
        />
        <input
          {...register("rating", { required: true })}
          placeholder="Your rating out of 5"
          type='number'
        />
        <textarea
          {...register("coments", { required: true })}
          placeholder="Add your comments"
        />
        <input
          {...register("img", { required: true })}
          placeholder="Your image link"
        />

        {errors.exampleRequired && <Typography>This field is required</Typography>}

        <input type="submit" />
      </form>
    </Box>

  );
};

export default Reviews;