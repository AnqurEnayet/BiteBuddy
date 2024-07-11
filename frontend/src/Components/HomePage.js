import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import { Box, Button } from '@mui/material'
import Restaurant from './Restaurant'

const HomePage = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const goToLogin = () => {
        navigate("/login")
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative'
            }}
        >
            <Box sx={{ position: 'absolute', padding: '5px', top: '5px', right: '15px'  }}>
                <Button type='submit' variant='contained' color='info' onClick={goToLogin} >Login</Button>
            </Box>
            <Box sx={{padding: '40px'}}><h1>FOOD MART</h1></Box>
            <Box sx={{padding: '5px'}}><Restaurant /></Box>


        </Box>
    )
}

export default HomePage