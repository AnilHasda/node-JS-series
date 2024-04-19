const { ObjectId } = require("mongodb");
const connection=require("./connection");
async function deleteData(){
    let id="66229a9052038c51c80d9ac5";
let model=await connection();
let query=await model.deleteOne({_id:new ObjectId(id)})
console.log(query)
}
deleteData()