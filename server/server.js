const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// ✅ CORS (MOST IMPORTANT)
server.use(
  cors({
    origin: "https://event-pro-8z18-git-main-sakshis-projects-8cf9076.vercel.app",
    credentials: true,
  })
);

// Default middlewares
server.use(middlewares);

// Required for json-server-auth
server.db = router.db;

// Auth routes
server.use(auth);

// CRUD routes
server.use(router);

// ✅ Use Render PORT
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log("Auth Server running");
});
