import React from 'react';
import {ProductItem} from "../product-item";
import {useDispatch, useSelector} from "react-redux";
import {toogleItemInCart, toogleItemInWishList} from "../../redux/action-creators";


export const ProductList = ({products}) => {
    const dispatch=useDispatch();
    const wishlist=useSelector(({wishlist:{wishlist}})=> wishlist)
    const cart=useSelector(({cart:{cart}})=> cart)


    const onAddToWhichList=(product)=>{
        dispatch(toogleItemInWishList(product));
    };
    const onAddToCart=(product)=>{
        dispatch(toogleItemInCart(product))
    };
    return (
        <div>
            {products.map((product)  =>(
                <ProductItem
                    isAddedToWishlist={!!wishlist.find(({id})=>id === product.id)}
                    isAddedToCart={!!cart.find(({id})=>id === product.id)}
                    onAddToWhichList={onAddToWhichList}
                    onAddToCart={onAddToCart}
                    product={product}
                    key={product.id}/>
                ))}
        </div>
    );
};