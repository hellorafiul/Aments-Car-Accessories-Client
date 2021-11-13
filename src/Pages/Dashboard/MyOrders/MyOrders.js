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
import useAuth from './../../../hooks/useAuth';
import Typography from '@mui/material/Typography';

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setmyOrders] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/orders/${user?.email}`)
      .then(res => res.json())
      .then(data => setmyOrders(data))
  }, []);
  return (
    <div>
      <Typography variant="h2" sx={{ mb: 10, }}> My orders</Typography>
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
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {myOrders.map((row) => (
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
                    <DeleteIcon />
                  </IconButton></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Footer></Footer>
      </Box>
    </div>
  );
};

export default MyOrders;