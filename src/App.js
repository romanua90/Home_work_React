import React, {useEffect, useState, useMemo} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Header} from "./components/header";
import {ProductList} from "./components/product-list";
import {useServices} from "./services";
import {setProducts} from "./redux";


export default function App() {
    const {cart, wishlist, products} = useSelector(
        ({cart: {cart}, wishlist: {wishlist}, products: {products}}) => ({
            cart,
            wishlist,
            products
        })
    );

    const dispatch = useDispatch();
    const {productService} = useServices();
    // const fetchData = useCallback(async () => {
    //     const response = await productService.getProducts();
    //     const json = await response.json();
    //     dispatch(setProducts(json))
    //     console.log(json)
    // }, [])

    useEffect(() => {
        // fetchData();
        dispatch(setProducts())
    }, [])
    return (
        <div className='App'>
            <Header/>
            <br /><br /><br /><br /><br />
            <ProductList products={products}/>
        </div>
    );
}