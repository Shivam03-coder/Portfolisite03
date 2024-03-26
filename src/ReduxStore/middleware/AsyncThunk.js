import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("data/fetchdata", async () => {
  try {
    const Response = await fetch(
      `https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${
        import.meta.env.VITE_API_KEY
      }`
    );

    if (!Response.ok) {
      throw new Error("Network response was not ok");
    }
    const { user } = await Response.json();
    return user;
  } catch (error) {
    throw error;
  }
});
