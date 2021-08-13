import axios from "axios";
import { CLIENT_URL } from "../../constant";

export const sendMessage = (data, userId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_SEND_MESSAGE_REQUEST" });
      let response = await axios.post(
        `${CLIENT_URL}/sendMail/${data}/${userId}`
      );

      console.log(response.data);
      dispatch({
        type: "GET_SEND_MESSAGE_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_SEND_MESSAGE_FAILED",
        payload: error.response,
      });
    }
  };
};
