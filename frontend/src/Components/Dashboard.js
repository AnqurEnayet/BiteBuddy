import React, { useContext, useState } from 'react'

import { AccountCircle, DashboardRounded, FavoriteRounded } from '@mui/icons-material'
import { AppBar, Box, IconButton, Toolbar, Drawer, ListItem, ListItemText, List, Link, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Table, Modal, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import { MyContext } from './Reusable/MyContext'
import LoginSession from './Reusable/LoginSession'

const Dashboard = () => {

  const location = useLocation()

  const navigate = useNavigate()

  const { receipts, activeUser } = useContext(MyContext)

  const [orderDetails, setOrderDetails] = useState([{
    'id': 1,
    'name': 'MADCHEF',
    'items': 3,
    'price': 500
  }])

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const showFullDetails = (id) => {

    const order = orderDetails.find((orders) => orders.id === id)
    setSelectedOrder(order)
    setModalOpen(true)
  }

  const handleClose = () => {
    setModalOpen(false);
    setSelectedOrder(null);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <NavBar />
      {/*<Box sx={{ position: 'absolute', padding: '5px', top: '5px', right: '15px' }}>
          <IconButton edge='start' color='inherit'>
            <AccountCircle/>
            <Typography
              hover='true'
              style={{ cursor: 'pointer' }}
              sx={{ textDecoration: 'none', color: 'black', ml: '5px' }}
            >{activeUser.username}
            </Typography>
          </IconButton>

      </Box>*/}
      <LoginSession/>
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: '5%'
        }}
      >

        <h1>List Of Completed Purchase Orders</h1>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'lightgray' }}>
                <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Restaurant Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Total Items</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Total Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderDetails.map((details) => (
                <TableRow
                  key={details.id}
                  hover={true}
                  style={{ cursor: 'pointer' }}
                  sx={{ '&:nth-of-type(odd)': { backgroundColor: 'whitesmoke' } }}
                  onClick={() => showFullDetails(details.id)}
                >
                  <TableCell>{details.id}</TableCell>
                  <TableCell>{details.name}</TableCell>
                  <TableCell>{details.items}</TableCell>
                  <TableCell>${details.price}</TableCell>
                </TableRow>
              ))}

              {receipts.map((receipt, receiptIndex) => (
                receiptIndex>0 &&(
                <TableRow
                  key={receiptIndex}
                  hover={true}
                  style={{ cursor: 'pointer' }}
                  sx={{ '&:nth-of-type(odd)': { backgroundColor: 'whitesmoke' } }}
                  onClick={() => showFullDetails(receiptIndex+1)}
                >
                  <TableCell>{receiptIndex+1}</TableCell>
                  <TableCell>{receipt.name}</TableCell>
                  <TableCell>{receipt.totalItems}</TableCell>
                  <TableCell>${receipt.totalPrice}</TableCell>
                </TableRow>
              )))}

            </TableBody>
          </Table>
        </TableContainer>

      </Box>

      <Modal
        open={modalOpen}
        onClose={handleClose}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          {selectedOrder && (
            <>
              <Typography variant="h6" component="h2">
                {selectedOrder.name}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                Price: {selectedOrder.price}
              </Typography>
            </>
          )}
        </Box>
      </Modal>

    </Box>
  )
}

export default Dashboard