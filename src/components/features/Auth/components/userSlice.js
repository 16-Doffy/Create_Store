import userApi from "api/userApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StorageKeys from "constants/storage-key";

export const register = createAsyncThunk("users/register", async (payload) => {
  const data = await userApi.register({
    name: payload.name,
    email: payload.email,
    password: payload.password,
  });
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  return data.user;
});

export const login = createAsyncThunk("users/login", async (payload) => {
  const data = await userApi.login({
    email: payload.email,
    password: payload.password,
  });
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  return data.user;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: {},
    settings: {},
    
  },
  reducers: {
    logout(state) {
      // Xóa localStorage
      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.TOKEN);
      state.current = {}; // Đặt lại trạng thái current
      state.loading = false; // Đảm bảo không còn trạng thái loading
      state.error = null; // Xóa thông báo lỗi
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
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
        state.current = action.payload; // Đảm bảo action.payload chứa dữ liệu người dùng
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const {actions, reducer } = userSlice;
export const {logout} = actions;
export default reducer;