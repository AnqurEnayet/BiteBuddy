import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import { Box, Card, CardActionArea, CardContent, Container, Grid, Typography } from '@mui/material'
import { MyContext } from './Reusable/MyContext'

const MyList = () => {
    const location = useLocation()

    const navigate = useNavigate()

    const { favorites } = useContext(MyContext)

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
            <h1>My Favorites List</h1>
            <NavBar />
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                marginLeft: '140px'
            }}>

                {favorites.map((card) => (
                    <Grid item key={card.id} xs={12} sm={6} md={4} sx={{ padding: '10px' }}>
                        <Card sx={{width: '100%'}}>
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