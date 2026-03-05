const Event = require("../models/Event");

exports.getEvents = async (req,res)=>{
try{

const events = await Event.find().sort({date:1});

res.json(events);

}catch(err){
res.status(500).json({message:"Server Error"})
}
}

exports.getEventById = async (req,res)=>{
try{

const event = await Event.findById(req.params.id)

if(!event){
return res.status(404).json({message:"Event not found"})
}

res.json(event)

}catch(err){
res.status(500).json({message:"Server Error"})
}
}