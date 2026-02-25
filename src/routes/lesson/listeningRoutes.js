
import express from "express";
import * as listeningController from "../../controller/lesson/listeningController.js";

const router = express.Router({ mergeParams: true });

router.post("/", listeningController.createListening);
router.get("/", listeningController.getListening);
router.put("/", listeningController.updateListening);
router.delete("/", listeningController.deleteListening);

export default router;