import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { ACCESS_TOKEN } from "../lib/config";


export const authMiddleware = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.jwt;
        if(!token){
            res.status(404).json({ success: false, message: "Unauthorized Access - Token not found" });
            return;
        }
    
        const decoded = jwt.verify(token, ACCESS_TOKEN) as JwtPayload; 
        if(decoded){
            req.userId = decoded.userId;
            next();
        } else{
            res.status(404).json({ success: false, message: "Unauthorized Access - Invalid Token" });
            return;
        }
    
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ error: true, message: "Internal Server Error" });
        return;
    }

};