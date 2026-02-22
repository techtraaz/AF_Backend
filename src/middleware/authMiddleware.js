import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { ROLES } from "../utils/constants.js";

const authenticate = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) return res.unauthorized("No token provided");

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id);
        if (!user || !user.isActive) {
            return res.unauthorized("Invalid or inactive user");
        }

        req.user = user;
        next();
    } catch (error) {
        return res.unauthorized("Invalid token");
    }
};

const authorizeAdmin = (req, res, next) => {
    if (req.user.role !== ROLES.ADMIN) {
        return res.forbidden("Admin access required");
    }
    next();
};

const authorizeRoles = (roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) {
        return res.forbidden("Access denied for your role");
    }
    next();
};

export {authenticate , authorizeAdmin, authorizeRoles}