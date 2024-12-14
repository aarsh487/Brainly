import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import { connectDb } from "./lib/db";
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

const fullPath = path.resolve(__dirname, 'path/to/file');

import userRouter from './routes/user.route';
import contentRouter from './routes/content.route';
import linkRouter from './routes/link.route';

app.use('/api/user', userRouter);
app.use('/api/content', contentRouter);
app.use('/api/brain', linkRouter);

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'production'){
    const staticPath = path.join(__dirname, "../../frontend/dist");
    console.log('Serving static files from: ', staticPath);

    app.use(express.static(staticPath));

    app.get("*", (req, res) => {
        const indexPath = path.join(staticPath, 'index.html')
        console.log("Resolved index.html path: ", indexPath)
        res.sendFile(indexPath)
    })
}

app.listen(PORT, () => {
    connectDb();
    console.log(`Server is started on PORT: ${PORT}`)
    
})