const express=require("express");
const {ObjectId}=require("mongodb");
const app=express();
app.use(express.json())
const port = process.env.PORT || 4000;
const connection=require("./connection");
async function readData(){
    let collection=await connection();
let query=await collection.find().toArray();
return query;
}

const insertData=async (data)=>{
    let collection=await connection();
let query=await collection.insertOne(data);
return query;
}
 
// function to create update operation
const updateData=async (id,value)=>{
        let collection = await connection();
        let query = await collection.updateOne({_id:new ObjectId(id)}, { $set: value });
        return query;
}

// delete function 
const deleteData=async (id)=>{
let collection=await connection();
let query=await collection.deleteOne({_id:new ObjectId(id)})
return query;
}
app.get("/",async (req,resp)=>{
let result=await readData();
resp.send(result);
})
app.post("/",async (req,resp)=>{
let result=await insertData(req.body);
if(result){
let response=await readData();
resp.send(response);
}
else{
    resp.send("Error while inserting data")
}
})
app.put("/:id",async (req,resp)=>{
    let result=await updateData(req.params.id,req.body);
    console.log(result)
    if(result){
        let response=await readData();
        resp.send(response);
        }
        else{
            resp.send("Error while updating data")
        }
})
app.delete("/:id",async (req,resp)=>{
    let result=await deleteData(req.params.id);
    console.log(result)
    if(result.deletedCount>0){
        let response=await readData();
        resp.send(response);
        }
        else{
            resp.send("Error while updating data")
        }
})
app.listen(port,()=>{
    console.log("App is running on port:"+port)
})
