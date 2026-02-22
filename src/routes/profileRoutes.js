import express from "express";
import { createProfile, getProfile, updateProfile } from "../controllers/profileController.js";
import { authenticate } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/authMiddleware.js";
import { ROLES } from "../utils/constants.js";

const router = express.Router();

const allowedRoles = [ROLES.REFUGEE, ROLES.CONTENT_CONTRIBUTOR, ROLES.ADMIN];

router.post("/", authenticate, authorizeRoles(allowedRoles), createProfile);
router.get("/", authenticate, authorizeRoles(allowedRoles), getProfile);
router.patch("/", authenticate, authorizeRoles(allowedRoles), updateProfile);

export default router;