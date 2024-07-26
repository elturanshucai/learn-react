import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value > 0 ? state.value -= 1 : null
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        decrementByAmount: (state, action) => {
            state.value -= action.payload
        }
    }
})
export const { increment, incrementByAmount, decrement, decrementByAmount } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;
export default counterSlice.reducer;