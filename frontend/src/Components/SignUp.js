import { LockRounded } from '@mui/icons-material'
import { Avatar, Box, Button, Container, FormControl, Grid, Input, InputLabel, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { MyContext } from './Reusable/MyContext'

const SignUp = () => {

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        username: ''
    })

    const { handleActiveUser } = useContext(MyContext)

    const navigate = useNavigate()

    const handleChange = (e) => {
        const newUser = { ...userInfo }
        setUserInfo(newUser => ({ ...newUser, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:5000/signup', userInfo);
            if (response.data.used) {
                alert(response.data.message)
            } else {
                console.log('Email:', userInfo.email)
                console.log('username: ', userInfo.username)
                handleActiveUser(userInfo.email, userInfo.username)

                navigate("/dashboard")
            }


            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }





    }


    return (
        <Container component='main' maxWidth="xs" sx={{ mt: '7%' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockRounded />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <FormControl fullWidth margin="normal" required>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input
                            id="username"
                            type='username'
                            name='username'
                            placeholder='Username'
                            value={userInfo.username}
                            onChange={handleChange}
                            autoComplete='true'
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal" required>
                        <InputLabel htmlFor='email'>Email</InputLabel>
                        <Input
                            id='email'
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={userInfo.email}
                            onChange={handleChange}
                            autoComplete='true'
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal" required>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            id="password"
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={userInfo.password}
                            onChange={handleChange}
                            autoComplete='true'
                        />
                    </FormControl>
                    <FormControl fullWidth margin='normal'>
                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                        >
                            Sign In
                        </Button>

                    </FormControl>
                </form>
                <Grid>
                    <Link to='/login' variant="body2">
                        {"Already have an account? Sign In"}
                    </Link>
                </Grid>
            </Box>
        </Container>
    )
}

export default SignUp