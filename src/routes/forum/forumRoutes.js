import express from "express";
import {
    createForum, getAllForums, getForumById,
    updateForum, joinForum, leaveForum, banUser, unbanUser
} from "../../controller/forum/forumController.js";
import { authenticate, authorizeRoles, authorizeAdmin, authorizeContentContributor } from "../../middleware/authMiddleware.js";
import { ROLES } from "../../utils/constants.js";


const router = express.Router();

// Public - all authenticated users can view forums
router.get(
    "/", 
    authenticate, 
    authorizeRoles(),
    getAllForums
);

router.get(
    "/:forumId", 
    authenticate,
    authorizeRoles(), 
    getForumById
);

// Only admin or content contributor can create/update
router.post(
    "/", 
    authenticate, 
    authorizeRoles(ROLES.ADMIN, ROLES.CONTENT_CONTRIBUTOR),
    createForum
);

router.patch(
    "/:forumId", 
    authenticate, 
    authorizeRoles(ROLES.ADMIN, ROLES.CONTENT_CONTRIBUTOR),
    updateForum
);

// Any authenticated user can join/leave
router.post(
    "/:forumId/join", 
    authenticate,
    authorizeRoles(),
    joinForum
);

router.delete(
    "/:forumId/leave", 
    authenticate,
    authorizeRoles(), 
    leaveForum
);

// Admin or contributor only - ban management
router.post(
    "/:forumId/ban", 
    authenticate, 
    authorizeRoles(ROLES.ADMIN, ROLES.CONTENT_CONTRIBUTOR),
    banUser
);

router.patch(
    "/:forumId/unban", 
    authenticate, 
    authorizeRoles(ROLES.ADMIN, ROLES.CONTENT_CONTRIBUTOR),
    unbanUser
);

export default router;