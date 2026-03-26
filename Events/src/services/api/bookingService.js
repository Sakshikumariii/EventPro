import axiosApi from "./axiosApi";

export const bookingService = {
  async createBooking(payload) {
    const res = await axiosApi.post("/bookings", payload);
    return res.data;
  },
};
