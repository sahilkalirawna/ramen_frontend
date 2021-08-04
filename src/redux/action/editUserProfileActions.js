import axios from "axios";

export const getUserProfile = (data) => {
  console.log(data);
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_USER_PROFILE_REQUEST" });
      console.log("data");
      let response = await axios.get(
        `http://localhost:7070/getUser/${data}`
      );

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


export const getUserUpdatedProfile = (data,idd) => {
    console.log(data);
    console.log(idd);
    return async (dispatch) => {
      try {
        dispatch({ type: "GET_USER_PROFILE_REQUESTED" });
        console.log("data");
        let response = await axios.put(
          `http://localhost:7070/auth/update/${idd}`,data
        );
  
        console.log(response.data);
        dispatch({
          type: "GET_USER_PROFILE_UPDATED_SUCCESSED",
          payload: response.data,
        });
      } catch (error) {
        dispatch({
          type: "GET_USER_PROFILE_UPDATE_FAILEDED",
          payload: error.response,
        });
      }
    };
  };
