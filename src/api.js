import axios from "axios";

const apiUrl = "http://10.135.123.120:3000";

export const signup = userInfo =>
  axios.post(`${apiUrl}/users`, userInfo).then(res => {
    return res;
  });
