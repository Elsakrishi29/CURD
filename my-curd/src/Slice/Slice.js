import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "sample",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks = action.payload;
    },
    updateTask:(state,action)=>{
      state.tasks=action.payload;
    },
    removedTask:(state,action)=>{
      console.log(action);
        state.tasks=action.payload;
    }
  },
});

export const { addTask,removedTask,updateTask } = slice.actions;
export default slice.reducer;