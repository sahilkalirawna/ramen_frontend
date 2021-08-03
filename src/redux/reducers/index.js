import { combineReducers } from "redux";

import generalReducer from "./generalReducer";
import leftmenuReducer from "./leftMenuReducer";

export default combineReducers({
  general: generalReducer,
  leftmenudata: leftmenuReducer,
});
