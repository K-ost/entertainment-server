const jsonServer = require("json-server");
const auth = require("json-server-auth");

const PORT = process.env.PORT || 8000;

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.db = router.db;

server.use(middlewares);
server.use("/api", auth);
server.use("/api", router);
server.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
