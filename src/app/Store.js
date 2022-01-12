import {configureStore} from "@reduxjs/toolkit";
import carReducer from '../feature/carMenu/CarSlice'
export const store=configureStore({
    reducer:{
        car=carReducer
    },
})