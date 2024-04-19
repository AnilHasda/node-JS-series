const mongoose = require("mongoose");
const db = "teacher";
let collectionName = "data";
const url = "mongodb://localhost:27017/" + db;
const connection = async () => {
  try {
    const resp = await mongoose.connect(url);
    if (resp) {
      console.log("connection successful");
      let schema = new mongoose.Schema({
        name: String,
        age: Number,
      });
      let model = mongoose.model(collectionName, schema);
      return model;
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports=connection;
