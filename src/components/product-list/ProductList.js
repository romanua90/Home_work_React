import React from 'react';
import {ProductItem} from "../product-item";
import {useDispatch, useSelector} from "react-redux";
import {toogleItemInCart} from "../../redux/action-creators";
import {toogleItemInWishList} from "../../redux/action-creators";


export const ProductList = ({products}) => {
    const dispatch=useDispatch();
    const onAddToWhichList=(product)=>{
        dispatch(toogleItemInWishList(product));
    };
    const onAddToCart=(product)=>{
        dispatch(toogleItemInCart(product))
    };
    return (
        <div>
            {products.map((product)  =>(
                <ProductItem onAddToWhichList={onAddToWhichList} onAddToCart={onAddToCart} product={product} key={product.id}/>
                ))}
        </div>
    );
};