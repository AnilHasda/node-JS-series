const express = require("express");
const app = express();
const connection = require("./connection");
let port = process.env.PORT || 4000;
async function readData(name) {
  console.log("hello mr", name);
  let collection = await connection();
  let query = await collection
    .find({
      $or: [
          {"name": { $regex: name || " " }},
          {"age":39}             
      ],
    })
    .toArray();
  return query;
}
app.get("/:name?", (req, resp) => {
  readData(req.params.name)
    .then((res) => {
      resp.send(res);
    })
    .catch((error) => {
      resp.send(error);
    });
});
app.listen(port, () => {
  console.log("App is running on port:" + port);
});
