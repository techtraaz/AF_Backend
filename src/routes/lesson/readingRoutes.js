
import express from "express";
import * as readingController from "../../controller/lesson/readingController.js";

const router = express.Router({ mergeParams: true }); // mergeParams to access lessonId

router.post("/", readingController.createReading);
router.get("/", readingController.getReading);
router.put("/", readingController.updateReading);
router.delete("/", readingController.deleteReading);

export default router;