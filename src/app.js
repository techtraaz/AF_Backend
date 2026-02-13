import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import responseGenerator from "./middleware/responseGenerator.js";

import authRoutes from "./routes/authRoutes.js";
import {authenticate, authorizeAdmin} from "./middleware/authMiddleware.js";
import {swaggerSpec} from "./docs/swagger.js";
import swaggerUi from "swagger-ui-express";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(responseGenerator);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.success("Server Up and Running", { status: "ok" });
});

export default app;
