import mongoose from "mongoose";
import { ROLES } from "../utils/constants.js";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: [ROLES.ADMIN, ROLES.USER],
            default: ROLES.USER
        },
        isActive: {
            type: Boolean,
            default: true
        }
        // add on boarding detail if needed
    },
    { timestamps: true }
);

export default mongoose.model("User", userSchema);
