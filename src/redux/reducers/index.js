import { combineReducers } from "redux";

import generalReducer from "./generalReducer";
import leftmenuReducer from "./leftMenuReducer";
import singleReducer from "./userProfileReducer";
import editProfileReducer from "./editUserProfileReducer";
import editReducer from "./editUserProfileReducer";

export default combineReducers({
  general: generalReducer,
  leftmenudata: leftmenuReducer,
  singleUser: singleReducer,
  editProfile: editProfileReducer,
  edit: editReducer,
});
