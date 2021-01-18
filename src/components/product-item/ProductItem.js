import React from "react";


export const ProductItem = ({
                                isAddedToWishlist,
                                isAddedToCart,
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
            <button
                style={{background:isAddedToWishlist ? 'red' : 'green'}}
                onClick={() => onAddToWhichList(product)}>
                {isAddedToWishlist ? 'remove from wishlist' : 'add to wishlist'}</button>
            <button
                style={{background:isAddedToCart ? 'red' : 'green'}}
                onClick={() => onAddToCart(product)}>
                {isAddedToCart ? 'remove from cart' : 'add to cart'}</button>
            <hr/>
        </div>
    )
}