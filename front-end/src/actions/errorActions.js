import axios from "axios";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./types";

// Check the token and load the user info
export const loadUser = () => (dispatch, getState) => {
  // User is loading
  dispatch({ type: USER_LOADING });

  // get token
  const token = getState().auth.token;

  // The header
  const config = {
    headers: {
      "Content-type": "application",
    },
  };

  // check if the token exists
  if (token) {
    config.headers["auth-token"] = token; // put it in header to be sent to the server
  }

  // fetch user from server
  axios
    .get("/api/auth/user", config)
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: AUTH_ERROR,
      });
    });
};
