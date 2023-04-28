// import { createSlice } from "@reduxjs/toolkit";
// const slice = createSlice({
//   name: "sample",
//   initialState: {
//     tasks: [],
//   },
//   reducers: {
//     addTask: (state, action) => {
//       state.tasks = action.payload;
//     },
//     updateTask:(state,action)=>{
//       state.tasks[action.payload.index][action.payload.key]=action.payload.event;
//     },
//     removedTask:(state,action)=>{
//       console.log(action);
//         state.tasks=action.payload;
//     }
//   },
// });

// export const { addTask,removedTask,updateTask } = slice.actions;
// export default slice.reducer;


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
      state.tasks[action.payload.index].taskName=action.payload.taskName;
      state.tasks[action.payload.index].taskDescription=action.payload.taskDescription;
    },
    removedTask:(state,action)=>{
      console.log(action);
        state.tasks=action.payload;
    }
  },
});

export const { addTask,removedTask,updateTask } = slice.actions;
export default slice.reducer;