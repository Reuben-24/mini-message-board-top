const { insertMessage, getAllMessages } = require("../db/queries.js");

const renderHome = (req,res) => {
  res.render("index");
};

const renderNew = (req, res) => {
  res.render("new");
};

const createMessage = async (req, res) => {
  const { message } = req.body;
  await insertMessage(message);
  res.redirect("/messages");
};

const renderMessages = async (req, res) => {
  const messages = await getAllMessages();
  console.log("Messages:", messages);
  res.render("messages", { messages });
};

module.exports = {
  renderHome,
  renderNew,
  createMessage,
  renderMessages,
};

