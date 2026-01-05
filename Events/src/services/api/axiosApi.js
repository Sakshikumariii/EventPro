import axios from "axios";

const axiosApi = axios.create({
  baseURL: "http://localhost:5000",
});

axiosApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token && config) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosApi;
