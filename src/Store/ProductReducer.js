import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import gamepad from "../Images/StoreItems/Gamepad.png";

const testState = [
    {sale: 40, image:gamepad, title:"HAVIT HV-G92 Gamepad", price: 200, rate: 4.5, totalRates:100, type:"sale"},
    {sale: 40, image:gamepad, title:"HAVIT HV-G92 Gamepad", price: 200, rate: 3.5, totalRates:100, type:"sale"},
    {sale: 40, image:gamepad, title:"HAVIT HV-G92 Gamepad", price: 200, rate: 5, totalRates:100, type:"sale"},
    {sale: 40, image:gamepad, title:"HAVIT HV-G92 Gamepad", price: 200, rate: 5, totalRates:100, type:"sale"},
    {sale: 40, image:gamepad, title:"HAVIT HV-G92 Gamepad", price: 200, rate: 5, totalRates:100, type:"sale"},
    {sale: 40, image:gamepad, title:"HAVIT HV-G92 Gamepad", price: 200, rate: 5, totalRates:100, type:"sale"},
];

export const fetchProducts = createAsyncThunk(
    "product/FETCH_PRODUCTS",
    async () => {
        const response = await fetch("");
        return await response.json();
    }
)

export const productSlice = createSlice({
    name: "products",
    initialState:{
        items:[],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'success';
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'error';
                state.items = testState
            })
    }
})

