import * as authService from "../service/authService.js";
import { ROLES } from "../utils/constants.js";

const signupRefugee = async (req, res) => {
    try {
        const user = await authService.signup(req.body, ROLES.REFUGEE);
        return res.created("Refugee registered successfully", user);
    } catch (error) {
        return res.badRequest(error.message);
    }
};

const signupContributor = async (req, res) => {
    try {
        const user = await authService.signup(req.body, ROLES.CONTENT_CONTRIBUTOR);
        return res.created(
            "Registration submitted. Please wait for admin approval before logging in.",
            user
        );
    } catch (error) {
        return res.badRequest(error.message);
    }
};

const signupAdmin = async (req, res) => {
    try {
        const user = await authService.signup(req.body, ROLES.ADMIN);
        return res.created("Admin registered successfully", user);
    } catch (error) {
        return res.badRequest(error.message);
    }
};

const login = async (req, res) => {
    try {
        const result = await authService.login(req.body);
        return res.success("Login successful", result);
    } catch (error) {
        return res.unauthorized(error.message);
    }
};

const logout = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        await authService.logout(token);
        return res.success("Logged out successfully");
    } catch (error) {
        return res.badRequest(error.message);
    }
};


export {signupRefugee, signupContributor, signupAdmin, login, logout};