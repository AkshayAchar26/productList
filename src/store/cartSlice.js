import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      if (state.items["id"] === item["id"]) {
        state.items["quantity"] += 1;
      } else {
        state.items.push({
          id: item["id"],
          title: item["title"],
          thumbnail: item["thumbnail"],
          price: item["price"],
          quantity: 1,
        });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload.item["id"]
      );
    },
  },
});

export const { toggleCart } = cartSlice.actions;

export default cartSlice.reducer;
