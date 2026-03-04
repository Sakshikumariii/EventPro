const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
  userId: {
    type: mongoose.mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },
  tickets:{
   type:Number,
   required:true
  },
  status:{
   type:String,
   enum:["pending","confirmed","cancelled"],
   default:"pending"
  },
  createAt:{
   type:Date,
   default: Date.now
  }
});

module.exports= mongoose.model("Booking", bookingSchema)
