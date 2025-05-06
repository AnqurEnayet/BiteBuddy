import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import { Box, Card, CardActionArea, CardContent, Container, Grid, IconButton, Typography } from '@mui/material'
import { MyContext } from './Reusable/MyContext'
import { AccountCircle } from '@mui/icons-material'
import LoginSession from './Reusable/LoginSession'

const MyList = () => {
    const location = useLocation()

    const navigate = useNavigate()

    const { favorites, activeUser } = useContext(MyContext)

    const goToItems = (id) => {
        const restaurant = favorites.find((card) => card.id === id);
        if (restaurant) {
            navigate("/menu", { state: { name: restaurant.name, id: restaurant.id, categories: restaurant.categories, itemId: restaurant.itemId } });
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <NavBar />
            <LoginSession/>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',

            }}>
                <Typography
                    variant='h4'
                    sx={{ display: 'flex', justifyContent: 'center', mt: '5%', fontWeight: 'bold' }}
                >
                    My Favorites List
                </Typography>
                {favorites.map((card) => (
                    <Grid item key={card.id} xs={12} sm={6} md={4} sx={{ padding: '10px' }}>
                        <Card sx={{ width: '80%', ml: '10%' }}>
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
                        </Card>
                    </Grid>
                ))}

            </Container>
        </Box>
    )
}

export default MyList