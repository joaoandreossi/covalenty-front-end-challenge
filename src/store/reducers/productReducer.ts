import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import Product from "../../interfaces/Product"
import ProductStore from "../../interfaces/ProductStore"


export const DEFAULT_STATE: ProductStore = {
    currentProduct: null,
    history: []
}

const productSlice = createSlice({
    name: "product",
    initialState: DEFAULT_STATE,
    reducers: {
        selectProduct(state: ProductStore, value: PayloadAction<Product>){
            state.currentProduct = value.payload
            state.history.push(value.payload)
        },
        deselectProduct(state: ProductStore){
            state.currentProduct = null
        }
    }
})

const productReducer = productSlice.reducer


export const { selectProduct, deselectProduct } = productSlice.actions
export default productReducer
