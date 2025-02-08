import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "/productSlice/fetchProducts",
  async () => {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    return data;
  }
);

// Fetch products by category
export const fetchProductsByCategory = createAsyncThunk(
  "/productSlice/fetchProductsByCategory",
  async (category) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();
    return data;
  }
);

export const productSlice = createSlice({
  initialState: [],
  name: "productSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default productSlice.reducer;
