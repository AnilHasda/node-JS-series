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
const upload=multer({storage}).single("profile")
export default upload;