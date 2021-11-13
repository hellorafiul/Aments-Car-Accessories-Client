import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from './../../../hooks/useAuth';
import { Typography, Box, Alert } from '@mui/material';

const AddAProduct = () => {

  const { user } = useAuth();
  const [productSuccess, setProductSuccess] = useState(false)

  const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    data.email = user?.email;
    fetch(`${process.env.REACT_APP_API}/addProduct`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
        if (result.insertedId) {
          setProductSuccess(true)
        }

      })
    console.log(data)
    reset();
  };
  return (
    <Box>
      <Typography>
        <Typography variant="h3"> Add Product</Typography>
        {productSuccess && <Alert severity="success">
          Product Added Successfully!
        </Alert>}
      </Typography>

      <form className="reviews" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true })}
          placeholder="Product name"
        />
        <input
          {...register("price", { required: true })}
          placeholder="Price"
          type='number'
        />
        <input
          {...register("rating", { required: true })}
          placeholder="Rating"
          type='number'
        />
        <textarea
          {...register("description", { required: true })}
          placeholder="Product Description"
        />
        <input
          {...register("img", { required: true })}
          placeholder="Product image link"
        />

        {errors.exampleRequired && <Typography>This field is required</Typography>}

        <input type="submit" />
      </form>
    </Box>

  );
};
export default AddAProduct;