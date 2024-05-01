import express from "express";
import { getData, insertData } from "../controllers/controllers.js";
import upload from "../multerConfig/multerConfig.js";
const router=express.Router();
router.get("/",getData);
router.post("/",upload,insertData);
export default router;