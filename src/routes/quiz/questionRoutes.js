import express from "express";
import * as questionController from "../../controller/quiz/questionController.js";
// import { authenticate, authorizeAdmin } from "../../middleware/authMiddleware.js";

const router = express.Router();

// Create question (with optional options) - will require admin authentication later
router.post("/", /* authenticate, authorizeAdmin, */ questionController.createQuestion);

// Get all questions for a quiz
router.get("/quiz/:quizId", questionController.getAllQuestionsByQuiz);

// Get question by ID with options
router.get("/:id", questionController.getQuestionById);

// Update question - will require admin authentication later
router.put("/:id", /* authenticate, authorizeAdmin, */ questionController.updateQuestion);

// Delete question - will require admin authentication later
router.delete("/:id", /* authenticate, authorizeAdmin, */ questionController.deleteQuestion);

// Reorder questions within a quiz - will require admin authentication later
router.patch("/quiz/:quizId/reorder", /* authenticate, authorizeAdmin, */ questionController.reorderQuestions);

export default router;