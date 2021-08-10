const initialState = {
  isLoading: false,
  errorMessage: "",
  //   isUserProfileUpdated: false,
  userProfileData: {},
  success:""
};

const editUserProfileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //GET PROFILE DATA
    case "GET_USER_PROFILE_REQUEST":
      return {
        ...state,
        isLoading: true,
        errorMessage: "",
        userProfileData:{}
      };

    //UPDATE PROFILE DATA
    case "GET_USER_PROFILE_UPDATED_SUCCESS":
      return {
        ...state,
        userProfileData: payload.result,
        isLoading: false,
        // isUserProfileUpdated: true,
      };

    //NOT UPDATE
    case "GET_USER_PROFILE_UPDATE_FAILED":
      return {
        ...state,
        errorMessage: payload,
        isLoading: false,
        // isUserProfileUpdated: false,
      };

      case "GET_USER_PROFILE_REQUESTED":
      return {
        ...state,
        isLoading: true,
        errorMessage: "",
      };

    //UPDATE PROFILE DATA
    case "GET_USER_PROFILE_UPDATED_SUCCESSED":
      return {
        ...state,
        isLoading: false,
        // isUserProfileUpdated: true,
      };

    //NOT UPDATE
    case "GET_USER_PROFILE_UPDATE_FAILEDED":
      return {
        ...state,
        errorMessage: payload,
        isLoading: false,
        // isUserProfileUpdated: false,
      };

    default:
      return state;
  }
};

export default editUserProfileReducer;
