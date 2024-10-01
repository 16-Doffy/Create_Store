import userApi from "api/userApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const register = createAsyncThunk("users/register", async (payload) => {
  const data = await userApi.register(payload);
  // Call API to register
  // Save data to local storage
  localStorage.setItem("access_token", data.jwt);
  localStorage.setItem("user", JSON.stringify(data.user));
  // RETURN user data
  return data.user;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: {},
    settings: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error when loading starts
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.current = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const { reducer } = userSlice;
export default reducer;
