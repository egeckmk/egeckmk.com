import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { aboutsSlice } from "./abouts.js";
import { worksSlice } from "./works.js";
import { blogsSlice } from "./blogs.js";
import { usersSlice } from "./user.js";
import { siteConfigSlice } from "./siteConfig.js";

const rootReducer = combineReducers({
  abouts: aboutsSlice.reducer,
  works: worksSlice.reducer,
  blogs: blogsSlice.reducer,
  users: usersSlice.reducer,
  siteConfig: siteConfigSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
