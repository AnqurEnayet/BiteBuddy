import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, Menu } from '@mui/material';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import MyList from './Components/MyList';
import MyCart from './Components/MyCart'
import HomePage from './Components/HomePage';
import Menus from './Components/Menu'
import MyProvider from './Components/Reusable/MyContext';
import SignUp from './Components/SignUp';
//import './App.css';

function App() {
  return (
    <MyProvider>
    <Box>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/menu' element={<Menus/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/myList' element={<MyList/>}/>
          <Route path='/myCart' element={<MyCart/>}/>
        </Routes>
      </Router>
      
    </Box>
    </MyProvider>
      
  );
}

export default App;
