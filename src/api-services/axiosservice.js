import axios from "axios";
// const ApiUrl = import.meta.env.VITE_APP_BASE_URL;
// const ApiUrl = "http://localhost:1339/api";
const ApiUrl = "http://68.178.165.220:1337/api";

const instance = axios.create({
  baseURL: ApiUrl,
  timeout: 1000 * 30,
  maxContentLength: Infinity,
  maxBodyLength: Infinity,
});

instance.interceptors.request.use(
  async function (config) {
    console.log(config);
    const token = await localStorage.getItem("auth_token");
    console.log("token", token);
    // config.headers.common["scope"] = "cross-platform";
    if (token) {
      config.headers.common["token"] = token;
    }
    console.log(config.baseURL, config.url, config.method, config.params);
    console.log(config.headers.common);
    return config;
  },
  function (error) {
    console.error(error);
    return Promise.reject(error);
  }
);

export const doPost = (url, data) => {
  console.log(data);
  return instance.post(url, data);
};

export const doPut = (url, data) => {
  console.log(data);
  return instance.put(url, data);
};

export const doGet = (url, params) => {
  console.log(params);
  return instance.get(url, {
    params: params ? params : null,
  });
};

export const doDelete = (url, params) => {
  console.log(params);
  return instance.delete(url, {
    params: params ? params : null,
  });
};
