import mongoose from "mongoose";

const UserUploadDataSchema = new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"DataModel"
    },
    image:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required:true
    }
}, {timestamps:true})

export const UserUploadData = mongoose.model("UserUploadData", UserUploadDataSchema)


