const connection=require("./connection");
const readData=async ()=>{
    let collection=await connection();
    let query=await collection.find().toArray();
    if(query){
        console.log(query);
    }
else{
    console.log("error while fetching data from database")
}
}
readData();