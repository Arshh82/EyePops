import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../Reducers/productSlice'
import cartReducer from '../Reducers/cartSlice'

export const store = configureStore({
    reducer:{
        product: productReducer,
        cart: cartReducer
    },
})

export default store;