import React from 'react'
import useOrders from "../hooks/order/useOrders.js";
import OrderCards from "../components/order/OrderCards.jsx";

const OrdersPage = () => {
    const {data, isLoading} = useOrders()

    if (isLoading) {
        return "Loading";
    }

    return (
        <OrderCards orders={data}/>
    )
}
export default OrdersPage
