import express from "express";
import * as optionController from "../../controller/quiz/optionController.js";
// import { authenticate, authorizeAdmin } from "../../middleware/authMiddleware.js";

const router = express.Router();

// Create option - will require admin authentication later
router.post("/", /* authenticate, authorizeAdmin, */ optionController.createOption);

// Get all options for a question
router.get("/question/:questionId", optionController.getOptionsByQuestion);

// Update option - will require admin authentication later
router.put("/:id", /* authenticate, authorizeAdmin, */ optionController.updateOption);

// Delete option - will require admin authentication later
router.delete("/:id", /* authenticate, authorizeAdmin, */ optionController.deleteOption);

export default router;