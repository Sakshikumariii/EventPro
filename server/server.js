const jsonServer = require("json-server");
const auth = require("json-server-auth");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Enable default middlewares (logger, CORS, JSON)
server.use(middlewares);

// Required so json-server-auth can access the DB
server.db = router.db;

// Add auth routes before the router
server.use(auth);

// Add all default CRUD routes
server.use(router);

// Start server
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Auth Server running at http://localhost:${PORT}`);
});
