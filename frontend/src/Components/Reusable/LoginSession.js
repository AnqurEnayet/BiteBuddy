import { AccountCircle, Logout } from '@mui/icons-material'
import { Avatar, Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { MyContext } from './MyContext'

const LoginSession = () => {
    const { activeUser, handleUserLogOut } = useContext(MyContext)
    const [menuOpen, setMenuOpen] = useState(null)

    const handleOpen=(e)=>{
        setMenuOpen(e.target)
    }

    const handleClose=()=>{
        setMenuOpen(null)
    }

    return (
        <Box sx={{ position: 'absolute', padding: '5px', top: '5px', right: '15px' }}>
            <IconButton edge='start' onClick={handleOpen}>
                <Avatar 
                sx={{textTransform: 'uppercase', backgroundColor: 'Purple'}}
                >
                    {activeUser.username[0]}
                    </Avatar>
                <Typography
                    hover='true'
                    style={{ cursor: 'pointer' }}
                    sx={{ textDecoration: 'none', color: 'black', ml: '5px' }}
                >{activeUser.username}
                </Typography>
            </IconButton>
            <Menu
                id="account-menu"
                anchorEl={menuOpen}
                open={Boolean(menuOpen)}
                onClose={handleClose}
                sx= {{
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleUserLogOut}>
                    <Logout sx={{color: 'red', mr: '10px'}}/> Logout
                </MenuItem>
                <MenuItem>
                    <Avatar sx={{bgcolor: 'Violet', mr: '10px'}} /> My Profile
                </MenuItem>
                </Menu>
        </Box>

    )
}

export default LoginSession