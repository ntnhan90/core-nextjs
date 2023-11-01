import axios from "axios";

const THREE_MINUTES_TO_SECONDS = 180000;

const axiosAuthen = axios.create({
  baseURL: "https://154f-14-241-235-141.ngrok-free.app",
  timeout: THREE_MINUTES_TO_SECONDS,
  headers: {
    gzip: true,
    "ngrok-skip-browser-warning": "true",
    "Content-Type": "application/json",
  },
  maxContentLength: THREE_MINUTES_TO_SECONDS,
  maxBodyLength: THREE_MINUTES_TO_SECONDS,
});

axiosAuthen.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("token") ?? sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosAuthen.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      error.response.data.message === "Token has expired" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        // const token = await refreshToken();
        // originalRequest.headers.Authorization = token;
        return axiosAuthen(originalRequest);
      } catch (refreshError) {
        throw refreshError;
      }
    }
    return Promise.reject(error);
  }
);

export default axiosAuthen;
