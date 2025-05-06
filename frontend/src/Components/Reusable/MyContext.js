import React, { createContext, useState } from 'react'

export const MyContext = createContext()

const MyProvider = ({ children }) => {

    const [orders, setOrders] = useState([{}])
    const [receipts, setReceipts] = useState([{}])
    const [favorites, setFavorites] = useState([])
    const [cartMenu, setCartMenu] = useState(0)
    const [activeUser, setAcitveUser] = useState({
        email: '',
        username: ''
    })

    const addOrder = (newOrder) => {
        setOrders((prevOrders) => [...prevOrders, newOrder]);
    }

    const emptyOrder = () => {
        setOrders([])
    }

    const deleteOrder = (itemIndex) => {
        setOrders((prevOrders) => prevOrders.filter((_, index) => index !== itemIndex));
    }

    const addReceipts = (newReceipt) => {
        setReceipts(prevReceipt => [...prevReceipt, newReceipt])
    }

    const addFavorites = (newOne) => {
        setFavorites(prevOne => [...prevOne, newOne])
    }

    const handleActiveUser = (userEmail, userName) => {
        //const user = userEmail.split('@')[0]
        setAcitveUser({
            email: userEmail,
            username: userName
        })
    }

    const handleUserLogOut = (userEmail) => {
        setAcitveUser({
            email: '',
            username: ''
        })
    }

    const handleCartMenu=(id)=>{
        setCartMenu(id)
    }


    return (
        <MyContext.Provider
            value={{
                orders, receipts, activeUser, favorites, cartMenu,
                addFavorites, handleActiveUser, handleUserLogOut, addOrder, emptyOrder, deleteOrder, addReceipts, handleCartMenu
            }}
        >
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider