const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { type: String, required: true },
    location: { type: String, required: true },
    state: { type: String, required: true },
    price: { type: Number, required: true },
    date: { type: String, required: true },
    rating: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    totalTickets: { type: Number, required: true },
    availableTickets: { type: Number, required: true },
  },
  { timestamps: true },
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
