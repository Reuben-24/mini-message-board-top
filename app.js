const path = require("path");
require("dotenv").config();

const express = require("express");

const indexRouter = require("./routes/indexRouter");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.listen(process.env.PORT, () => {
  console.log(`Project: ${path.basename(__dirname)} -  Hosted at http://${process.env.HOST}:${process.env.PORT}`);
})