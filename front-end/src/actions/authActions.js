import axios from "axios";
import { returnErrors } from "./errorActions";
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

  // fetch user from server
  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

// setup config and token
export const tokenConfig = (getState) => {
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

  return config;
};
