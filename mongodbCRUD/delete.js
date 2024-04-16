const connection=require("./connection");
const deleteData=async ()=>{
    let collection=await connection();
let query=await collection.deleteOne({name:"Sarkar"})
if(query.deletedCount>0){
    console.log("Data deleted successfully");
}
else{
    console.log("Data deletion failed")
}
}
deleteData();