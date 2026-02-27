import Forum from "../../models/forum/forum.js";
import ForumMembership from "../../models/forum/forumMembership.js";
import ForumBan from "../../models/forum/forumBan.js";
import { ROLES } from "../../utils/constants.js";

// Only admin or content contributor can create a forum
const createForum = async (userId, role, data) => {
    if (role !== ROLES.ADMIN && role !== ROLES.CONTENT_CONTRIBUTOR) {
        throw new Error("Unauthorized to create a forum");
    }

    const existing = await Forum.findOne({ name: data.name });
    if (existing) {
        throw new Error("Forum with this name already exists");
    }

    const forum = await Forum.create({ ...data, createdBy: userId });
    return forum;
};

// Get all active forums
const getAllForums = async () => {
    return await Forum.find({ isActive: true }).populate("createdBy", "email role");
};

// Get a single forum by ID
const getForumById = async (forumId) => {
    const forum = await Forum.findById(forumId).populate("createdBy", "email role");
    if (!forum || !forum.isActive) {
        throw new Error("Forum not found");
    }
    return forum;
};

// Update forum - only creator, admin or content contributor
const updateForum = async (userId, role, forumId, data) => {
    const forum = await Forum.findById(forumId);
    if (!forum || !forum.isActive) throw new Error("Forum not found");

    const isCreator = forum.createdBy.toString() === userId.toString();
    const isPrivileged = role === ROLES.ADMIN || role === ROLES.CONTENT_CONTRIBUTOR;

    if (!isCreator && !isPrivileged) {
        throw new Error("Unauthorized to update this forum");
    }

    Object.assign(forum, data);
    await forum.save();
    return forum;
};

// Join a forum
const joinForum = async (userId, forumId) => {
    const forum = await Forum.findById(forumId);
    if (!forum || !forum.isActive) throw new Error("Forum not found");

    // Check if user is banned
    const ban = await ForumBan.findOne({ forumId, userId, isActive: true });
    if (ban) throw new Error("You are banned from this forum");

    const membership = await ForumMembership.create({ forumId, userId });
    return membership;
};

// Leave a forum
const leaveForum = async (userId, forumId) => {
    const membership = await ForumMembership.findOneAndDelete({ forumId, userId });
    if (!membership) throw new Error("You are not a member of this forum");
    return membership;
};

// Ban a user from a forum
const banUser = async (requesterId, requesterRole, forumId, targetUserId, reason) => {
    const forum = await Forum.findById(forumId);
    if (!forum || !forum.isActive) throw new Error("Forum not found");

    const isCreator = forum.createdBy.toString() === requesterId.toString();
    const isPrivileged = requesterRole === ROLES.ADMIN || requesterRole === ROLES.CONTENT_CONTRIBUTOR;

    if (!isCreator && !isPrivileged) {
        throw new Error("Unauthorized to ban users from this forum");
    }

    // Check existing active ban
    const existingBan = await ForumBan.findOne({ forumId, userId: targetUserId, isActive: true });
    if (existingBan) throw new Error("User is already banned from this forum");

    // Remove membership if exists
    await ForumMembership.findOneAndDelete({ forumId, userId: targetUserId });

    const ban = await ForumBan.create({
        forumId,
        userId: targetUserId,
        bannedBy: requesterId,
        reason,
        isActive: true
    });

    return ban;
};

// Unban a user from a forum
const unbanUser = async (requesterId, requesterRole, forumId, targetUserId) => {
    const forum = await Forum.findById(forumId);
    if (!forum || !forum.isActive) throw new Error("Forum not found");

    const isCreator = forum.createdBy.toString() === requesterId.toString();
    const isPrivileged = requesterRole === ROLES.ADMIN || requesterRole === ROLES.CONTENT_CONTRIBUTOR;

    if (!isCreator && !isPrivileged) {
        throw new Error("Unauthorized to unban users");
    }

    const ban = await ForumBan.findOneAndUpdate(
        { forumId, userId: targetUserId, isActive: true },
        { isActive: false },
        { new: true }
    );

    if (!ban) throw new Error("No active ban found for this user");
    return ban;
};

export { createForum, getAllForums, getForumById, updateForum, joinForum, leaveForum, banUser, unbanUser };