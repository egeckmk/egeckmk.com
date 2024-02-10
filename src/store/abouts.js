import { createSlice } from "@reduxjs/toolkit";

export const aboutsSlice = createSlice({
  name: "abouts",
  initialState: {
    items: [],
  },
  reducers: {
    setAboutItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setAboutItems } = aboutsSlice.actions;
