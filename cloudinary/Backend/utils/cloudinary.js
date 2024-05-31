import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import fs from "fs";
// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
// Upload an image
const imageUploader = async (filePath) => {
  console.log(process.env.API_SECRET);
  try {
    if (!filePath) return "file not found";
    const uploadResult = await cloudinary.uploader.upload(filePath, {
      resource_type: "image",
    });
    if (uploadResult) {
      console.log("File uploaded successfully");
      fs.unlinkSync(filePath);
      return uploadResult;
    } else {
      fs.unlinkSync(filePath);
      console.log("Failed to upload files");
    }
  } catch (error) {
    console.log("error occurs");
    console.log(error);
    return error;
  }
};
export { imageUploader };
