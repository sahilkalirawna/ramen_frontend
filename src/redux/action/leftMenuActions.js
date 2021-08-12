import axios from "axios";
import { CLIENT_URL } from "../../constant";

export const getQualitiesData = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_QUALITIES_REQUEST" });
      let response = await axios.get(`${CLIENT_URL}/sendQualitiesdata`);
      dispatch({ type: "GET_QUALITIES_SUCCESS", payload: response.data });
      console.log(response.data);
    } catch (error) {
      console.log(error);
      dispatch({
        type: "GET_QUALITIES_FAILED",
        payload: error.response,
      });
    }
  };
};

export const getSearchProfile = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_PROFILE_REQUEST" });
      let response = await axios.post(`${CLIENT_URL}/getSearchProfile`, data);
      dispatch({ type: "GET_PROFILE_DATA", payload: response.data });
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: "GET_PROFILE_DATA_FAILED",
        payload: error.response.data.message,
      });
    }
  };
};


