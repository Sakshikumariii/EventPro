const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");

// Function to set CORS headers - used everywhere
const setCorsHeaders = (req, res) => {
  const origin = req.headers.origin;
  res.setHeader("Access-Control-Allow-Origin", origin || "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With, Accept");
  res.setHeader("Access-Control-Max-Age", "86400");
};

// CRITICAL: Handle ALL OPTIONS requests FIRST using app.all() - this catches EVERYTHING
server.all("*", (req, res, next) => {
  // Handle preflight OPTIONS requests immediately
  if (req.method === "OPTIONS") {
    setCorsHeaders(req, res);
    return res.status(200).end();
  }
  // For all other requests, set CORS headers and continue
  setCorsHeaders(req, res);
  next();
});

// CORS middleware - additional layer of protection
server.use(cors({
  origin: true, // Allow all origins
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
  exposedHeaders: ["Authorization"],
  preflightContinue: false,
  optionsSuccessStatus: 200
}));

// Explicit OPTIONS handlers for auth routes - triple protection
server.options("*", (req, res) => {
  setCorsHeaders(req, res);
  res.status(200).end();
});

server.options("/login", (req, res) => {
  setCorsHeaders(req, res);
  res.status(200).end();
});

server.options("/register", (req, res) => {
  setCorsHeaders(req, res);
  res.status(200).end();
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
