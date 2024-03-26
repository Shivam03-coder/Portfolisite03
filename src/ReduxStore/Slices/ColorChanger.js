import { createSlice } from "@reduxjs/toolkit";

export const ColorPickerSlice = createSlice({
  name: "Color",
  initialState: {
    colorValue: "",
  },
  reducers: {
    ColorChanger: (state, action) => {
      state.colorValue = action.payload;
    },
  },
});

export const ColorChangerActions = ColorPickerSlice.actions;
