import axios from "axios";

const apiUrl = "http://localhost:3000/api";

export const postUser = userInfo => axios.post(`${apiUrl}/users`, userInfo);
export const loginUser = userInfo => axios.post(`${apiUrl}/login`, userInfo);
export const getUser = token =>
  axios.get(`${apiUrl}/users`, {
    headers: { Authorization: `Bearer ${token}` }
  });
export const getProgram = token =>
  axios.get(`${apiUrl}/programs`, {
    headers: { Authorization: `Bearer ${token}` }
  });
