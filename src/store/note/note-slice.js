import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "noteSlice",
  initialState: {
    noteList: [],
  },
  reducers: {
    setNotelist: (currentSlice, action) => {
      currentSlice.noteList = action.payload;
    },
  },
});

export const noteReducer = noteSlice.reducer;

export const { setNotelist } = noteSlice.actions;
