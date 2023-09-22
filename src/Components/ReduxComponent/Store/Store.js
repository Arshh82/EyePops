import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../Reducers/productSlice'

export const store = configureStore({
    reducer:{
        product: productReducer,
    },
})

export default store;