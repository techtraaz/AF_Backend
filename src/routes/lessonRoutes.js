
import express from "express";
import * as lessonController from "../controller/lessonController.js";
import readingRoutes from "./readingRoutes.js";
import listeningRoutes from "./listeningRoutes.js";
import vocabularyRoutes from "./vocabularyRoutes.js";
import videoRoutes from "./videoRoutes.js";

const router = express.Router();

router.post("/", lessonController.createLesson);
router.get("/", lessonController.getAllLessons);
router.get("/:id", lessonController.getLessonById);
router.put("/:id", lessonController.updateLesson);
router.delete("/:id", lessonController.deleteLesson);
router.patch("/:id/publish", lessonController.publishLesson);


router.use("/:lessonId/reading", readingRoutes);
router.use("/:lessonId/listening", listeningRoutes);
router.use("/:lessonId/vocabulary", vocabularyRoutes);
router.use("/:lessonId/video", videoRoutes);

export default router;


