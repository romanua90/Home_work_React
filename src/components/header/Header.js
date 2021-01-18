import React, {useMemo} from 'react';
import {useSelector} from "react-redux";

export const Header = (props) => {
    const {cart, wishlist}= useSelector(({cart:{cart}, wishlist: {wishlist}}) => ({
        wishlist,
        cart}));
    const wishlistPrice = useMemo(()=>{
        return wishlist.reduce((acc, el) => (acc += el.price), 0)},
        [wishlist])
    const cartPrice = useMemo(()=>{return cart.reduce((acc,el) => (acc += el.price), 0)},
        [cart]);


    return (

        <header className='d-flex justify-between align-center'>
            <h2>Hello in Fake Shop</h2>
            <div className='d-flex justify-between'>
                <div className='mx-10' title={wishlistPrice}>wishlist: {wishlist.length}</div>
                <div className='mx-10' title={cartPrice}>cart: {cart.length}</div>
            </div>

        </header>
    )
}