import { combineReducers } from "redux";

import generalReducer from "./generalReducer";
import editProfileReducer from "./editUserProfileReducer";

export default combineReducers({
  general: generalReducer,
  editProfile: editProfileReducer,
});
