import {TOOGLE_ITEM_IN_WISHLIST} from '../action-types'
import {useState} from 'react'

const initialState = {
    wishlist: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE_ITEM_IN_WISHLIST: {
            const updatedWishlist = state.wishlist.filter(
                (el) => el.id !== action.payload.id
                );
            if (updatedWishlist.length ===  state.wishlist.length) {
                updatedWishlist.push(action.payload);
            }
            return {...state, wishlist: updatedWishlist};
        }
        default: {
            return state;
        }
    }
}