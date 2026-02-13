import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { ROLES } from "../utils/constants.js";

const generateToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            role: user.role
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );
};

const signup = async (data, role = ROLES.USER) => {
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await User.create({
        email: data.email,
        password: hashedPassword,
        role
    });

    return user;
};

const login = async (data) => {
    const user = await User.findOne({ email: data.email });
    if (!user) {
        throw new Error("Invalid credentials");
    }

    if (!user.isActive) {
        throw new Error("Account is deactivated");
    }

    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) {
        throw new Error("Invalid credentials");
    }

    const token = generateToken(user);

    const userObj = user.toObject();
    delete userObj.password;

    return { user : userObj, token };
};


export {signup , login}