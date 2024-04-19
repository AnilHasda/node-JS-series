const mongoose = require("mongoose");
let db = "teacher";
let collection = "datas";
let url = "mongodb://localhost:27017/" + db;
async function connection() {
  try {
     await mongoose.connect(url);
    let schema=new mongoose.Schema({
        "name":String,
        "age":Number,
        "email":String
    });
    let model=mongoose.model(collection,schema);
    console.log("connection successful")
    return model;
  } catch (error) {
    console.log(error);
  }
}
module.exports=connection;
