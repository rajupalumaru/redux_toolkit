import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './reducer/CartReducer';
const Store = configureStore({
    reducer: {
        CartReducer: CartReducer
    }
})
export default Store;