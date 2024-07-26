import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice'
import basketReducer from './basket/basketSlice'
import { jsonPlaceholderApi } from "./services/jsonplaceholder";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        basket: basketReducer,
        [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jsonPlaceholderApi.middleware)
})

setupListeners(store.dispatch)
export default store;