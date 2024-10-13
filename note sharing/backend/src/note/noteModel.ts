import mongoose, { mongo } from "mongoose";
import { Note } from "./noteTypes";

const noteSchema = new mongoose.Schema<Note>({
    // title : {
    //     type: String,
    //     required: true
    // },
    // subtitle : {
    //     type: String
    // }
    title: {
        type: String,
        required: true
    },
    // subtitle: {
    //     type: String,
    // },
    subtitle: String,
    description: {
        type: String,
        required: [true, "Description must be provided"]
    },
    file: String

}, {timestamps: true})

export default mongoose.model<Note>("Note", noteSchema)