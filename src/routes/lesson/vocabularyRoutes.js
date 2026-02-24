
import express from "express";
import * as vocabularyController from "../../controller/lesson/vocabularyController.js";

const router = express.Router({ mergeParams: true });

router.post("/", vocabularyController.createVocabulary);
router.get("/", vocabularyController.getVocabulary);
router.put("/", vocabularyController.updateVocabulary);
router.delete("/", vocabularyController.deleteVocabulary);

export default router;