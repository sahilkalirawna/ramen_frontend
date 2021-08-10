const initialState = {
  isLoading: false,
  errorMessage: "",
  //   isUserProfileUpdated: false,
  userProfileData: {},
  success: "",
};

const editUserProfileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //GET SEND REQUEST
    case "GET_SEND_MESSAGE_REQUEST":
      return {
        ...state,
        isLoading: true,
        errorMessage: "",
        successMessage: "",
      };

    //SEND SUCCESS
    case "GET_SEND_MESSAGE_SUCCESS":
      return {
        ...state,
        successMessage: payload.result,
        isLoading: false,
      };

    //send fail
    case "GET_SEND_MESSAGE_FAILED":
      return {
        ...state,
        errorMessage: payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default editUserProfileReducer;
