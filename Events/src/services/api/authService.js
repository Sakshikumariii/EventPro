import axiosApi from "./axiosApi";

export const authService = {
  async login(payload) {
    const res = await axiosApi.post("/login", payload);
    return res.data;
  },

  async register(payload) {
    const res = await axiosApi.post("/register", payload);
    return res.data;
  },
};
