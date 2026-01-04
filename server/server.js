const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");

// Function to set CORS headers
const setCorsHeaders = (req, res) => {
  const origin = req.headers.origin;
  res.header("Access-Control-Allow-Origin", origin || "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With, Accept");
  res.header("Access-Control-Max-Age", "86400");
};

// CRITICAL: Handle ALL OPTIONS requests FIRST - catch them before anything else
server.all("*", (req, res, next) => {
  if (req.method === "OPTIONS") {
    setCorsHeaders(req, res);
    return res.sendStatus(200);
  }
  next();
});

// CORS middleware with explicit configuration
server.use(cors({
  origin: function (origin, callback) {
    // Allow all origins
    callback(null, true);
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
  exposedHeaders: ["Authorization"],
  preflightContinue: false,
  optionsSuccessStatus: 200
}));

// Add CORS headers to ALL responses - this runs for every request
server.use((req, res, next) => {
  setCorsHeaders(req, res);
  next();
});

// Explicit OPTIONS handlers for auth routes (backup)
server.options("/login", (req, res) => {
  setCorsHeaders(req, res);
  res.sendStatus(200);
});

server.options("/register", (req, res) => {
  setCorsHeaders(req, res);
  res.sendStatus(200);
});

server.use(jsonServer.defaults());

server.db = router.db;

// Apply auth middleware
server.use(auth);

// Apply router
server.use(router);

// Error handling middleware
server.use((err, req, res, next) => {
  console.error("Server error:", err);
  const origin = req.headers.origin;
  res.header("Access-Control-Allow-Origin", origin || "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.status(err.status || 500).json({
    message: err.message || "Internal server error",
    error: process.env.NODE_ENV === "development" ? err : {}
  });
});

// Test endpoint to verify CORS is working
server.get("/test-cors", (req, res) => {
  setCorsHeaders(req, res);
  res.json({
    message: "CORS is configured",
    timestamp: new Date().toISOString(),
    origin: req.headers.origin
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`CORS enabled for all origins`);
  console.log(`Test endpoint: http://localhost:${PORT}/test-cors`);
});
