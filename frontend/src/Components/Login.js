import React, { useContext, useState } from 'react'
import { Box, TextField, Button, IconButton, FormControl, InputLabel, Input } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { MyContext } from './Reusable/MyContext'

const Login = () => {

    const[userInput, setUserInput] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const {activeUser, handleActiveUser} = useContext(MyContext)

    const handleChange =(e)=>{
        const newUserInput = {...userInput}
        setUserInput(newUserInput => ({...newUserInput, [e.target.name]: e.target.value}))
    }

    const handleSubmit =async (e, userEmail) => {
        e.preventDefault() 
        console.log("Email: ", userInput.email)
        console.log("Password: ", userInput.password)

        handleActiveUser(userInput.email)

        //console.log("Username: ", activeUser.username)

        setUserInput({
            email: '',
            password: ''
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
            <form onSubmit={()=>handleSubmit(event, userInput.email)}>
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
                    <Button type='submit' variant='contained' color='primary'>Login</Button>
                </FormControl>
            </form>
        </Box>
    )
}

export default Login