import React from 'react'
import CardsContainer from "../shared/CardsContainer.jsx";
import OrderCard from "./OrderCard.jsx";

const OrderCards = ({orders}) => {
    return (
        <CardsContainer>
            {orders.map((order) => (
                <React.Fragment key={order.id}>
                    <OrderCard order={order}/>
                </React.Fragment>
            ))}
        </CardsContainer>
    )
}
export default OrderCards
