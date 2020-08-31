const express = require("express");
const projectsRouter = require("./routers/project");
const tasksRouter = require("./routers/task");
const resourcesRouter = require("./routers/resource");

const server = express();
const port = process.env.PORT || 8080;

server.use(express.json());

server.use("/api", projectsRouter);
server.use("/api", tasksRouter);
server.use("/api", resourcesRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong",
  });
});

server.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
