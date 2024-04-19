const express=require("express");
const App=express();
const connection=require("./connection");
const { ObjectId } = require("mongodb");
App.use(express.json());
const port=process.env.PORT || 4000;
App.get("/",async (req,resp)=>{
    let model=await connection();
    let query=await model.find();
    resp.send(query)
})
App.post("/",async (req,resp)=>{
    let collection=await connection();
let query=new collection(req.body);
let result=await query.save();
resp.send(result)
})
App.put("/:id",async (req,resp)=>{
    let collection=await connection();
    let query=await collection.updateOne({_id:new ObjectId(req.params.id)},{$set:req.body});
    if(query.modifiedCount>0){
        resp.send("Data updated successfully");
    }
    else{
        resp.send("Failed to update data");
    }
})
App.delete("/:id",async (req,resp)=>{
    let collection=await connection();
    let query=await collection.deleteOne({_id:new ObjectId(req.params.id)});
    if(query.deletedCount>0){
        resp.send("Data deleted successfully");
    }
    else{
        resp.send("Failed to delte data");
    }
})
App.listen(port,()=>{
    console.log("App is running on port:",port)
})