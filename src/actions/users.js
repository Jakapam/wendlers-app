import { postUser } from "../api";
import { getUser } from "../api";
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
        dispatch({
          type: "LOGIN_USER",
          payload: { username: data.user.username }
        });
      })
      .catch(err => console.log(err));
  };
};

export const getUserInfo = token => {
  return dispatch => {
    getUser(token)
      .then(({ data }) => {
        dispatch({
          type: "LOGIN_USER",
          payload: { username: data.user.username }
        });
      })
      .catch(err => console.log(err));
  };
};
