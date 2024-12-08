import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const contentSchema = new Schema ({
    title: { type: String, required: true },
    link: { type: String, required: true },
    type: { type: String, required: true },
    userId: { type: ObjectId, ref: 'User', required: true },
},
    { timestamps: true }
);


export const contentModel = mongoose.model('Content', contentSchema);