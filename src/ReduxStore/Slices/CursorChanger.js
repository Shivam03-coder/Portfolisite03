import { createSlice } from "@reduxjs/toolkit";

export const CursorChangerSlice = createSlice({
  name: "Cursor",
  initialState: {
    cursorValue: "default",
    IsMagicCursor: false,
  },
  reducers: {
    CursorChangerAction: (state) => {
      state.cursorValue = "pointer";
    },
    MagicCursorAction: (state) => {
      state.IsMagicCursor = !state.IsMagicCursor;
    },
  },
});

export const { CursorChangerAction, MagicCursorAction } =
  CursorChangerSlice.actions;
