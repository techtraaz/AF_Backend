import express from "express";
import * as quizController from "../../controller/quiz/quizController.js";
// import { authenticate, authorizeAdmin } from "../../middleware/authMiddleware.js";

const router = express.Router();

// Create quiz - will require admin authentication later
router.post("/", /* authenticate, authorizeAdmin, */ quizController.createQuiz);

// Get all quizzes with optional filters
router.get("/", quizController.getAllQuizzes);

// Get quiz by ID
router.get("/:id", quizController.getQuizById);

// Update quiz - will require admin authentication later
router.put("/:id", /* authenticate, authorizeAdmin, */ quizController.updateQuiz);

// Delete quiz - will require admin authentication later
router.delete("/:id", /* authenticate, authorizeAdmin, */ quizController.deleteQuiz);

// Publish quiz - will require admin authentication later
router.patch("/:id/publish", /* authenticate, authorizeAdmin, */ quizController.publishQuiz);

// Unpublish quiz - will require admin authentication later
router.patch("/:id/unpublish", /* authenticate, authorizeAdmin, */ quizController.unpublishQuiz);

export default router;