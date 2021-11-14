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
import './ManageProducts.css'
import { Box } from '@mui/material/';
import Footer from './../../Shared/Footer/Footer';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

const ManageProducts = () => {
  const [allProducts, setAllProducts] = useState([])
  const [isDelete, setIsDelete] = useState(false)

  useEffect(() =>
    fetch(`${process.env.REACT_APP_API}/products`)
      .then(res => res.json())
      .then(data => {
        setAllProducts(data)
      })
    , [])

  // Delete products
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to Delete this Product?");
    const url = `${process.env.REACT_APP_API}/deleteProduct/${id}`
    if (proceed) {
      fetch(url, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount) {
            const remainingServices = allProducts.filter(pd => pd._id !== id);
            setAllProducts(remainingServices)
            setIsDelete(true)
          }

        }).catch(console.dir)
    }
  };
  return (
    <Box className="manage-products">
      <Typography variant="h2" sx={{ mb: 10, }}> Manage Products</Typography>
      <Typography sx={{ flexGrow: 1, mb: 5, mr: 20, ml: 20 }}>
        {isDelete && <Alert severity="success">
          Product Successfully Deleted!
        </Alert>}
      </Typography>
      <TableContainer component={Paper} className="manage-products">
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Image</TableCell>
              <TableCell >Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Ratting</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allProducts.map((row, index) => (
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
  );
};

export default ManageProducts; <h2>This is ManageProducts page</h2>