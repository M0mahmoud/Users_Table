import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: null,
};
console.log("data", initialState.data);

export const getUsers = createAsyncThunk(
  "posts/getUsers",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const data = await axios.get(
        "https://random-data-api.com/api/v2/users?size=40"
      );
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUser(state, action) {
      state.data = state.data.filter((el) => {
        return el.id !== action.payload;
      });
    },
    addUser(state, action) {
      state.data.push(action.payload);
    },
    sort(state) {
      state.data.sort(function (a, b) {
        return a.id - b.id;
      });
    },
  },
  extraReducers: (builder) => {
    //fetch Users
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const userAction = usersSlice.actions;

export default usersSlice.reducer;
