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
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import './ManageAllOrders.css'

const ManageAllOrders = () => {
  const [allOrders, setAllAllOrders] = useState([])
  const [isDelete, setIsDelete] = useState(false)

  useEffect(() =>
    fetch(`${process.env.REACT_APP_API}/orders`)
      .then(res => res.json())
      .then(data => {
        setAllAllOrders(data)
      })
    , [allOrders])

  // Delete Order
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to Delete this order?");
    const url = `${process.env.REACT_APP_API}/cancelOrder/${id}`
    if (proceed) {
      fetch(url, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount) {
            const remainingServices = allOrders.filter(pd => pd._id !== id);
            setAllAllOrders(remainingServices)
            setIsDelete(true)
          }

        }).catch(console.dir)
    }
  };

  // // Update Status
  // const handleStatus = (id) => {
  //   // const status = "Shipped"
  //   fetch(`${process.env.REACT_APP_API}/orders/${id}`, {
  //     method: 'PUT',
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify({ status: "shipped" })
  //   })
  //     .then(res => res.json())
  // };

  return (
    <Box>
      <Typography variant="h2" sx={{ mb: 10, }}> Manage orders</Typography>
      <Typography sx={{ flexGrow: 1, mb: 5, mr: 20, ml: 20 }}>
        {isDelete && <Alert severity="success">
          Order Successfully Removed!
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
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allOrders.map((row, index) => (
                <TableRow
                  key={row?._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>
                    {index}
                  </TableCell>
                  <TableCell className="table-img" component="th" scope="row" >
                    <img src={row?.img} alt="" sx={{ width: "50px" }} />
                  </TableCell>
                  <TableCell >{row?.name}</TableCell>
                  <TableCell >${row?.price}</TableCell>
                  <TableCell ><RatingView ratingValue={row.rating} /* RatingView Props */ /></TableCell>
                  <TableCell >{row?.status}</TableCell>
                  <TableCell>
                    <Button size="small" sx={{ textTransform: 'none' }}>Mark as Shipped</Button>
                  </TableCell>
                  <TableCell><IconButton onClick={() => handleDelete(row._id)} aria-label="delete" color="error">
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