const { ObjectId } = require("mongodb");
const connection=require("./connection");
async function updateData(){
let model = await connection();
let data={
    "name":"Sarkar Hasda",
}
let query=await model.updateOne({_id:new ObjectId('66229a9052038c51c80d9ac5')},{$set:data})
console.log(query);
}
updateData();