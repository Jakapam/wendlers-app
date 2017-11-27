import axios from "axios";

const apiUrl = "http://localhost:3000";

export const postUser = userInfo => axios.post(`${apiUrl}/users`, userInfo);
