const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");

// ✅ SIMPLE + CORRECT CORS
server.use(
  cors({
    origin: true,          // allow all origins
    credentials: true,
  })
);

// ✅ REQUIRED for preflight
server.options("*", cors());

server.use(jsonServer.defaults());

// Required for json-server-auth
server.db = router.db;

// Auth middleware
server.use(auth);

// Routes
server.use(router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
