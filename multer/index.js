import express from "express";
const app=express();
import router from "./routes/routes.js";
app.set("view engine","ejs");
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.listen(4000,()=>{
    console.log("app is running on port:4000")
})