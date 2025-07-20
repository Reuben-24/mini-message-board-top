const pool = require("./pool");

async function insertMessage(message) {
  await pool.query("INSERT INTO messages (message) VALUES ($1)", [message]);
}

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

module.exports = {
  insertMessage,
  getAllMessages,
}