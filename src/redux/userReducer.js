import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk("REGISTER_USER", (newUser) => {
  return axios.post("/api/user", newUser).then((response) => response.data);
});

export const loginUser = createAsyncThunk("LOGIN_USER", (user) => {
  return axios.post("/api/user/login", user).then((response) => {
      console.log(response.data);
      return response.data
  });
});

export const loggedUser = createAsyncThunk("IS_LOGGED", () => {
  return axios.get("/api/user/logged").then((response) => {
      console.log(response.data);
      return response.data
  });
});

export const logoutUser = createAsyncThunk("LOGOUT_USER", () => {
  return axios.post("/api/user/logout").then((response) => {
      console.log(response.data);
      return response.data
  });
});

const initialState = {
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    password: null,
    roleId: null
};

const userReducer = createReducer(initialState, {
  [registerUser.fulfilled]: (state, action) => {
    alert(JSON.stringify(action.payload.user))
    // state = action.payload.user;
    return state;
  },
  [loginUser.fulfilled]: (state, action) => {
    state = action.payload.user;
    return state;
  },
  [loggedUser.fulfilled]: (state, action) => {
    state = action.payload.user;
    return state;
  },
  [logoutUser.fulfilled]: (state, action) => {
    return initialState;
  },
});

// const userReducer = createSlice(initialState, {
//     [registerUser.fulfilled]: (state, action) =>  {state.user = action.payload; return state},
// });

export default userReducer;
