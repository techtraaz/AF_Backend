import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import responseGenerator from "./middleware/responseGenerator.js";

import authRoutes from "./routes/authRoutes.js";
import quizRoutes from "./routes/quiz/quizIndex.js";
import courseRoutes from "./routes/course/courseRoutes.js";
import {authenticate, authorizeAdmin} from "./middleware/authMiddleware.js";
import profileRoutes from "./routes/profileRoutes.js";
import {swaggerSpec} from "./docs/swagger.js";
import swaggerUi from "swagger-ui-express";
import categoryRoutes from "./routes/categoryRoutes.js";
import lessonRoutes from "./routes/lessonRoutes.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(responseGenerator);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/course", courseRoutes);

app.use("/api/categories", categoryRoutes);
app.use("/api/lessons", lessonRoutes);

app.get("/", (req, res) => {
  res.success("Server Up and Running", { status: "ok" });
});

export default app;