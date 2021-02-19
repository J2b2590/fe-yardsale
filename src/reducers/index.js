import { combineReducers } from "redux";

import manageItems from "./manageItems";
import manageLogin from "./manageLogin";

export default combineReducers({
  item: manageItems,
  login: manageLogin,
});
