import {configureStore} from "@reduxjs/toolkit";
import {productSlice} from "./ProductReducer.js";

export const store = configureStore({
    reducer:{
        product: productSlice.reducer
    }
});