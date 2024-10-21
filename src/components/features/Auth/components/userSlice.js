import userApi from "api/userApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const register = createAsyncThunk("users/register", async (payload) => {
  const data = await userApi.register({
    name: payload.name,
    email: payload.email,
    password: payload.password,
  });
  localStorage.setItem("access_token", data.jwt);
  localStorage.setItem("user", JSON.stringify(data.user));
  return data.user;
});

export const login = createAsyncThunk("users/login", async (payload) => {
  const data = await userApi.login({
    email: payload.email,
    password: payload.password,
  });
  localStorage.setItem("access_token", data.jwt);
  localStorage.setItem("user", JSON.stringify(data.user));
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
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error when loading starts
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.current = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const { reducer } = userSlice;
export default reducer;
