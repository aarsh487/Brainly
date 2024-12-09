import { Request, Response } from "express"
import { LinkModel } from "../models/link.model";
import { random } from "../lib/utils";
import { contentModel } from "../models/content.model";
import { userModel } from "../models/user.model";


export const generateLink = async(req: Request, res: Response) => {
    const share = req.body.share;
   try {
     if(share){
         const existingLink = await LinkModel.findOne({
             userId : req.userId
         })
         if(existingLink){
             res.json({ success: true, message: "Link found successfully", 
                 hash: existingLink.hash
             });
             return;
         }
 
         const hash = random(10);
         await LinkModel.create({
             userId: req.userId,
             hash: hash
         });
 
         res.json({ success: true, message: "Link created Successfully", 
             hash
         });
         return;
     } else{
        await LinkModel.deleteOne({
            userId: req.userId
        });

        res.json({ success: true, message: "Link removed successfully" });
        return;
     }
   } catch (error) {
        console.log("Error while creating link", error);
        res.status(500).json({ success: false, message: "Internal server Error" });
        return;
   }
};

export const shareLink = async(req: Request, res: Response) => {
    const hash = req.params.shareLink;

   try {
     const link = await LinkModel.findOne({
         hash
     });
 
     if(!link){
         res.status(411).json({ success: false, message: "Incorrect Input" });
         return;
     }
 
     const content = await contentModel.findOne({
         userId: link.userId
     });
 
     const user = await userModel.findOne({
         _id: link.userId
     });
 
     if(!user){
         res.status(404).json({success: false, message: "User not found" });
         return;
     }
 
     res.status(200).json({ success: true, message: "Content found successfully",
         username: user.name,
         content: content
      });
   } catch (error) {
    console.log("Error while accessing link", error);
    res.status(500).json({ success: false, message: "Internal server Error" });
    return;
   }

};
