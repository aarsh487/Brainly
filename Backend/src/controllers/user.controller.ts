import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import { userModel } from "../models/user.model";
import { generateToken } from "../lib/token";


export const userSignup = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    if (!name) {
        res.status(400).json({ success: false, message: "Name is required" });
        return;
    }

    if (!email) {
         res.status(400).json({ success: false, message: "Email is required" });
         return;
    }

    if (!password) {
         res.status(400).json({ success: false, message: "password is required" });
         return;
    }

    try {
        const user = await userModel.findOne({ email: email });
        if (user) {
             res.status(400).json({ success: false, message: "User already exists" })
             return;
        }

        const hashedPassword = await bcrypt.hash(password, 5);
        const newUser = await userModel.create({
            name: name,
            email: email,
            password: hashedPassword,
        });

        if (newUser) {
            generateToken(newUser._id.toString(), res);
            res.status(201).json({
                success: true, message: "Sign up successfull",
                userId: newUser._id.toString(),
                name: newUser.name,
                email: newUser.email
            });
            return;
        } else {
             res.status(400).json({ success: false, message: "Invalid User Data" });
             return;
        }
    } catch (error) {
        console.log("Error while signup", error);
         res.status(500).json({ success: false, message: "Internal server Error" });
         return;
    }
};

export const userLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email) {
         res.status(400).json({ success: false, message: "Email is required" });
         return;
    }

    if (!password) {
         res.status(400).json({ success: false, message: "password is required" });
         return;
    }

    try {
        const user = await userModel.findOne({ email: email });

        if (!user) {
             res.status(404).json({ success: false, message: "User not found" });
             return;
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
             res.status(400).json({ success: false, message: "Incorrect Password" });
             return;
        }

        generateToken(user._id.toString(), res)

         res.status(200).json({
            success: true, message: "Login successfull",
            userId: user._id,
            email: user.email,
            name: user.name,
        });
        return;

    } catch (error) {
        console.log(error);
         res.status(500).json({ success: false, message: "Internal server Error" });
         return;
    }
};

export const getUser = async(req: Request, res: Response) => {
    try {
        res.status(200).json({ success: true, message: "user found" });
        return;
    } catch (error) {
        console.log("Error While getting user: ", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
        return;
    }
}