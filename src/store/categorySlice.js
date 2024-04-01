import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
};

const categorySlice = createSlice({
  name: "cat",
  initialState,
  reducers: {
    setCat: (state, action) => {
      if (state.category === action.payload) {
        state.category = "";
      } else {
        state.category = action.payload;
      }
    },
  },
});

export const { setCat } = categorySlice.actions;

export default categorySlice.reducer;
