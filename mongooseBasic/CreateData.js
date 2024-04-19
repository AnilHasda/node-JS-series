const connection=require("./connection");
async function createData(){
let model=await connection();
let data={
    "name":"Cristiano",
    "age":39,
    "email":"cris@gmail.com"
}
let query=new model(data);
let result=await query.save();
console.log(result)
}
createData();