import axiosApi from "./axiosApi";

export const eventsService = {
  async getEvents() {
    const res = await axiosApi.get("/events");
    return res.data || [];
  },

  async getEventById(eventId) {
    const res = await axiosApi.get(`/events/${eventId}`);
    return res.data || null;
  },
};
