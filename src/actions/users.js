import { postUser } from "../api";

export const signup = signUpInfo => {
  return dispatch => {
    postUser(signUpInfo)
      .then(({ data }) => {
        localStorage.setItem("token", `Bearer ${data.token}`);
        dispatch({ type: "LOGIN_USER", payload: { username: data.username } });
      })
      .catch(err => console.log(err));
  };
};
