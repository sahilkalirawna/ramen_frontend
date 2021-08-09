const initialState = {
  isLoading: false,
  errorMessage: "",
  isSignedUp: false,
  isLoggedin: false,
  isForgotPassword: false,
  isResetPassword: false,
  loginData: {},
  signUpData: {},
  forgotPassword: {},
};

const generalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //SIGN UP
    // case "GET_LOGIN_REQUEST":
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

    // LOGIN
    case "GET_LOGIN_REQUEST":
      return {
        ...state,
        isLoading: true,
        errorMessage: "",
      };

    case "GET_LOGIN_SUCCESS":
      return {
        ...state,
        loginData: payload,
        errorMessage: "",
        isLoading: false,
        isLoggedin: true,
      };

    case "GET_LOGIN_FAILED":
      return {
        ...state,
        errorMessage: payload,
        isLoading: false,
      };

    //FORGOT PASSWORD
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

    //RESET PASSWORD
    case "GET_RESET_PASSWORD_REQUEST":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_RESET_PASSWORD_SUCCESS":
      return {
        ...state,
        errorMessage: "",
        isLoading: false,
        isResetPassword: true,
      };

    case "GET_RESET_PASSWORD_FAILED":
      return {
        ...state,
        errorMessage: payload,
        isLoading: false,
        isResetPassword: false,
      };

    case "GET_IS_AUTH":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default generalReducer;
