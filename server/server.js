const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");

// CORS configuration - allow all origins in production
const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ['*'];

server.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin || allowedOrigins.includes('*') || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(null, true); // Allow all for now, can be restricted later
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  exposedHeaders: ["Authorization"]
}));

// Handle preflight requests
server.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
  res.header("Access-Control-Allow-Credentials", "true");
  res.sendStatus(200);
});

server.use(jsonServer.defaults());

server.db = router.db;

server.use(auth);
server.use(router);

const PORT = process.env.PORT || 5000;
server.listen(PORT);
