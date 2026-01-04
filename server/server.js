const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");

server.use(cors({
  origin: true,
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

server.options("*", cors());

server.use(jsonServer.defaults());

server.db = router.db;

server.use(auth);
server.use(router);

const PORT = process.env.PORT || 5000;
server.listen(PORT);
