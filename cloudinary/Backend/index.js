import express from "express";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import path,{ dirname } from 'path';
import cors from "cors";
import {connection} from "./Database/connection.js";
connection();
dotenv.config({ path: "./.env" });
// Get the filename of the current module
const __filename = fileURLToPath(import.meta.url);

// Get the directory name of the current module
const __dirname = dirname(__filename);

let app = express();
let port = process.env.PORT || 5000;
 
import  mediaRouter from "./Routes/uploadMedial.routes.js";

app.use(express.json());
app.use(cors({origin:"http://localhost:5173",credentials:true}));
app.use(express.urlencoded({extended:true}));
app.use("/api/v1",mediaRouter);
app.use(express.static(path.join(__dirname+"/upload/images")));
app.get("/", (req, resp) => {
  resp.sendFile(path.join(__dirname,"upload","images/1716700640637-coding.jpeg"));
});

app.listen(port, () => {
  console.log("App is running at port:" + port);
});
