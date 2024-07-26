import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userBasket: []
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.userBasket = [...state.userBasket, action.payload]
        },
        removeProduct: (state, action) => {
            state.userBasket = state.userBasket.filter((_,index) => index !== action.payload)
        }
    }
})

export const { addProduct, removeProduct } = basketSlice.actions;
export const selectBasket = (state) => state.basket.userBasket;
export default basketSlice.reducer;