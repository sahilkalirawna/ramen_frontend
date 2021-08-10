import axios from "axios";
// import { authenticate } from "../../auth/index";
import { CLIENT_URL } from "../../constant";

// export const resetState = () => {
//   return (dispatch) => {
//     const data = localStorage.getItem("jwt");

//     if (data) {
//       dispatch({ type: "GET_LOGIN_SUCCESS", payload: data });
//     }
//   };
// };

export const getSignUp = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_SIGNUP_REQUEST" });
      let response = await axios.post(`${CLIENT_URL}/auth/signup`, data);
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

export const getLogIn = (data, history) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_LOGIN_REQUEST" });
      let response = await axios.post(`${CLIENT_URL}/auth/login`, data);
      dispatch({ type: "GET_LOGIN_SUCCESS", payload: response.data });
      // console.log(response.data);
      // eslint-disable-next-line no-restricted-globals
      history.push("/");
    } catch (error) {
      dispatch({
        type: "GET_LOGIN_FAILED",
        payload: error.response.data.message,
      });
      // console.log(error.response.data.message);
    }
  };
};

export const getLogOut = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_LOGOUT_REQUEST" });
      dispatch({ type: "GET_LOGOUT_SUCCESS" });
    } catch (error) {
      dispatch({
        type: "GET_LOGOUT_FAILED",
        payload: "Logout Failed",
      });
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
