import React, { useState } from 'react'
import { Box, TextField, Button, IconButton, FormControl, InputLabel, Input } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const[userInput, setUserInput] = useState({
        'email': '',
        'password': ''
    })

    const navigate = useNavigate()

    const handleChange =(e)=>{
        const newUserInput = {...userInput}
        setUserInput(newUserInput => ({...newUserInput, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault() 
        console.log("Email: ", userInput.email)
        console.log("Password: ", userInput.password)

        setUserInput({
            'email': '',
            'password': ''
        })

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
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth margin="normal" required>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
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
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={userInput.password}
                    onChange={handleChange}
                    />
                </FormControl>
                <FormControl fullWidth margin='normal'>
                    <Button type='submit' variant='contained' color='primary'>Login</Button>
                </FormControl>
            </form>
        </Box>
    )
}

export default Login