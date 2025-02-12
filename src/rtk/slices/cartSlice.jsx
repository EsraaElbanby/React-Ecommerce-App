import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addProduct: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const clonProduct = { ...action.payload, quantity: 1 };
        state.push(clonProduct);
      }
    },
    deleteProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clear: (state) => {
      return (state = []);
    },
  },
});

export const { addProduct, deleteProduct, clear } = cartSlice.actions;
export default cartSlice.reducer;
