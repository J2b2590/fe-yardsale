import { combineReducers } from "redux";

import manageItems from "./manageItems";
import manageLogin from "./manageLogin";
import singleItem from "./singleItem";

export default combineReducers({
  item: manageItems,
  user: manageLogin,
  capItem: singleItem,
});
