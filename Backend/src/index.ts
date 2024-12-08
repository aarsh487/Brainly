import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import { connectDb } from "./lib/db";
import { authMiddleware } from "./middleware/middleware";

const app = express();
app.use(express.json());

import userRouter from './routes/user.route';

app.use('/api/user', userRouter)



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    connectDb();
    console.log(`Server is started on PORT: ${PORT}`)
    
})