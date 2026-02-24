
import express from "express";
import * as videoController from "../../controller/lesson/videoController.js";

const router = express.Router({ mergeParams: true });

router.post("/", videoController.createVideo);
router.get("/", videoController.getVideo);
router.put("/", videoController.updateVideo);
router.delete("/", videoController.deleteVideo);

export default router;