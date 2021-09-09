import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";


//CREATE ORDER
export const createOrder = createAsyncThunk("CREATE_ORDER", (userID) => {
    return axios.post(`/api/${userID}`)
    .then((response) => {
        return response.data
    })
})

//ADD PRODUCT TO USER CART
export const addProductToCart = createAsyncThunk("ADD_PRODUCT_TO_CART", (orderID) => {
    return axios.post(`/api/${orderID}/addProduct`)
    .then((response) => {
        return response.data
    })
})

const initialState = {
    userCart: [],
};

const cartReducer = createReducer(initialState, {
  [addProductToCart.fulfilled]:(state, action) => ({...state, userCart: action.payload}),
});

export default cartReducer;