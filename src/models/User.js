import mongoose from "mongoose";
const schema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    travelLog:{
        type:Array,
        default:[]
    },
},{timestamps:true});
const User=mongoose.model("USERS",schema);
export default User;
