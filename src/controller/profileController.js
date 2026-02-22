import * as profileService from "../service/profileService.js";

const createProfile = async (req, res) => {
    try {
        const profile = await profileService.createProfile(
            req.user._id,
            req.user.role,
            req.body
        );
        return res.created(profile, "Profile created successfully");
    } catch (error) {
        if (error.message === "Profile already exists") {
            return res.conflict(error.message);
        }
        return res.serverError(error.message);
    }
};

const getProfile = async (req, res) => {
    try {
        const profile = await profileService.getProfile(
            req.user._id,
            req.user.role
        );
        return res.success(profile, "Profile fetched successfully");
    } catch (error) {
        if (error.message === "Profile not found") {
            return res.notFound(error.message);
        }
        return res.serverError(error.message);
    }
};

const updateProfile = async (req, res) => {
    try {
        const profile = await profileService.updateProfile(
            req.user._id,
            req.user.role,
            req.body
        );
        return res.success(profile, "Profile updated successfully");
    } catch (error) {
        if (error.message === "Profile not found") {
            return res.notFound(error.message);
        }
        return res.serverError(error.message);
    }
};

export { createProfile, getProfile, updateProfile };