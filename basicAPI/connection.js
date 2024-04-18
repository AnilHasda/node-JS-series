const {MongoClient}=require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
async function connection(){
    let connect=await client.connect();
    let db=connect.db("student");
    let collection=db.collection("data1")
    if(connect){
        console.log("connection successful");
        return collection;
    }
} 
module.exports=connection;