const mongoose = require("mongoose");

async function connectDB(mongoUri) {
  try {
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  }
}

module.exports = connectDB;

