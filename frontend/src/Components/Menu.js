import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import { AppBar, Tabs, Tab, Container, Typography, Box, List, ListItem, ListItemText, Button } from '@mui/material';

const Menus = () => {

  const location = useLocation()
  const navigate = useNavigate()

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleCart =(itemName, itemPrice)=>{
    
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1>{location.state.name}</h1>
      <AppBar position="static"
        sx={{
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
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
          >
            <Typography variant="h4">{category.name}</Typography>
            <List>
              {category.items.map((item, itemIndex) => (
                <Box key={itemIndex}>
                  <ListItem>
                    <ListItemText>
                      <strong>{item.name}</strong> - ${item.price}
                      <br />
                      Ingredients: {item.ingredients.join(", ")}
                    </ListItemText>
                    <Button variant='contained' onClick={handleCart(item.name, item.price)}>Add</Button>
                  </ListItem>
                </Box>
              ))}
            </List>
          </Box>
        ))}
      </Container>
    </Box>
  )
}

export default Menus