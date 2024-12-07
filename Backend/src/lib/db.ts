import mongoose from "mongoose";

export const connectDb = async() => {
    try {
        if(process.env.MONGO_URL){
            const conn = await mongoose.connect(process.env.MONGO_URL);
            console.log(`MongoDB connected: ${conn.connection.host}`);
        }
    } catch (error) {
        console.log("MongoDB Connection Error:", error);
    }
};