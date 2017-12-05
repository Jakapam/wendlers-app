import { combineReducers } from "redux";
import user from "./user_reducer";
import program from "./program_reducer";

const appReducer = combineReducers({
  user,
  program
});

export default (state, action) => {
  if (action.type === "LOGOUT_USER") {
    state = undefined;
    localStorage.removeItem("token");
  }

  return appReducer(state, action);
};
