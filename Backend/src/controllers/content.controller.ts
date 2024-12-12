import { Request, Response } from "express"
import { contentModel } from "../models/content.model";
import { LinkModel } from "../models/link.model";
import { random } from "../lib/utils";


export const createContent = async(req: Request, res: Response) => {
    const { title, link, type } = req.body;

    if (!title) {
         res.status(400).json({ success: false, message: "Name is required" });
         return
    }

    if (!link) {
         res.status(400).json({ success: false, message: "Email is required" });
         return
    }

    if (!type) {
         res.status(400).json({ success: false, message: "password is required" });
         return
    }

    const userId = req.userId;
    try {
        const newContent = await contentModel.create({
            title: title,
            link: link,
            type: type,
            userId: userId
        });
        if(newContent){
            res.status(200).json({ success: true, message: "Content added successfully",
                newContent
             });
            return;
           
        } else{
            res.status(404).json({ success: false, message: "Error in adding content" });
            return;
        }
        
    } catch (error) {
        console.log("Error while adding content", error);
        res.status(500).json({ success: false, message: "Internal server Error" });
        return;
        
    }
};

export const getContent = async(req: Request, res: Response) => {
    const userId = req.userId;
    try {
        const content = await contentModel.find({ userId: userId });
        if(!content){
            res.json({ message: "No content Found" })
        } else {
            res.status(201).json({ success: true, message: "Content found successfully", 
                content
            });
            return;
        }
    } catch (error) {
        console.log("Error while fetching content", error);
        res.status(500).json({ success: false, message: "Internal server Error" });
        return;
    }
};

export const deleteContent = async(req: Request, res: Response) => {
    const userId = req.userId;
    const contentId = req.params.contentId;
    try {
        const content = await contentModel.findOneAndDelete({ _id: contentId, userId: userId });
        if(!content){
            res.json({ message: "Content not found" })
            return;
        } else {
            res.status(200).json({ success: true, message: "Delete succeeded", 
                content
            });
            return;
        }
    } catch (error) {
        console.log("Error while deleting content", error);
        res.status(500).json({ success: false, message: "Internal server Error" });
        return;
    }
};

