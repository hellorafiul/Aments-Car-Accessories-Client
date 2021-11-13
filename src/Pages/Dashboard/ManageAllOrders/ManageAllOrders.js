import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { RatingView } from 'react-simple-star-rating'
import { Box } from '@mui/material/';
import Footer from './../../Shared/Footer/Footer';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ManageAllOrders = () => {
  const [allOrders, setAllAllOrders] = useState([])

  useEffect(() =>
    fetch(`${process.env.REACT_APP_API}/orders`)
      .then(res => res.json())
      .then(data => {
        setAllAllOrders(data)
      })
    , [])
  return (
    <Box>
      <Typography variant="h2" sx={{ mb: 10, }}> Manage orders</Typography>
      <Box className="manage-products">
        <TableContainer component={Paper} className="manage-products">
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell >Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Ratting</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Update Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allOrders.map((row) => (
                <TableRow
                  key={row?._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell className="table-img" component="th" scope="row" >
                    <img src={row?.img} alt="" sx={{ width: "50px" }} />
                  </TableCell>
                  <TableCell >{row?.name}</TableCell>
                  <TableCell >${row?.price}</TableCell>
                  <TableCell ><RatingView ratingValue={row.rating} /* RatingView Props */ /></TableCell>
                  <TableCell >{row?.status}</TableCell>
                  <TableCell><IconButton aria-label="delete" disabled color="primary">
                    <CheckCircleOutlineIcon sx={{ color: "green", cursor: "pointer" }} />
                  </IconButton></TableCell>
                  <TableCell><IconButton aria-label="delete" disabled color="primary">
                    <DeleteIcon />
                  </IconButton></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Footer></Footer>
      </Box>
    </Box>
  );
};

export default ManageAllOrders;