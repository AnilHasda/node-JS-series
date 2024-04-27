
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config("../.env");
const secretKey=process.env.SECRET_KEY;
export const getData=(req,resp)=>{
    resp.send("This is test message");
}
export const sentData=(req,resp)=>{
    let data={
        user:"Anil",
        age:23,
        email:"anil@gmail.com"
    }
    let token=jwt.sign({data},secretKey,(err,tok)=>{
        if(err){
            resp.status(500).send("error while generating token"+err)
        }
        else{
            resp.send({tok})
        }
    })
}
//middleware to get token
 export const getToken=(req,resp,next)=>{
    let data=req.headers["authorization"];
    if(typeof(data) !== "undefined"){
    let token = data.split(" ")[1];
    req.token=token;
    next();
    }
    else{
        resp.send({error:"token is not valid"});
        next();
    }
}