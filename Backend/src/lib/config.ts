import dotenv from 'dotenv';

dotenv.config()

export const ACCESS_TOKEN = process.env.ACCESS_TOKEN!;

export const MONGO_URL = process.env.MONGO_URL!;