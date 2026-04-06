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
const Event = require("../models/Event");

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
    const requestedTickets = Number(tickets) || 0;

    if (
      !name ||
      !email ||
      !phone ||
      !eventName ||
      !location ||
      !startDate ||
      !endDate ||
      !requestedTickets
    ) {
      return res.status(400).json({
        message: "All required fields must be provided",
      });
    }

    if (requestedTickets < 1) {
      return res.status(400).json({
        message: "Tickets must be at least 1",
      });
    }

    let updatedEvent = null;
    if (eventId) {
      updatedEvent = await Event.findOneAndUpdate(
        { _id: eventId, availableTickets: { $gte: requestedTickets } },
        { $inc: { availableTickets: -requestedTickets } },
        { new: true }
      );

      if (!updatedEvent) {
        return res.status(400).json({
          message: "Not enough tickets available for this event",
        });
      }
    }

    let booking;
    try {
      booking = await Booking.create({
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
        tickets: requestedTickets,
      });
    } catch (createErr) {
      if (updatedEvent?._id) {
        await Event.findByIdAndUpdate(updatedEvent._id, {
          $inc: { availableTickets: requestedTickets },
        });
      }
      throw createErr;
    }

    res.status(201).json({
      message: "Booking created successfully",
      booking,
      remainingTickets: updatedEvent?.availableTickets,
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
    const validStatuses = ["pending", "confirmed", "cancelled"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        message: "Invalid booking status",
      });
    }

    const existingBooking = await Booking.findById(req.params.id);
    if (!existingBooking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    const wasCancelled = existingBooking.status === "cancelled";
    const willBeCancelled = status === "cancelled";

    if (existingBooking.eventId && !wasCancelled && willBeCancelled) {
      await Event.findByIdAndUpdate(existingBooking.eventId, {
        $inc: { availableTickets: existingBooking.tickets },
      });
    }

    if (existingBooking.eventId && wasCancelled && !willBeCancelled) {
      const reserved = await Event.findOneAndUpdate(
        {
          _id: existingBooking.eventId,
          availableTickets: { $gte: existingBooking.tickets },
        },
        { $inc: { availableTickets: -existingBooking.tickets } },
        { new: true }
      );

      if (!reserved) {
        return res.status(400).json({
          message: "Cannot confirm booking, insufficient tickets available",
        });
      }
    }

    existingBooking.status = status;
    const booking = await existingBooking.save();

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
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    if (booking.eventId && booking.status !== "cancelled") {
      await Event.findByIdAndUpdate(booking.eventId, {
        $inc: { availableTickets: booking.tickets },
      });
    }

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