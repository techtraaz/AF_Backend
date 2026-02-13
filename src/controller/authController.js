import * as authService from "../service/authService.js";
import { ROLES } from "../utils/constants.js";

const signupUser = async (req, res) => {
    try {
        const user = await authService.signup(req.body, ROLES.USER);
        return res.created("User registered successfully", user);
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


export {signupUser, signupAdmin , login }