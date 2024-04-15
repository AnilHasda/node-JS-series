const express=require("express");
const path=require("path")
const App=express();
const port=process.env.PORT || 5000;
const publicPath=path.join(__dirname,"public")
App.get("",(req,resp)=>{
    resp.sendFile(publicPath+"/index.html")
})
App.get("/about",(req,resp)=>{
    resp.sendFile(publicPath+"/about.html")
})
App.listen(port,()=>{
    console.log("App is running on port:"+port);
})