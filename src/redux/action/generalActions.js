import axios from "axios";
// import { authenticate } from "../../auth/index";

export const getSignUp = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_SIGNUP_REQUEST" });
      let response = await axios.post(
        "http://localhost:8080/auth/signup",
        data
      );
      dispatch({ type: "GET_SIGNUP_SUCCESS", payload: response.data });
      console.log(response);
    } catch (error) {
      dispatch({
        type: "GET_SIGNUP_FAILED",
        payload: error.response.data.data,
      });
      // console.log(error.response.data.data);
    }
  };
};

export const getLogIn = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_LOGIN_REQUEST" });
      let response = await axios.post("http://localhost:8080/auth/login", data);
      dispatch({ type: "GET_LOGIN_SUCCESS", payload: response.data });
      localStorage.setItem("jwt", JSON.stringify(response.data));
      // authenticate(response.data);
      // console.log(response.data);
    } catch (error) {
      dispatch({
        type: "GET_LOGIN_FAILED",
        payload: error.response.data.message,
      });
      // console.log(error.response.data.message);
    }
  };
};

export const sendForgotPassword = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_FORGOT_PASSWORD_REQUEST" });
      let response = await axios.post(
        "http://55c4300906fc.ngrok.io/auth/forgetPassword",
        data
      );
      dispatch({ type: "GET_FORGOT_PASSWORD_SUCCESS", payload: response.data });
      console.log(response);
    } catch (error) {
      dispatch({
        type: "GET_FORGOT_PASSWORD_FAILED",
        payload: error.response.data.message,
      });
      // console.log(error.response);
    }
  };
};

export const sendResetPassword = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_RESET_PASSWORD_REQUEST" });
      let response = await axios.post(
        "http://localhost:8080/auth/resetPassword",
        data,
        {
          headers: {
            Authorization: data.resetPasswordLink,
          },
        }
      );
      dispatch({ type: "GET_RESET_PASSWORD_SUCCESS", payload: response.data });
      console.log(response);
    } catch (error) {
      dispatch({
        type: "GET_RSEET_PASSWORD_FAILED",
        payload: error.response.data.message,
      });
      // console.log(error.response);
    }
  };
};
