import axios from "axios";
const mytoken = localStorage.getItem("access_token");

if (window.location.host === "localhost:3000") {
  axios.defaults.baseURL = "http://localhost:7070";
} else {
  axios.defaults.baseURL = "http://localhost:7070";
}
if (mytoken) {
  axios.defaults.headers.Authorization = mytoken;
}

export default axios;
