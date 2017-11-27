import { combineReducers } from "redux";
import user from "./user_reducer";

const appReducer = combineReducers({
  user
});

export default (state, action) => {
  if (action.type === "LOGOUT_USER") {
    state = undefined;
    localStorage.removeItem("token");
  }

  return appReducer(state, action);
};
