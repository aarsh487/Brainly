import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

import { ACCESS_TOKEN } from "../lib/config";

interface AuthenticatedRequest extends Request {
    userId: string
};

interface DecodedToken extends JwtPayload {
    userId: string
};

export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const header = req.headers['authorization'];
    const token = jwt.verify(header as string, ACCESS_TOKEN) as JwtPayload

    if(token){
        req.userId = (token as DecodedToken).userId
        next();
    };
    return;
}