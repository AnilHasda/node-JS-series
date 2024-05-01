import multer from "multer";
const storage=multer.diskStorage({
    destination:function (req,file,cb){
        console.log(file)
        cb(null,"./upload");
    },
filename:function (req,file,cb){
    cb(null,Date.now()+"-"+file.originalname);
}
});
const imageFilter = function (req, file, cb) {
    // Accept image files only
    if (!file.originalname.match(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/)) {
      return cb(new Error("Only image files are allowed!"), false);
    }
    cb(null, true);
  };
  
  
const upload=multer({storage,fileFilter:imageFilter}).single("profile")
export default upload;