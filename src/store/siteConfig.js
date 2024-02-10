import { createSlice } from "@reduxjs/toolkit";

export const siteConfigSlice = createSlice({
  name: "siteConfig",
  initialState: {
    theme: "dark",
    isLoading: false,
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setTheme, setLoading } = siteConfigSlice.actions;
