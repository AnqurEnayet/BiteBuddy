import React from 'react'
import { useLocation } from 'react-router-dom'
import NavBar from './NavBar'
import { Box } from '@mui/material'

const MyList = () => {
    const location = useLocation()

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <h1>My Favorites List</h1>
            <NavBar />
        </Box>
    )
}

export default MyList