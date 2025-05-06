import React, { useContext, useState } from 'react'
import axios from 'axios'

import { Box, TextField, Button, IconButton, FormControl, InputLabel, Input, Avatar, Typography, Grid, Link, Container } from '@mui/material'
import { Form, useNavigate } from 'react-router-dom'
import { MyContext } from './Reusable/MyContext'
import { Event, LockRounded } from '@mui/icons-material'

const Login = () => {

    const [userInput, setUserInput] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const { activeUser, handleActiveUser } = useContext(MyContext)

    const handleChange = (e) => {
        const newUserInput = { ...userInput }
        setUserInput(newUserInput => ({ ...newUserInput, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:5000/login', userInput);
            if (response.data.used) {
                await handleActiveUser(userInput.email, response.data.username)
                navigate("/dashboard")
            } else {
                alert(response.data.message)
            }

        } catch (error) {
            console.error('Error:', error);
        }
        //console.log("Email: ", userInput.email)
        //console.log("Password: ", userInput.password)

        //const username = await userInput.email.split('@')[0]

        //handleActiveUser(userInput.email, username)

        //console.log("Username: ", activeUser.username)

        setUserInput({
            email: '',
            password: ''
        })

        navigate("/dashboard")
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
                    Sign in
                </Typography>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <FormControl fullWidth margin="normal" required>
                        <InputLabel htmlFor='email'>Email</InputLabel>
                        <Input
                            id='email'
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={userInput.email}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal" required>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            id="password"
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={userInput.password}
                            onChange={handleChange}
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
                    <Link href='/signup' variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
            </Box>
        </Container>
    )
}

export default Login