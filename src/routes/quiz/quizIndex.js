import express from "express";
import quizRoutes from "./quizRoutes.js";
import questionRoutes from "./questionRoutes.js";
import optionRoutes from "./optionRoutes.js";
import quizAttemptRoutes from "./quizAttemptRoutes.js";

const router = express.Router();

router.use("/quizzes", quizRoutes);
router.use("/questions", questionRoutes);
router.use("/options", optionRoutes);
router.use("/attempts", quizAttemptRoutes);

export default router;