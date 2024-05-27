import mongoose from "mongoose";
import dotenv from "dotenv";
import { asyncHandler } from "../utils/asyncHandler.js";
dotenv.config({path:"./.env"});
let url=process.env.DB_URL;
let connection=asyncHandler(async ()=>{
    console.log(url)
   let check = await mongoose.connect(url+"cloudinary");
if(check){
    console.log("connection successful");
}
})
export {connection};