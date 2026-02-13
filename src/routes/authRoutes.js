import express from "express";
import * as authController from "../controller/authController.js";

const router = express.Router();

router.post("/signup", authController.signupUser);
router.post("/admin/signup", authController.signupAdmin);
router.post("/login", authController.login);

export default router;
