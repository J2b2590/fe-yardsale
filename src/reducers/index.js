import { combineReducers } from "redux";

import manageItems from "./manageItems";

export default combineReducers({
  item: manageItems,
});
