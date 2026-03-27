import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products', async () => {
    const response = await fetch('https://dummyjson.com/products');
    const responseJson = await response.json();
    return responseJson.products;
});

const initialState = {
    item:[],
    status:null,
    error:null
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
               state.status = 'succeeded',
               state.items = action.payload
        }); 
    }
});

export default productSlice.reducer