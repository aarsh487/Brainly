import jwt from 'jsonwebtoken';
import { ACCESS_TOKEN } from './config';
import { Response } from 'express';
import { ObjectId } from 'mongodb';

export const generateToken = (userId: ObjectId, res: Response) => {
    const token = jwt.sign({ userId }, ACCESS_TOKEN, {
        expiresIn: "15d"
    });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 1000,
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV != 'development'
    });

    return token;
};