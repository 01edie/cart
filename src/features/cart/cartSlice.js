import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";
//creating slice
//same for every feature, name and value will vary

const initialState = {
  cartItems: data,
  quantity: 0,
  total: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeItem: (state, action) => {
      console.log(2);
      console.log(action);
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increase: (state, action) => {
      let cartItem = state.cartItems.find((item) => item.id === action.payload);
      cartItem.quantity = cartItem.quantity + 1;
      console.log(cartItem);
      console.log(action);
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.quantity = cartItem.quantity - 1;
    },
    clearCart: (state, action) => {
      state.cartItems = [];
    },
    calc: (state) => {
      let quantity = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        quantity += item.quantity;
        total += item.quantity * item.price;
      });
      state.quantity = quantity;
      state.total = total.toFixed(2);
    },
  },
});
console.log(cartSlice);
export const { removeItem, increase, decrease, clearCart, calc } = cartSlice.actions;
export default cartSlice.reducer;
