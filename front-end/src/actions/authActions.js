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

// Function: loadUser
// Desc: Check the token and load the user info
export const loadUser = () => (dispatch, getState) => {
  // User is loading
  dispatch({ type: USER_LOADING });

  // fetch user from server
  axios
    .get("/api/users/login", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      // dispatch the function to set state of error
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

// Function: register
// register the user on the server
export const register = ({ firstName, lastName, email, password }) => (
  dispatch
) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  // assemble the body of the message about to be sent
  const body = JSON.stringify({ firstName, lastName, email, password });

  // send the package - header and body - to the server
  axios
    .post("/api/users/register", body, config)
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

// Function: login
// Desc: attempts to log the user into their account
export const login = ({ email, password }) => (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  axios
    .get("/api/login", body, config)
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({ type: LOGIN_FAIL });
    });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT_SUCCESS,
  });
};
