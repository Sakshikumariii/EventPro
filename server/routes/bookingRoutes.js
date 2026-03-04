const express = require('express');
const router = express.Router();

const bookingController = require('../controllers/bookingControllers');

router.post('/bookings', bookingController.createBooking);
router.get('/bookings', bookingController.getBooking);
router.get('/bookings/:id', bookingController.getBookingById);
router.put('/bookings/:id/status', bookingController.updateBookingStatus);
router.delete('/bookings/:id', bookingController.deleteBooking);

module.exports = router;