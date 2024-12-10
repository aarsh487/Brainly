import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import { connectDb } from "./lib/db";
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors())

import userRouter from './routes/user.route';
import contentRouter from './routes/content.route';
import linkRouter from './routes/link.route';

app.use('/api/user', userRouter);
app.use('/api/content', contentRouter);
app.use('/api/brain', linkRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    connectDb();
    console.log(`Server is started on PORT: ${PORT}`)
    
})