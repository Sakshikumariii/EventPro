// const Booking = require("../models/Booking");

// exports.createBooking = async (req, res) => {
//   try {
//     const booking = new Booking(req.body);

//     const savedBooking = await booking.save();

//     res.status(201).json({
//       success: true,
//       data: savedBooking,
//       message: "Booking created successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Booking failed",
//       error: error.message,
//     });
//   }
// };

// exports.getBooking = async (req, res) => {
//   try {
//     const bookings = await Booking.find();

//     res.status(200).json(bookings);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// exports.getBookingById = async (req, res) => {
//   try {
//     const booking = await Booking.findById(req.params.id);
//     res.status(200).json(booking);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// exports.updateBookingStatus = async (req, res) => {
//   try {
//     const booking = await Booking.findByIdAndUpdate(
//       req.params.id,
//       { status: req.body.status },
//       { new: true },
//     );

//     res.status(200).json(booking);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// exports.deleteBooking = async (req, res) => {
//   try {
//     await Booking.findByIdAndDelete(req.params.id);

//     res.status(200).json({ message: "Booking deleted" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };


const Booking = require("../models/Booking");

// Create booking
exports.createBooking = async (req, res) => {
  try {
    const {
      eventId,
      name,
      email,
      phone,
      eventName,
      location,
      startDate,
      endDate,
      message,
      tickets,
    } = req.body;

    if (
      !name ||
      !email ||
      !phone ||
      !eventName ||
      !location ||
      !startDate ||
      !endDate ||
      !tickets
    ) {
      return res.status(400).json({
        message: "All required fields must be provided",
      });
    }

    const booking = await Booking.create({
      eventId: eventId || null,
      userId: req.user.id,
      name,
      email,
      phone,
      eventName,
      location,
      startDate,
      endDate,
      message,
      tickets,
    });

    res.status(201).json({
      message: "Booking created successfully",
      booking,
    });
  } catch (error) {
    console.error("Create booking error:", error);
    res.status(500).json({
      message: "Error creating booking",
    });
  }
};

// Get bookings of logged in user
exports.getBooking = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id }).sort({
      createdAt: -1,
    });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching bookings",
    });
  }
};

// Get booking by ID
exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    res.json(booking);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching booking",
    });
  }
};

// Update booking status
exports.updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json({
      message: "Booking status updated",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating booking",
    });
  }
};

// Delete booking
exports.deleteBooking = async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);

    res.json({
      message: "Booking deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting booking",
    });
  }
};