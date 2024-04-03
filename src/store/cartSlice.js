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
      const itemid = state.items.findIndex(
        (item) => item["id"] === action.payload["id"]
      );

      if (itemid > -1) {
        state.items[itemid].quantity += 1;
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
    removeQuantity: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.items.findIndex((item) => item["id"] === itemId);
      if (state.items[cartItem].quantity > 1) {
        state.items[cartItem].quantity -= 1;
      }
    },
  },
});

export const { addItem, removeItem, removeQuantity } = cartSlice.actions;

export default cartSlice.reducer;
