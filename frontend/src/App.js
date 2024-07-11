import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, Menu } from '@mui/material';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import MyList from './Components/MyList';
import MyCart from './Components/MyCart'
import HomePage from './Components/HomePage';
import Menus from './Components/Menu'
//import './App.css';

function App() {
  return (
    <Box>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/menu' element={<Menus/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/myList' element={<MyList/>}/>
          <Route path='/myCart' element={<MyCart/>}/>
        </Routes>
      </Router>
      
    </Box>
      
  );
}

export default App;
