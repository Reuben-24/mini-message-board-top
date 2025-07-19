const messages = require("../db");

const renderHome = (req,res) => {
  res.render("index");
};

const renderNew = (req, res) => {
  res.render("new");
};

const createMessage = (req, res) => {
  const { user, text } = req.body;
  messages.push({text: text, user: user, added: new Date() });
  res.redirect("/messages");
};

const renderMessages = (req, res) => {
  res.render("messages", { messages });
};

module.exports = {
  renderHome,
  renderNew,
  createMessage,
  renderMessages,
};

