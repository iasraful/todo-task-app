/** @format */

import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const res = await axios.get(
    "https://run.mocky.io/v3/7ea49dd5-22c7-4d06-a775-88b66261634a"
  );
  return res.data;
});
const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    isLoadding: false,
    tasks: [],
    error: null,
  },
  reducers: {
    moveTask: (state, action) => {
      const { tasks } = current(state);
      const updatedTasks = tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, status: action.payload.status };
        }
        return task;
      });
      return { ...state, tasks: updatedTasks };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.isLoadding = true;
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.isLoadding = false;
      state.tasks = action.payload;
      state.error = null;
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.isLoadding = false;
      state.tasks = [];
      state.error = action.error.message;
    });
  },
});
export default taskSlice.reducer;
export const { moveTask } = taskSlice.actions;
