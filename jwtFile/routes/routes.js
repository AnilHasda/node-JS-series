import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
const secretKey=process.env.SECRET_KEY || "secretkey";
dotenv.config({ path:"../.env"});
const router=express.Router();
import { getData,getToken,sentData } from "../controllers/controllers.js";
router.get("/",getData);
router.post("/",sentData);
router.post("/login",getToken,(req,resp)=>{
    jwt.verify(req.token,secretKey,(err,authData)=>{
        if(err){
            resp.status(401).send("invalid token"+err);
        }
        else{
            resp.send({name:"Anil",token:authData});
        }
    })
});
export default router;