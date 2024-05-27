import multer from "multer";
let storage=multer.diskStorage({
    destination:function (req,file,cb){
cb(null,"./upload/images");
    },
    filename:function (req,file,cb){
        cb(null,Date.now()+"-"+file.originalname);
    }
});
export let upload=multer({storage}); 