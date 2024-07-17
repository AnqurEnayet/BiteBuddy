import { DashboardRounded, FavoriteRounded, Home, Search, ShoppingCart } from '@mui/icons-material'
import { AppBar, Box, IconButton, Toolbar, Drawer, ListItem, ListItemText, List, Link } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const NavBar = () => {
    const location = useLocation()

    const navigate = useNavigate()

    const handleSearch = () => {
        navigate("/")
    }

    const handleDashboard = () => {
        navigate("/dashboard")
    }

    const handleMyList = () => {
        navigate("/myList")
    }

    const handleMyCart = () => {
        navigate("/myCart")
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Drawer
                variant='permanent'
                anchor='left'
            >
                <List>
                    <ListItem onClick={handleSearch}>
                        <IconButton edge='start' color='inherit' aria-label='search'>
                            <Home />
                        </IconButton>
                        <Link to='/dashboard'
                            hover='true'
                            style={{ cursor: 'pointer' }}
                            sx={{ textDecoration: 'none', color: 'black' }}
                        >
                            <ListItemText primary='Home' />
                        </Link>
                    </ListItem>
                    <ListItem onClick={handleDashboard}>
                        <IconButton edge='start' color='inherit' aria-label='dashboard'>
                            <DashboardRounded />
                        </IconButton>
                        <Link to='/dashboard'
                            hover='true'
                            style={{ cursor: 'pointer' }}
                            sx={{ textDecoration: 'none', color: 'black', }}
                        >
                            <ListItemText primary='Dashboard' />
                        </Link>
                    </ListItem>
                    <ListItem onClick={handleMyList}>
                        <IconButton edge='start' color='inherit' aria-label='favourite'>
                            <FavoriteRounded />
                        </IconButton>
                        <Link to="/myList"
                            hover='true'
                            style={{ cursor: 'pointer' }}
                            sx={{ textDecoration: 'none', color: 'black' }}
                        >
                            <ListItemText primary='Favorites' />
                        </Link>
                    </ListItem>
                    <ListItem onClick={handleMyCart}>
                        <IconButton edge='start' color='inherit' aria-label='cart'>
                            <ShoppingCart />
                        </IconButton>
                        <Link to="/myCart"
                            hover='true'
                            style={{ cursor: 'pointer' }}
                            sx={{ textDecoration: 'none', color: 'black' }}
                        >
                            <ListItemText primary='Cart' />
                        </Link>
                    </ListItem>

                </List>


            </Drawer>


        </Box>
    )
}


export default NavBar