// import JwtService from "app/services/jwtService";
import axios from "axios";

// const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const BASE_URL = "http://localhost:5000";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    // const token = JwtService.getAccessToken();
    const token = null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          //   const rs = await JwtService.refreshToken();
          const rs = null;
          const { accessToken } = rs.data?.data || null;
          window.localStorage.setItem("jwt_access_token", accessToken);
          instance.defaults.headers.common.Authorization = accessToken;

          return instance(originalConfig);
        } catch (_error) {
          console.log("_error", _error);
          if (_error.response && _error.response.data) {
            return Promise.reject(_error.response.data);
          }

          return Promise.reject(_error);
        }
      }

      // if (err.response.status === 403 && err.response.data) {
      //   return Promise.reject(err.response.data);
      // }
    }

    return Promise.reject(err);
  }
);

export default instance;
