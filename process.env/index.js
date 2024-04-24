import dotenv from  "dotenv";
dotenv.config();
import express from "express";
const app=express();
const port = process.env.PORT || 3000;
app.get("/",(req,resp)=>{
    resp.send("This is test message");
})
app.listen(port,()=>{
    console.log("App is running on port: "+port)
})