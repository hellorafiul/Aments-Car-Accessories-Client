import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import { RatingView } from 'react-simple-star-rating'
import { Box } from '@mui/material/';
import Footer from './../../Shared/Footer/Footer';
import useAuth from './../../../hooks/useAuth';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setmyOrders] = useState([]);
  const [isCancel, setIsCancel] = useState(false)
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/orders/${user?.email}`)
      .then(res => res.json())
      .then(data => setmyOrders(data))
  }, []);

  // Cancel Order
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to Cancel this order?");
    const url = `${process.env.REACT_APP_API}/cancelOrder/${id}`
    if (proceed) {
      fetch(url, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount) {
            setIsCancel(true)
            const remainingServices = myOrders.filter(pd => pd._id !== id);
            setmyOrders(remainingServices)
          }
          console.log(data)
        }).catch(console.dir)
    }
  };

  return (
    <Box>
      <Typography variant="h2" sx={{ mb: 10, }}> My orders</Typography>
      <Typography sx={{ flexGrow: 1, mb: 5, mr: 20, ml: 20 }}>
        {isCancel && <Alert severity="success">
          Your Order has been Canceled Successfully!
        </Alert>}
      </Typography>
      <Box className="manage-products">
        <TableContainer component={Paper} className="manageOrder">
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Image</TableCell>
                <TableCell >Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Ratting</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {myOrders.map((row, index) => (
                <TableRow
                  key={row?._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell className="table-img" component="th" scope="row" >
                    {index}
                  </TableCell>
                  <TableCell className="table-img" component="th" scope="row" >
                    <img src={row?.img} alt="" sx={{ width: "50px" }} />
                  </TableCell>
                  <TableCell >{row?.name}</TableCell>
                  <TableCell >${row?.price}</TableCell>
                  <TableCell ><RatingView ratingValue={row.rating} /* RatingView Props */ /></TableCell>
                  <TableCell >{row?.status}</TableCell>
                  <TableCell><IconButton onClick={() => handleDelete(row._id)} aria-label="delete" color="error">
                    <CancelIcon />
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

export default MyOrders;