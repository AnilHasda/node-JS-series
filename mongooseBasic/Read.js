 const connection=require("./connection");
 async function readData(){
let model=await connection();
let query=await model.find();
console.log(query);
 }
 readData()