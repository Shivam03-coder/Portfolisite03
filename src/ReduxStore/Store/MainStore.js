import { configureStore } from "@reduxjs/toolkit";
import { ColorPickerSlice } from "../Slices/ColorChanger";
import { CursorChangerSlice } from "../Slices/CursorChanger";
import { fetchDataSlice } from "../Slices/BackendData";
import { AudioSlice } from "../Slices/AudioSlice";

export const MainStore = configureStore({
  reducer: {
    Color: ColorPickerSlice.reducer,
    Cursor: CursorChangerSlice.reducer,
    FetchData: fetchDataSlice.reducer,
    Audio: AudioSlice.reducer,
  },
});
