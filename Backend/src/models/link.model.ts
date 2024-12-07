import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const LinkSchema = new Schema ({
    hash: { type: String, required: true, unique: true },
    userId: { type: ObjectId, ref: 'User', required: true },
});


export const LinkModel = mongoose.model('Link', LinkSchema);