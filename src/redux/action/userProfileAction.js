import axios from "axios";
import { CLIENT_URL } from "../../constant";

export const getSingleUser = (id) => {
  console.log(id);
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_SINGLE_USER_REQUEST" });
      let response = await axios.get(`${CLIENT_URL}/getUser/${id}`);
      dispatch({ type: "GET_SINGLE_USER_SUCCESS", payload: response.data });
      console.log(response.data);
    } catch (error) {
      console.log(error);
      dispatch({
        type: "GET_SINGLE_USER_FAILED",
        payload: error.response,
      });
    }
  };
};
