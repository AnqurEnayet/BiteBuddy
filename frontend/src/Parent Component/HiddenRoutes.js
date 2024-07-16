import { Box } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { Router, Routes, Route, useNavigate } from 'react-router-dom'
import Dashboard from '../Components/Dashboard'
import MyList from '../Components/MyList'
import MyCart from '../Components/MyCart'
import { MyContext } from '../Components/Reusable/MyContext'


const HiddenRoutes = () => {

    const { activeUser, selectedMenu } = useContext(MyContext)
    const navigate = useNavigate()

    useEffect(() => {
            if (!activeUser.email) {
                navigate('/login');
            }
    }, [activeUser, navigate]);


    return (
        <Box>
                <Routes>
                
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/myList' element={<MyList />} />
                    <Route path='/myCart' element={<MyCart />} />
                </Routes>
        </Box>
    )
}

export default HiddenRoutes