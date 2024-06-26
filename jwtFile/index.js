import express from "express";
import dotenv from "dotenv";
import router from "./routes/routes.js";
dotenv.config();
const app=express();
const port=process.env.PORT || 3000;
app.use(router);
app.listen(port,()=>{
    console.log("App is running on port:",port);
})