import { uploadModel } from "../Models/upload.models.js";
import { imageUploader } from "../utils/cloudinary.js";
const uploadMedia = async (req, resp) => {
  console.log(req.file);
  if (req.file) {
    let cloudinaryResponse = await imageUploader(req.file.path);
    console.log(cloudinaryResponse);
    let query = new uploadModel({ image: cloudinaryResponse.url });
    let saveData = await query.save();
    if (saveData) {
      resp.status(200).json({ message: "Data inserted successfully" });
    } else {
      resp.status(500).json({ message: "Failed to insert data" });
    }
  } else {
    resp.status(500).json({ message: "file not found" });
  }
};
// this route is for testing only
const testData = (req, resp) => {
  resp.status(200).json({ message: "This is testing message" });
};
export { uploadMedia, testData };