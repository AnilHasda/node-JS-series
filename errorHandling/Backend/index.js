import express from "express";
import { asyncHandler } from "./utils/asyncHandler.js";
import { apiResponse } from "./utils/apiResponse.js";
let app = express();
let port = 4000;
app.get("/", (req, resp) => {
  asyncHandler(() => {
    let response = new apiResponse(200, "This is test message");
    resp.status(response.statusCode).json(response.data);
  });
});
app.listen(port, () => {
  console.log("App is listening at port:" + port);
});
