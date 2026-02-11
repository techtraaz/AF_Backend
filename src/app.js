import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import responseGenerator from "./middleware/responseGenerator.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(responseGenerator);

app.get("/", (req, res) => {
  res.success("Server Up and Running", { status: "ok" });
});

export default app;
