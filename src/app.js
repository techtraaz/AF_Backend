const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const responseMiddleware = require("./middleware/responseGenerator");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(responseMiddleware);

app.get("/", (req, res) => {
  res.success("Server Up and Running", { status: "ok" });
});

module.exports = app;
