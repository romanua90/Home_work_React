import React from "react";


export const ProductItem = ({
                                onAddToWhichList,
                                onAddToCart,
                                product,
                                product: {id, title, price, description}
                            }) => {
    return (
        <div key={id}>
            <h4>{id}</h4>
            <h4>{title}</h4>
            <h4>{price}</h4>
            <h4>{description}</h4>
            <button onClick={() => onAddToWhichList(product)}>add to wishlist</button>
            <button onClick={() => onAddToCart(product)}>add to cart</button>
            <hr/>
        </div>
    )
}