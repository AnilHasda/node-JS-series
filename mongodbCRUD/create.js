const connection=require("./connection");
console.log(connection)
const insertData=async ()=>{
    let collection=await connection();
let query=await collection.insertMany([
    {
        "name":"Sarkar",
        "age":23,
        "email":"sarkar@gmail.com"
    },
    {
        "name":"Cristiano Ronaldo",
        "phone":9800000000
    }
])
if(query){
    console.log("Data inserted successfully");
}
else{
    console.log("Error while inserting data");
}

}
insertData();