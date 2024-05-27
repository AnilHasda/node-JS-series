import mongoose from "mongoose";
const uploadSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
//   video: {
//     type: String,
//     required: true,
//   },
});
export const uploadModel= mongoose.model("media",uploadSchema);
