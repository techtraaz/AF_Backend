import express from "express";
import * as quizAttemptController from "../../controller/quiz/quizAttemptController.js";
import { authenticate, authorizeRoles } from "../../middleware/authMiddleware.js";
import { ROLES } from "../../utils/constants.js";

const router = express.Router();

// Submit quiz attempt
router.post("/", authenticate, quizAttemptController.submitQuizAttempt);

// Get attempt by ID with responses
router.get("/:id", authenticate, quizAttemptController.getAttemptById);

// Get all attempts for a user (optionally filtered by quizId)
router.get("/user/:refugeeId", authenticate, quizAttemptController.getUserQuizAttempts);

// Get quiz statistics
router.get("/quiz/:quizId/statistics", authenticate, authorizeRoles(ROLES.ADMIN, ROLES.CONTENT_CONTRIBUTOR), quizAttemptController.getQuizStatistics);

export default router;