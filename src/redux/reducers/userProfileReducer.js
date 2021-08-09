const initialState = {
  isLoading: false,
  errorMessage: "",
  userData: {},
  userCofounderData: {},
};

const singleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //SIGN UP
    case "GET_SINGLE_USER_REQUEST":
      return {
        ...state,
        isLoading: true,
        errorMessage: "",
        userData: {},
      };
    case "GET_SINGLE_USER_SUCCESS":
      return {
        ...state,
        userData: payload.result,
        userCofounderData: payload.data,
        isLoading: false,
      };
    case "GET_SINGLE_USER_FAILED":
      return {
        ...state,
        errorMessage: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default singleReducer;
