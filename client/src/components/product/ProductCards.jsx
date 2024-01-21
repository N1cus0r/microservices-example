import React from "react";
import CardsContainer from "../shared/CardsContainer.jsx";
import ProductCard from "./ProductCard.jsx";

const ProductCards = ({products}) => {
    return (
        <CardsContainer>
            {products.map((product) => (
                <React.Fragment key={product.id}>
                    <ProductCard  product={product}/>
                </React.Fragment>
            ))}
        </CardsContainer>
    )
}
export default ProductCards
