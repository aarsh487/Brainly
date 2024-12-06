import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const tagSchema = new Schema({
    title: [{ type: String, required: true, unique: true }]
});

const contentTypes = [ 'image', 'video', 'audio', 'article' ]

const contentSchema = new Schema({
    link: { type: String, required: true },
    type: { type: String, required: true, enum: contentTypes },
    title: { type: String, required: true },
    tags: [{ type: ObjectId, ref: 'Tag'}],
    userId: { type: ObjectId, ref: 'User', required: true }
});

const linkSchema = new Schema({
    hash: { type: String, required: true },
    userId: { type: ObjectId, ref: 'User', required: true }
})


export const tagModel = mongoose.model('Tag', tagSchema);
export const userModel = mongoose.model("User", userSchema);
export const contentModel = mongoose.model("Content", contentSchema);
export const linkModel = mongoose.model("Link", linkSchema);



