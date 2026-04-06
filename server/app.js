const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");

const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow all origins; tighten this in production
      callback(null, true);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    exposedHeaders: ["Authorization"],
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());

// Routes
app.use(authRoutes);
app.use(eventRoutes);
app.use(bookingRoutes);
// Global error handler
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(err.status || 500).json({
    message: err.message || "Internal server error",
  });
});

module.exports = app;

