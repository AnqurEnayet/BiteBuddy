import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import { Box, Button, List, ListItem, ListItemText, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { MyContext } from './Reusable/MyContext'

const MyCart = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const { orders, emptyOrder, deleteOrder, addReceipts } = useContext(MyContext)

    const [modalOpen, setModalOpen] = useState(false);

    const totalPrice = orders.reduce((total, order, index) => {
        if (index > 0) {
            return total + order.price;
        }
        return total;
    }, 0);



    const handleConfirmation = () => {
        setModalOpen(true)
    }

    const handleModalClose = () => {
        setModalOpen(false)
    }

    const handleReceipt=async()=>{

        addReceipts({name: orders[1]?.name, totalItems: orders.length-1, totalPrice: totalPrice})
        emptyOrder()
        navigate("/dashboard")

    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <h1>My Order List</h1>
            <NavBar />
            <Box>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>Item Index</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Restaurant Name</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Item Name</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Item Count</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Item Price</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {orders.map((order, orderIndex) => (
                                orderIndex > 0 && (
                                    <TableRow key={orderIndex}>
                                        <TableCell>{orderIndex}</TableCell>
                                        <TableCell>{order.name}</TableCell>
                                        <TableCell>{order.itemName}</TableCell>
                                        <TableCell>{order.itemCount}</TableCell>
                                        <TableCell>${order.price}</TableCell>
                                    </TableRow>

                                )))}
                            {orders.length - 1 >= 1 && (
                                <TableRow>
                                    <TableCell />
                                    <TableCell />
                                    <TableCell sx={{ fontWeight: 'bold' }}>Total</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>{orders.length - 1}</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>${totalPrice.toFixed(2)}</TableCell>
                                </TableRow>
                            )}

                        </TableBody>

                    </Table>
                </TableContainer>
                {orders.length - 1 >= 1 && (
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginTop: '20px'
                        }}
                    >
                        <Button variant='contained' color='info' onClick={() => handleConfirmation()}>Order Now</Button>
                    </Box>
                )}
            </Box>

            <Modal
                open={modalOpen}
                onClose={()=>handleModalClose()}
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
                            <Typography variant="h6" component="h2">
                                Do you confirm your order?
                            </Typography>
                            <Button color='success' onClick={()=>handleReceipt()}>Yes</Button>
                            <Button color='error' onClick={()=>handleModalClose()}>No</Button>
                </Box>
            </Modal>
        </Box>
    )
}

export default MyCart