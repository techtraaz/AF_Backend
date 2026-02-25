import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {swaggerSpec} from "./docs/swagger.js";
import swaggerUi from "swagger-ui-express";

import responseGenerator from "./middleware/responseGenerator.js";
import {authenticate, authorizeAdmin} from "./middleware/authMiddleware.js";

import authRoutes from "./routes/authRoutes.js";
import quizRoutes from "./routes/quiz/quizIndex.js";
import courseRoutes from "./routes/course/courseRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import categoryRoutes from "./routes/lesson/categoryRoutes.js";
import lessonRoutes from "./routes/lesson/lessonRoutes.js";
import forumRoutes from "./routes/forum/forumRoutes.js";
import postRoutes from "./routes/forum/postRoutes.js";
import answerRoutes from "./routes/forum/answerRoutes.js";
import voteRoutes from "./routes/forum/voteRoutes.js";

import contentRoutes from "./routes/content/contentRoutes.js";

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

app.use("/api/forums", forumRoutes);
app.use("/api/forums/:forumId/posts", postRoutes);
app.use("/api/forums/:forumId/posts/:postId/answers", answerRoutes);
app.use("/api/votes", voteRoutes);
app.use("/api/digital-library", contentRoutes);

app.get("/", (req, res) => {
  res.success("Server Up and Running", { status: "ok" });
});

export default app;