const { Router } = require("express");

const {
  renderHome,
  renderNew,
  createMessage,
  renderMessages,
} = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", renderHome);

indexRouter.get("/new", renderNew);

indexRouter.post("/new", createMessage);

indexRouter.get("/messages", renderMessages);

module.exports = indexRouter;