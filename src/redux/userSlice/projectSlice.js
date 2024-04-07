import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      // console.log("setProject");
      state.projects = action.payload;
    },
    removeProjects: (state) => {
      state.projects = [];
    },
  },
});

export const { removeProjects, setProjects } = projectSlice.actions;
export default projectSlice.reducer;
