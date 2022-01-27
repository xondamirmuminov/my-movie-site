import Axios from "axios";
import keys from "../configs";
const baseURL = keys.BACKEND_API;
const axios = Axios.create({ baseURL, withCredentials: true });

export function sendQuery(url) {
  return axios
    .get(url + `?api_key=${keys.API_KEY}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => err);
}

export function sendQueryPost(url) {
  return axios
    .post(url + `?api_key=${keys.API_KEY}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => err);
}
export default axios;
