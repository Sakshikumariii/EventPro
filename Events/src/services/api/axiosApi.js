import axios from "axios";

// Get API URL from environment variable with fallback
const API_URL = import.meta.env.VITE_API_URL || "https://eventpro-backend.onrender.com";

if (!import.meta.env.VITE_API_URL) {
  console.warn("VITE_API_URL is not set. Using default backend URL:", API_URL);
}

const axiosApi = axios.create({
  baseURL: API_URL,
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
