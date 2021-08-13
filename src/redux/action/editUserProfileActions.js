import axios from "axios";
import { getSearchProfile } from "./leftMenuActions";
import { CLIENT_URL } from "../../constant";

export const getUserProfile = (data) => {
  console.log(data);
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_USER_PROFILE_REQUEST" });
      let response = await axios.get(`${CLIENT_URL}/getUser/${data}`);

      console.log(response.data);
      dispatch({
        type: "GET_USER_PROFILE_UPDATED_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_USER_PROFILE_UPDATE_FAILED",
        payload: error.response,
      });
    }
  };
};

export const getUserUpdatedProfile = (data, idd) => {
  console.log(data);
  console.log(idd);
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_USER_PROFILE_REQUESTED" });
      console.log("data");
      let response = await axios.put(`${CLIENT_URL}/auth/update/${idd}`, data);

      console.log(response.data);
      dispatch({
        type: "GET_USER_PROFILE_UPDATED_SUCCESSED",
        payload: response.data,
      });
      dispatch(getUserProfile(idd));
      let query = {};
      dispatch(getSearchProfile(query));
    } catch (error) {
      dispatch({
        type: "GET_USER_PROFILE_UPDATE_FAILEDED",
        payload: error.response,
      });
    }
  };
};
