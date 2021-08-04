const initialState = {
  isLoading: false,
  errorMessage: "",
  themes: [],
  skills: [],
  expertise: [],
  timecommit: [],
  preference: [],
  copreference: [],
  datas: [],
  errorProfile: "",
  lookingForFounder: {},
};

const leftmenuReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //SIGN UP
    case "GET_QUALITIES_REQUEST":
      return {
        ...state,
        isLoading: true,
        errorMessage: "",
      };
    case "GET_QUALITIES_SUCCESS":
      return {
        ...state,
        themes: payload.themes,
        skills: payload.skills,
        expertise: payload.expertise,
        timecommit: payload.timecommit,
        preference: payload.preference,
        copreference: payload.copreference,
        isLoading: false,
        lookingForFounder: payload.lookingForFounder,
      };
    case "GET_QUALITIES_FAILED":
      return {
        ...state,
        errorMessage: payload,
        isLoading: false,
      };
    case "GET_PROFILE_DATA":
      return {
        ...state,
        datas: payload.result,
        errorProfile: "",
      };
    case "GET_PROFILE_DATA_FAILED":
      return {
        ...state,
        errorProfile: payload,
      };

    default:
      return state;
  }
};

export default leftmenuReducer;
