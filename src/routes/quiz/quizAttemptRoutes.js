import express from "express";
import * as quizAttemptController from "../../controller/quiz/quizAttemptController.js";
import { authenticate, authorizeRoles } from "../../middleware/authMiddleware.js";
import { ROLES } from "../../utils/constants.js";

const router = express.Router();

// Submit quiz attempt
router.post("/", authenticate, quizAttemptController.submitQuizAttempt);

// Get quiz statistics (MUST be before /:id route to avoid conflicts)
router.get("/quiz/:quizId/statistics", authenticate, authorizeRoles(ROLES.ADMIN, ROLES.CONTENT_CONTRIBUTOR), quizAttemptController.getQuizStatistics);

// Get all attempts for a user (optionally filtered by quizId)
router.get("/user/:refugeeId", authenticate, quizAttemptController.getUserQuizAttempts);

// Get attempt by ID with responses (generic route - MUST be last)
router.get("/:id", authenticate, quizAttemptController.getAttemptById);

export default router;