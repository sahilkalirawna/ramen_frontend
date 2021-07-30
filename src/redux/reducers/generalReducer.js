const initialState = {
  isLoading: false,
  errorMessage: "",
  isSignedUp: false,
  isForgotPassword: false,
  loginData: {},
  signUpData: {},
};

const generalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //SIGN UP
    case "GET_SIGNUP_REQUEST":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_SIGNUP_SUCCESS":
      return {
        ...state,
        signUpData: payload,
        isLoading: false,
        isSignedUp: true,
      };

    case "GET_SIGNUP_FAILED":
      return {
        ...state,
        errorMessage: payload,
        isLoading: false,
        isSignedUp: false,
      };

    default:
      return state;
  }
};

export default generalReducer;
