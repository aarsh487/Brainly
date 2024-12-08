import mongoose from "mongoose";
import { MONGO_URL } from "./config";

export const connectDb = async() => {
    try {
        const conn = await mongoose.connect(MONGO_URL);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("MongoDB Connection Error:", error);
    }
};