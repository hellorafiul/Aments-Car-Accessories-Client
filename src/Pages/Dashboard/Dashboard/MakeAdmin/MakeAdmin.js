import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Typography, Box, Alert } from '@mui/material';
import useAuth from './../../../../hooks/useAuth';

const MakeAdmin = () => {
  const { user } = useAuth();
  const [success, setSuccess] = useState(false)

  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    fetch(`${process.env.REACT_APP_API}/users/admin`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        if (result.modifiedCount) {
          setSuccess(true)
        }

      })
    reset();
  };
  return (
    <Box>
      <Typography>
        <Typography variant="h4"> Make an admin</Typography>
        {success && <Alert severity="success">
          Admin added successfully!
        </Alert>}
      </Typography>

      <form className="reviews" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", { required: true })}
          placeholder="Add Email"
          type="email"
        />

        {errors.exampleRequired && <Typography>This field is required</Typography>}

        <input type="submit" />
      </form>
    </Box>
  );
};

export default MakeAdmin;