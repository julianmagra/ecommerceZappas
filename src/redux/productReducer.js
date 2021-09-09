import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("GET_PRODUCTS", (search) => {
    return axios.get(`/api/product?all=${search === "" ? 'true' : 'false'}&category=&search=${search}`)
    .then((response) => {
        return response.data
    })
})

export const getProductDetail = createAsyncThunk("GET_PRODUCT_DETAIL", (id) => {
    return axios.get(`/api/product/${id}`)
    .then((response) => {
        return response.data
    })
})

const initialState = {
    results: [],
    productDetail: {
        productModels: []
    },
};

const productReducer = createReducer(initialState, {
  [getProducts.fulfilled]:(state, action) => ({...state, results: action.payload.products}),
  [getProductDetail.fulfilled]:(state, action) => ({...state, productDetail: action.payload})
});

export default productReducer;