
const usersRouter = require("./api/users/users.router");
const pollsRouter = require("./api/polls/polls.router");
const dashboardRouter = require("./api/dashboard/dashboard.router");



const routes = require("express").Router();
routes.use("/tripp3_labs-api/users", usersRouter);
routes.use("/tripp3_labs-api/polls", pollsRouter);
routes.use("/tripp3_labs-api/dashboard", dashboardRouter);

module.exports = routes;