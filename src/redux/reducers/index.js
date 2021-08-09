import { combineReducers } from "redux";

import generalReducer from "./generalReducer";
import leftmenuReducer from "./leftMenuReducer";
import singleReducer from "./userProfileReducer";
import editReducer from "./editUserProfileReducer";

export default combineReducers({
  general: generalReducer,
  leftmenudata: leftmenuReducer,
  singleUser: singleReducer,
  edit: editReducer,
});
