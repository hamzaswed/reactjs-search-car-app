import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeNameHandler(state, action) {
      state.name = action.payload;
    },
    changeCostHandler(state, action) {
      state.cost = action.payload;
    },
  },
});

export const { changeNameHandler, changeCostHandler } = formSlice.actions;
export const formReducer = formSlice.reducer;
