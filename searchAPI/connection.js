const {MongoClient}=require("mongodb");
const url="mongodb://localhost:27017";
const client=new MongoClient(url);
async function connection(){
let connect=await client.connect();
if(connect){
    console.log("connection successful")
    let db=connect.db("teacher");
    let collection=db.collection("datas");
return collection;
}
else{
    console.log("connection failed")
}
}
module.exports=connection;