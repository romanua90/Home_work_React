import React from 'react';
import {useSelector} from "react-redux";

export const Header = (props) => {
    const {cart, wishlist}= useSelector(({cart:{cart}, wishlist: {wishlist}}) => ({
        wishlist,
        cart}));
    return (

        <header className='d-flex justify-between align-center'>
            <h2>Hello in Fake Shop</h2>
            <div className='d-flex justify-between'>
                <div className='mx-10'>wishlist: {wishlist.length}</div>
                <div className='mx-10'>cart: {cart.length}</div>
            </div>

        </header>
    )
}