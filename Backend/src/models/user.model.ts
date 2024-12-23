import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
},
    { timestamps: true }
);


export const userModel = mongoose.model('User', userSchema);