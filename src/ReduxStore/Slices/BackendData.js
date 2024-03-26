import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../middleware/AsyncThunk";

export const fetchDataSlice = createSlice({
  name: "FetchData",
  initialState: {
    IsLoading: true,
    error: null,
    DataValue: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.IsLoading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.IsLoading = false;
        state.DataValue = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.IsLoading = false;
        state.error = action.payload;
      });
  },
});

export const { GetData } = fetchDataSlice.actions;
