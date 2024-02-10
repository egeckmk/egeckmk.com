import { createSlice } from "@reduxjs/toolkit";

export const worksSlice = createSlice({
  name: "works",
  initialState: {
    works: [],
  },
  reducers: {
    setWorks: (state, action) => {
      state.works = action.payload;
    },
  },
});

export const { setWorks } = worksSlice.actions;
