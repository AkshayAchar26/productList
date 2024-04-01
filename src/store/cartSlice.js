import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

const cartSlice = createSlice({
  name: cart,
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { toggleCart } = cartSlice.actions;

export default cartSlice.reducer;
