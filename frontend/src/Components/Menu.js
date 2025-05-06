import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import { AppBar, Tabs, Tab, Container, Typography, Box, List, ListItem, ListItemText, Button, IconButton } from '@mui/material';
import { MyContext } from './Reusable/MyContext';
import { AccountCircle, NearMeDisabled } from '@mui/icons-material';
import NavBar from './NavBar';
import LoginSession from './Reusable/LoginSession';

const Menus = () => {

  const location = useLocation()
  const navigate = useNavigate()
  const { activeUser, orders, addOrder } = useContext(MyContext)

  const [itemTotal, setItemTotal] = useState(0)

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleCart = (itemId, itemName, itemPrice) => {
    setItemTotal((prevItemTotal) => (prevItemTotal + 1))
    addOrder({ name: location.state.name, itemId: itemId, itemName: itemName, price: itemPrice, itemCount: 1 })
    //console.log(orders.itemName)
  }

  const goToLogin=()=>{
    navigate("/login")
  }

  return (

    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Box>
        {activeUser.email !== '' && (
          <NavBar />
        )
        }
      </Box>
      <Box sx={{ position: 'absolute', padding: '5px', top: '5px', right: '15px' }}>
        {activeUser.email === '' ? (
          <Button type='submit' variant='contained' color='info' onClick={goToLogin}>Login</Button>
        ) : (
          <LoginSession/>

        )}

      </Box>

      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>{location.state.name}</h1>
        <AppBar position="static"
          sx={{
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '1000px'
          }}>
          <Tabs value={selectedTab} onChange={handleTabChange}>
            {location.state.categories.map((category, index) => (
              <Tab label={category.name} key={index} />
            ))}
          </Tabs>
        </AppBar>
        <Container>
          {location.state.categories.map((category, index) => (
            <Box
              key={index}
              id={category.name}
              hidden={selectedTab !== index}
              p={3}
              mt={3}
              sx={{ width: '100%' }}
            >
              {/*<Typography variant="h4" sx={{ marginRight: '150px'}}>{category.name}</Typography>*/}
              <List>
                {category.items.map((item, itemIndex) => (
                  <Box key={itemIndex}>
                    <ListItem>
                      <ListItemText sx={{ marginLeft: '150px'}}>
                        <strong>{item.name}</strong> - ${item.price}
                        <br />
                        Ingredients: {item.ingredients.join(", ")}
                      </ListItemText>
                      <Button variant='contained' 
                      onClick={activeUser.email === '' ? (goToLogin): () => handleCart(item.itemId, item.name, item.price)}
                        sx={{ marginRight: '150px'}}>Add</Button>
                    </ListItem>
                  </Box>
                ))}
              </List>
            </Box>
          ))}
        </Container>
      </Box>
    </Box>
  )
}

export default Menus