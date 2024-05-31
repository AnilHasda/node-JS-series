import express from "express";
import { uploadMedia, testData } from "../Controllers/upload.controller.js";
import { upload } from "../Middlewares/multer.middleware.js";
let router = express.Router();
router.route("/upload/media").post(upload.single("image"), uploadMedia);
router.route("/testing/route").get(testData);
export default router;
