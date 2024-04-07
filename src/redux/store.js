import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice/userSlice.js";
import projectReducer from "./userSlice/projectSlice.js";
export const store = configureStore({
  reducer: { user: userReducer, projects: projectReducer },
});
