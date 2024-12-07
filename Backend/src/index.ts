import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";
import { ACCESS_TOKEN } from "./lib/config";
import { connectDb } from "./lib/db";
import { authMiddleware } from "./middleware/middleware";

const app = express();
app.use(express.json())


app.post('/api/v1/signup', async(req, res) => {
    const { userName, password } = req.body;

    if(!userName && !password){
        res.status(401).json({
            error: true,
            message: "Username and Password are required!"
        })
    }

    try{
        const user = await userModel.create({
            userName: userName,
            password: password
        });

        res.status(200).json({
            error: false,
            message: "Signed up Succeessfully"
        })
    } catch(error){
        res.status(500).json({
            error: true,
            message: "Internal Server Error!"
        })
    }
});


app.post('/api/v1/signin', async(req, res) => {
    const { userName, password } = req.body;

    if(!userName && !password){
        res.status(401).json({
            error: true,
            message: "Username and Password are required!"
        })
    }

    try{
        const user = await userModel.findOne({
            userName: userName,
            password: password
        });

        if(user){
            const token = jwt.sign({userId: user._id}, ACCESS_TOKEN)

            res.status(200).json({
                token,
                error: false,
                message: "Signed In Succeessfully"
            })
        } else{
            res.status(403).json({
                error: true,
                message: "Incorrect Credentials!"
            })
        }

        
    } catch(error){
        res.status(500).json({
            error: true,
            message: "Internal Server Error!"
        })
    }
});

app.post('/api/v1/content', authMiddleware, async(req, res) => {
    const { title, link, type, tags } = req.body;
    const userId = req.userId

    if(!title || !link || !type){
        res.status(403).json({ error: true, message: "All fields are required"})
    };

    try{
        const content = await contentModel.create({
            link: link,
            type: type,
            title: title,
            tags: tags || [],
            userId: userId
        });
    }catch(error){

    }
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is started on PORT: ${PORT}`)
    connectDb();
})