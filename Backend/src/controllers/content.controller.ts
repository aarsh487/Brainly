import { Request, Response } from "express"
import { ObjectId } from 'mongoose';


export const createContent = async(req: Request, res: Response) => {
    const { title, link, type } = req.body;

    if (!title) {
        return res.status(400).json({ success: false, message: "Name is required" });
    }

    if (!link) {
        return res.status(400).json({ success: false, message: "Email is required" });
    }

    if (!type) {
        return res.status(400).json({ success: false, message: "password is required" });
    }

    const userId = req.userId;

    try {
        
    } catch (error) {
        
    }
}