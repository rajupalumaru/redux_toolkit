import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cartValues: [],
    totalPrice: 0
}
const CartReducer = createSlice({
    name: "CartReducer",
    initialState,
    reducers: {
        incrementCart: (state, action) => {
            state.cartValues.push(action.payload)
            const priceArray = state.cartValues.map((obj) => obj.prodctPrice )
            state.totalPrice = priceArray.reduce((a, b) => a + b)
        }
    }
})

export const { incrementCart } = CartReducer.actions;
export default CartReducer.reducer;