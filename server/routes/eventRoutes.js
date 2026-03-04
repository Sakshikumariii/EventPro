const express = require("express");
const Event = require("../models/Event");

const router = express.Router();

// Public Events endpoint (no auth required for now)
router.get("/events", async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.json(events);
  } catch (err) {
    console.error("Events fetch error:", err);
    res
      .status(500)
      .json({ message: "Error fetching events. Please try again later." });
  }
});

module.exports = router;

