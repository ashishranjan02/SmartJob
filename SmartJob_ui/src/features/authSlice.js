import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { UI_BASE_URL } from "../utils/axios";

// 🔑 Async thunk for login
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const res = await axios.post(`${UI_BASE_URL}/login`, credentials);
      console.log("Login API response:", res.data);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);

const initialState = {
  users: null,
  token: null,
  loading: false,
  error: null,
  isAutenticated: false,
  role: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.users = null;
      state.token = null;
      state.loading = false;
      state.error = null;
      state.isAutenticated = false;
      state.role = null;
      localStorage.removeItem("authToken");
      localStorage.removeItem("userRole");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        const user = action.payload.user || action.payload.users;
        state.token = action.payload.token;
        state.users = user;
        state.role = user?.role?.toLowerCase() || null;
        state.isAutenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
