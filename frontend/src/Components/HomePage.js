import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import { Box, Button, IconButton, Link, Typography } from '@mui/material'
import Restaurant from './Restaurant'
import { MyContext } from './Reusable/MyContext'
import { AccountCircle } from '@mui/icons-material'

const HomePage = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const { activeUser, handleUserLogOut } = useContext(MyContext)

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
            <Box sx={{ position: 'absolute', padding: '5px', top: '5px', right: '15px' }}>
                {activeUser.email === '' ? (
                    <Button type='submit' variant='contained' color='info' onClick={goToLogin}>Login</Button>
                ) : (
                    <IconButton edge='start' color='inherit'>
                        <AccountCircle />
                        <Typography
                            hover='true'
                            style={{ cursor: 'pointer' }}
                            sx={{ textDecoration: 'none', color: 'black', ml: '5px' }}
                        >{activeUser.username}
                        </Typography>
                    </IconButton>

                )}

            </Box>
            <Box>
                {activeUser.email !== '' && (
                    <NavBar />
                )
                }
            </Box>
            <Box sx={{ padding: '40px' }}><h1>BITE BUDDY</h1></Box>
            <Box sx={{ padding: '5px', ml: "5%" }}><Restaurant /></Box>


        </Box>
    )
}

export default HomePage