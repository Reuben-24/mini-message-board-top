const path = require("path");

const express = require("express");

const indexRouter = require("./routes/indexRouter");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.use((req, res, next) => {
  res.status(404).render("404", { url: req.originalUrl });
});

app.use((err, req, res , next) => {
  console.error(err.stack);
  res.status(500).render("error", { message: err.message });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Project: ${path.basename(__dirname)} - listening on Port: ${PORT}`);
})