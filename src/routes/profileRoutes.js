import express from "express";
import { createProfile, getProfile, updateProfile } from "../controller/profileController.js";
import { authenticate } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/authMiddleware.js";
import { ROLES } from "../utils/constants.js";

const router = express.Router();

const allowedRoles = [ROLES.REFUGEE, ROLES.CONTENT_CONTRIBUTOR, ROLES.ADMIN];

router.post("/create", authenticate, authorizeRoles(allowedRoles), createProfile);
router.get("/get", authenticate, authorizeRoles(allowedRoles), getProfile);
router.patch("/update", authenticate, authorizeRoles(allowedRoles), updateProfile);

export default router;