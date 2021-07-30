import axios from "axios";

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
