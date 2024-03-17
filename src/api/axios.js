import Axios from "axios";
import { getUserToken } from "../firebase";

const baseURL = "https://stc-portal-backend.up.railway.app";

let axios = Axios.create({
  baseURL,
});

axios.authorizedGet = async (route, options = {}) => {
  return await axios.get(route, {
    ...options,
    headers: {
      Authorization: "Bearer " + getUserToken(),
    },
  });
};
axios.authorizedPost = async (route, data, options = {}) => {
  return await axios.post(route, data, {
    ...options,
    headers: {
      Authorization: "Bearer " + getUserToken(),
    },
  });
};

axios.authorizedPatch = async (route, data, options = {}) => {
  return await axios.patch(route, data, {
    ...options,
    headers: {
      Authorization: "Bearer " + getUserToken(),
    },
  });
};

export default axios;
