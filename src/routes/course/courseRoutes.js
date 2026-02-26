import express from "express";
import * as courseController from "../../controller/course/courseController.js";
import { authenticate, authorizeRoles } from "../../middleware/authMiddleware.js";
import { ROLES } from "../../utils/constants.js";

const router = express.Router();

// Create course
router.post("/", authenticate, authorizeRoles(ROLES.ADMIN, ROLES.CONTENT_CONTRIBUTOR), courseController.createCourse);

// Get all courses with optional filters
router.get("/", authenticate, courseController.getAllCourses);

// Get courses by creator
router.get("/creator/:creatorId", authenticate, courseController.getCoursesByCreator);

// Get course statistics
router.get("/:id/statistics", authenticate, authorizeRoles(ROLES.ADMIN, ROLES.CONTENT_CONTRIBUTOR), courseController.getCourseStatistics);

// Publish course
router.patch("/:id/publish", authenticate, authorizeRoles(ROLES.ADMIN), courseController.publishCourse);

// Unpublish course
router.patch("/:id/unpublish", authenticate, authorizeRoles(ROLES.ADMIN), courseController.unpublishCourse);

// Get course by ID
router.get("/:id", authenticate, courseController.getCourseById);

// Update course
router.put("/:id", authenticate, authorizeRoles(ROLES.ADMIN, ROLES.CONTENT_CONTRIBUTOR), courseController.updateCourse);

// Delete course
router.delete("/:id", authenticate, authorizeRoles(ROLES.ADMIN, ROLES.CONTENT_CONTRIBUTOR), courseController.deleteCourse);

export default router;