import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt';
import { userModel } from "../models/user.model";
import { generateToken } from "../lib/token";

interface signupRequestBody {
    name: string;
    email: string;
    password: string;
}

interface signupResponseBody {
    userId: string
    name: string;
    email: string;

}

export const userSignup = async (req: Request<{}, {}, signupRequestBody>, res: Response): Promise<Response> => {
    const { name, email, password } = req.body;

    if (!name) {
        return res.status(400).json({ success: false, message: "Name is required" });
    }

    if (!email) {
        return res.status(400).json({ success: false, message: "Email is required" });
    }

    if (!password) {
        return res.status(400).json({ success: false, message: "password is required" });
    }

    try {
        const user = await userModel.findOne({ email: email });
        if (user) {
            return res.status(400).json({ success: false, message: "User already exists" })
        }

        const hashedPassword = await bcrypt.hash(password, 5);
        const newUser = await userModel.create({
            name: name,
            email: email,
            password: hashedPassword,
        });

        if (newUser) {
            generateToken(newUser._id, res);
            return res.status(201).json({
                success: true, message: "Sign up successfull",
                userId: newUser._id,
                name: newUser.name,
                email: newUser.email
            });
        } else {
            return res.status(400).json({ success: false, message: "Invalid User Data" });
        }


    } catch (error) {
        console.log("Error during signup", error);
        return res.status(500).json({ success: false, message: "Internal server Error" })
    }
};

export const userLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email) {
        return res.status(400).json({ success: false, message: "Email is required" });
    }

    if (!password) {
        return res.status(400).json({ success: false, message: "password is required" });
    }

    try {
        const user = await userModel.findOne({ email: email });

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(400).json({ success: false, message: "Incorrect Password" });
        }

        generateToken(user._id, res)

        return res.status(200).json({
            success: true, message: "Login successfull",
            userId: user._id,
            email: user.email,
            name: user.name,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal server Error" });
    }
};