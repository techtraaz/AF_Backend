import express from "express";
import * as quizAttemptController from "../../controller/quiz/quizAttemptController.js";
// import { authenticate } from "../../middleware/authMiddleware.js";

const router = express.Router();

// Submit quiz attempt - will require user authentication later
router.post("/", /* authenticate, */ quizAttemptController.submitQuizAttempt);

// Get attempt by ID with responses
router.get("/:id", quizAttemptController.getAttemptById);

// Get all attempts for a user (optionally filtered by quizId)
router.get("/user/:refugeeId", quizAttemptController.getUserQuizAttempts);

// Get quiz statistics
router.get("/quiz/:quizId/statistics", quizAttemptController.getQuizStatistics);

export default router;