import { getProgram } from "../api";

export const getProgramInfo = token => {
  return dispatch => {
    dispatch({ type: "LOAD_PROGRAM" });
    getProgram(token)
      .then(({ data }) => {
        dispatch({
          type: "SET_PROGRAM",
          payload: data
        });
      })
      .catch(err => console.log(err));
  };
};
