import axios from "axios";
import { CLIENT_URL } from "../../constant";

export const getSingleUser = (id) => {
  console.log(id);
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_SINGLE_USER_REQUEST" });
      let response = await axios.get(`${CLIENT_URL}/getUser/${id}`);
      dispatch({ type: "GET_SINGLE_USER_SUCCESS", payload: response.data });
      console.log("SingleUser Action", response.data);
    } catch (error) {
      console.log(error);
      dispatch({
        type: "GET_SINGLE_USER_FAILED",
        payload: error.response,
      });
    }
  };
};

export const postCofounderChange = (data, id) => {
  console.log("id", id);
  console.log("data", data);
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_COFOUNDER_CHANGE_REQUEST" });
      let response = await axios.post(`${CLIENT_URL}/cofounder/${id}`, data);
      dispatch({
        type: "GET_COFOUNDER_CHANGE_SUCCESS",
        // payload: response.data,
      });
      console.log("SingleUser Action", response.data);
      dispatch(getSingleUser(id));
    } catch (error) {
      console.log(error);
      dispatch({
        type: "GET_COFOUNDER_CHANGE_FAILED",
        payload: error.response,
      });
    }
  };
};
