import express from "express";
import * as courseController from "../../controller/course/courseController.js";
// import { authenticate, authorizeAdmin } from "../../middleware/authMiddleware.js";

const router = express.Router();

// Create course - will require authentication (admin or content adder) later
router.post("/", /* authenticate, */ courseController.createCourse);

// Get all courses with optional filters
router.get("/", courseController.getAllCourses);

// Get courses by creator
router.get("/creator/:creatorId", courseController.getCoursesByCreator);

// Get course statistics
router.get("/:id/statistics", courseController.getCourseStatistics);

// Publish course - will require authentication later
router.patch("/:id/publish", /* authenticate, */ courseController.publishCourse);

// Unpublish course - will require authentication later
router.patch("/:id/unpublish", /* authenticate, */ courseController.unpublishCourse);

// Get course by ID
router.get("/:id", courseController.getCourseById);

// Update course - will require authentication later
router.put("/:id", /* authenticate, */ courseController.updateCourse);

// Delete course - will require authentication later
router.delete("/:id", /* authenticate, */ courseController.deleteCourse);

export default router;