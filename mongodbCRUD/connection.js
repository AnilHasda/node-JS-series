const {MongoClient}=require("mongodb");
const url="mongodb://localhost:27017";
const database="user";
const client=new MongoClient(url);
module.exports=async function connection(){
let check=await client.connect();
let db=client.db(database);
let collection=db.collection("data");
if(check){

console.log("connection successful")
return collection;
}
else{
    console.log("connection failed")
    return false;
}
}