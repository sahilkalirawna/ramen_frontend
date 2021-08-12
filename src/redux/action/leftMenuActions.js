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

// export const getMoreData = (data, start) => {
//   console.log("Start Value", start);
//   return async (dispatch) => {
//     try {
//       dispatch({ type: "GET_MORE_DATA_REQUEST" });
//       let response = await axios.post(
//         `${CLIENT_URL}/getSearchProfile?p=${start}`,
//         data
//       );
//       console.log("Four Data", response.data);
//       dispatch({ type: "GET_MORE_DATA_SUCCESS", payload: response.data });
//       console.log(response.data);
//     } catch (error) {
//       console.log(error.response);
//       dispatch({
//         type: "GET_MORE_DATA_FAILED",
//         payload: error.response,
//       });
//     }
//   };
// };
