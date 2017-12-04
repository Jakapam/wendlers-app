import { postUser } from "../api";
import { loginUser } from "../api";

export const signup = signUpInfo => {
  return dispatch => {
    postUser(signUpInfo)
      .then(({ data }) => {
        localStorage.setItem("token", `${data.token}`);
        dispatch({ type: "LOGIN_USER", payload: { username: data.username } });
      })
      .catch(err => console.log(err));
  };
};

export const login = signUpInfo => {
  return dispatch => {
    loginUser(signUpInfo)
      .then(({ data }) => {
        localStorage.setItem("token", `${data.token}`);
        dispatch({ type: "LOGIN_USER", payload: { username: data.username } });
      })
      .catch(err => console.log(err));
  };
};
