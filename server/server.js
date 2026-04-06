require("dotenv").config();

const path = require("path");
const fs = require("fs");
const Event = require("./models/Event");
const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/eventpro";

async function seedEventsIfNeeded() {
  const eventCount = await Event.countDocuments();
  if (eventCount > 0) {
    return;
  }

  try {
    const dbPath = path.join(__dirname, "db.json");
    if (!fs.existsSync(dbPath)) {
      return;
    }

    const raw = fs.readFileSync(dbPath, "utf-8");
    const json = JSON.parse(raw);
    if (!Array.isArray(json.events) || json.events.length === 0) {
      return;
    }

    const eventsToInsert = json.events.map(({ id, ...rest }) => rest);
    await Event.insertMany(eventsToInsert);
    console.log(`Seeded ${eventsToInsert.length} events from db.json`);
  } catch (err) {
    console.error("Error seeding events from db.json:", err);
  }
}

async function startServer() {
  await connectDB(MONGO_URI);
  await seedEventsIfNeeded();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();

