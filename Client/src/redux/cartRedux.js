import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    quantity: 0,
    total: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.quantity += 1;
            state.cartItems.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        removeFromCart: (state, action) => {
            state.quantity -= 1;
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
            state.total -= action.payload.price * action.payload.quantity;
        },
        clearCart: (state) => {
            state.quantity = 0;
            state.cartItems = [];
            state.total = 0;
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
