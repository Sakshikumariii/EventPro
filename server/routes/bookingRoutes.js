// // const express = require("express");
// const Booking = require("../models/Booking");
// const auth = require("../middleware/auth");

// const router = express.Router();

// // Create a new booking (authenticated)
// router.post("/bookings", auth, async (req, res) => {
//   try {
//     const {
//       eventId,
//       name,
//       email,
//       phone,
//       eventName,
//       location,
//       startDate,
//       endDate,
//       message,
//       tickets,
//     } = req.body;

//     if (
//       !name ||
//       !email ||
//       !phone ||
//       !eventName ||
//       !location ||
//       !startDate ||
//       !endDate ||
//       !tickets
//     ) {
//       return res.status(400).json({ message: "All required fields must be provided" });
//     }

//     const booking = await Booking.create({
//       eventId: eventId || null,
//       userId: req.user.id,
//       name,
//       email,
//       phone,
//       eventName,
//       location,
//       startDate,
//       endDate,
//       message,
//       tickets,
//     });

//     return res.status(201).json({
//       message: "Booking created successfully",
//       booking,
//     });
//   } catch (err) {
//     console.error("Create booking error:", err);
//     return res
//       .status(500)
//       .json({ message: "Error creating booking. Please try again later." });
//   }
// });

// // Get bookings for logged-in user
// router.get("/bookings", auth, async (req, res) => {
//   try {
//     const bookings = await Booking.find({ userId: req.user.id }).sort({
//       createdAt: -1,
//     });

//     return res.json(bookings);
//   } catch (err) {
//     console.error("Fetch bookings error:", err);
//     return res
//       .status(500)
//       .json({ message: "Error fetching bookings. Please try again later." });
//   }
// });

// module.exports = router;

// const express = require('express');
// const router = express.Router();

// const bookingController = require('../controllers/bookingControllers');

// router.post('/bookings', bookingController.createBooking);
// router.get('/bookings', bookingController.getBooking);
// router.get('/bookings/:id', bookingController.getBookingById);
// router.put('/bookings/:id/status', bookingController.updateBookingStatus);
// router.delete('/bookings/:id', bookingController.deleteBooking);

// module.exports = router;

const express = require("express");
const router = express.Router();

const bookingController = require("../controllers/bookingControllers");
const auth = require("../middleware/auth");

// Create booking
router.post("/bookings", auth, bookingController.createBooking);

// Get all bookings of logged-in user
router.get("/bookings", auth, bookingController.getBooking);

// Get single booking
router.get("/bookings/:id", auth, bookingController.getBookingById);

// Update booking status
router.put("/bookings/:id/status", auth, bookingController.updateBookingStatus);

// Delete booking
router.delete("/bookings/:id", auth, bookingController.deleteBooking);

module.exports = router;
