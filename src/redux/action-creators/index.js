import {SET_PRODUCTS} from "../action-types";
import {services} from "../../services";
import {TOOGLE_ITEM_IN_WISHLIST, TOOGLE_ITEM_IN_CART} from '../action-types'
const {productService}=services;

export const setProducts =(dispatch)=> async (dispatch)=> {
        const response = await productService.getProducts();
        const json = await response.json();
        dispatch(({type:SET_PRODUCTS, payload: json}));
};
export const toogleItemInWishList=(product)=>({type:TOOGLE_ITEM_IN_WISHLIST, payload:product})
export const toogleItemInCart=(product)=>({type:TOOGLE_ITEM_IN_CART, payload:product})