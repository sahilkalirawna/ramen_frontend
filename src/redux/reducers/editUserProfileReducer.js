const initialDataState = {
  isLoading: false,
  errorMessage: "",
  isUserProfileUpdated: false,
  userProfileData: {},
};

const editUserProfileReducer = (
  state = initialDataState,
  { type, payload }
) => {
  switch (type) {
    //GET PROFILE DATA
    case "GET_USER_PROFILE_REQUEST":
      return {
        ...state,
        isLoading: true,
        errorMessage: "",
      };

    //UPDATE PROFILE DATA
    case "GET_USER_PROFILE_UPDATED_SUCCESS":
      return {
        ...state,
        userProfileData: payload,
        errorMessage: "",
        isLoading: false,
        isUserProfileUpdated: true,
      };

    //NOT UPDATE
    case "GET_USER_PROFILE_UPDATE_FAILED":
      return {
        ...state,
        errorMessage: payload,
        isLoading: false,
        isUserProfileUpdated: false,
      };
  }
};

export default editUserProfileReducer;