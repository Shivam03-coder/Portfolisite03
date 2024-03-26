import { createSlice } from "@reduxjs/toolkit";

export const AudioSlice = createSlice({
  name: "Audio",
  initialState: {
    IsPlaying: false,
  },
  reducers: {
    AudioPlayer: (state) => {
      state.IsPlaying = !state.IsPlaying;
    },
  },
});

export const { AudioPlayer } = AudioSlice.actions;
