import { configureStore } from '@reduxjs/toolkit';
import countReducer from './slice/counterSlice.js';
import loadingReducer from './slice/loadingSlice.js';
import productReducer from "./slice/productSlice.js";

const store = configureStore({
    reducer : {
        count : countReducer,
        loading : loadingReducer,
        product : productReducer
    }
})

export default store