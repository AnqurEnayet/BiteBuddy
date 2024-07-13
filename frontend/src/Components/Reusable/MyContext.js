import React, { createContext, useState } from 'react'

export const MyContext = createContext()

const MyProvider = ({children}) => {

    const [orders, setOrders] = useState([{}])
    const [receipts, setReceipts] = useState([{}])

    const addOrder=(newOrder)=>{
        setOrders((prevOrders) => [...prevOrders, newOrder]);
    }

    const emptyOrder=()=>{
        setOrders([])
    }

    const deleteOrder=(itemIndex)=>{
        setOrders((prevOrders) => prevOrders.filter((_, index) => index !== itemIndex));
    }

    const addReceipts=(newReceipt)=>{
        setReceipts(prevReceipt=>[...prevReceipt, newReceipt])
    }


    return (
        <MyContext.Provider value={{orders, receipts, addOrder, emptyOrder, addReceipts}}>
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider