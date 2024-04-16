const connection=require("./connection");
const updateData=async ()=>{
    let collection=await connection();
    let query=await collection.updateOne({"name":"Sarkar Hasda"},{$set:{"name":"Sarkar"}});
    if(query.modifiedCount>0){
        console.log("Data updated successfully");
    }
    else{
        console.log("Error while updating data")
    }
}
updateData();