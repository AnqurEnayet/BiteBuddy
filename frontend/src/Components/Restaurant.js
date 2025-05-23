import { FavoriteRounded } from '@mui/icons-material'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography, Button, IconButton } from '@mui/material'
import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyContext } from './Reusable/MyContext'

const Restaurant = () => {

  const navigate = useNavigate()

  const {favorites, activeUser, addFavorites} = useContext(MyContext)

  const [restaurantInfo, setRestaurantInfo] = useState([{
    id: 1,
    name: 'MADCHEF',
    description: 'Fast food restaurant with variety of foods. Great interior decoration.',
    categories: [
      {
        name: "Burgers",
        items: [
          {
            itemId: 11,
            name: "Beef Burger",
            price: 10.99,
            ingredients: ["Beef patty", "Lettuce", "Tomato", "Cheese", "Bun"]
          },
          {
            itemId: 12,
            name: "Chicken Burger",
            price: 9.99,
            ingredients: ["Chicken patty", "Lettuce", "Tomato", "Cheese", "Bun"]
          }
        ]
      },
      {
        name: "Pizzas",
        items: [
          {
            itemId: 13,
            name: "Margherita",
            price: 12.99,
            ingredients: ["Tomato sauce", "Mozzarella", "Basil"]
          },
          {
            itemId: 14,
            name: "Pepperoni",
            price: 13.99,
            ingredients: ["Tomato sauce", "Mozzarella", "Pepperoni"]
          }
        ]
      },
      {
        name: "Rice Items",
        items: [
          {
            name: "Chicken Biryani",
            price: 11.99,
            ingredients: ["Rice", "Chicken", "Spices"]
          },
          {
            name: "Vegetable Fried Rice",
            price: 8.99,
            ingredients: ["Rice", "Vegetables", "Soy sauce"]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'WOODHOUSE GRILL',
    description: 'The best steak in town with variety of options.',
    categories: [
      {
        name: "Burgers",
        items: [
          {
            itemId: 11,
            name: "Beef Burger",
            price: 10.99,
            ingredients: ["Beef patty", "Lettuce", "Tomato", "Cheese", "Bun"]
          },
          {
            itemId: 12,
            name: "Chicken Burger",
            price: 9.99,
            ingredients: ["Chicken patty", "Lettuce", "Tomato", "Cheese", "Bun"]
          }
        ]
      },
      {
        name: "Pizzas",
        items: [
          {
            itemId: 13,
            name: "Margherita",
            price: 12.99,
            ingredients: ["Tomato sauce", "Mozzarella", "Basil"]
          },
          {
            itemId: 14,
            name: "Pepperoni",
            price: 13.99,
            ingredients: ["Tomato sauce", "Mozzarella", "Pepperoni"]
          }
        ]
      },
      {
        name: "Rice Items",
        items: [
          {
            name: "Chicken Biryani",
            price: 11.99,
            ingredients: ["Rice", "Chicken", "Spices"]
          },
          {
            name: "Vegetable Fried Rice",
            price: 8.99,
            ingredients: ["Rice", "Vegetables", "Soy sauce"]
          }
        ]
      }
    ]
  }])

  const [menu, setMenu] = useState([{}])

  const goToItems = async (id) => {
    const restaurant = restaurantInfo.find((card) => card.id === id);
    if (restaurant) {
      navigate("/menu", { state: { name: restaurant.name, id: restaurant.id, categories: restaurant.categories, itemId: restaurant.itemId } });
    }
  };

  const handleMyList=(cardId)=>{
    if (!favorites.find(fav=>fav.id===cardId) && activeUser.email!==''){
    const favorite = restaurantInfo.find(res=> res.id===cardId)
    addFavorites(favorite)
  }
    navigate("/myList")
  }



  return (
    <Container>
      <Grid container spacing={4}>
        {restaurantInfo.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea onClick={() => goToItems(card.id)}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions onClick={()=>handleMyList(card.id)}>
                <IconButton aria-label="add to favorites">
                  <FavoriteRounded/>
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>


  )
}

export default Restaurant