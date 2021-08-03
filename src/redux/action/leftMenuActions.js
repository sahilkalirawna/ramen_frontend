import axios from "axios";
// import { CLIENT_URL } from "../../constant";

export const getQualitiesData = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_QUALITIES_REQUEST" });
      let response = await axios.get(`http://localhost:8080/sendQualitiesdata`);
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
  console.log(data);
  return async (dispatch) => {
    try {
      // dispatch({ type: "GET_PROFILE_DATA" });
      let response = await axios.post(
        `http://localhost:8080/getSearchProfile`,
        data
      );
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
