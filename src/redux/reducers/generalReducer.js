const initialState = {
  isLoading: false,
  errorMessage: "",
  isSignedUp: false,
  isForgotPassword: false,
  loginData: {},
  signUpData: {},
  forgotPassword: {},
};

const generalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //SIGN UP
    case "GET_SIGNUP_REQUEST":
      return {
        ...state,
        isLoading: true,
        errorMessage: "",
      };

    case "GET_SIGNUP_SUCCESS":
      return {
        ...state,
        signUpData: payload,
        errorMessage: "",
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

    case "GET_FORGOT_PASSWORD_REQUEST":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_FORGOT_PASSWORD_SUCCESS":
      return {
        ...state,
        errorMessage: "",
        isLoading: false,
        forgotPassword: payload,
        isForgotPassword: true,
      };

    case "GET_FORGOT_PASSWORD_FAILED":
      return {
        ...state,
        errorMessage: payload,
        isLoading: false,
        isForgotPassword: false,
      };

    default:
      return state;
  }
};

export default generalReducer;
