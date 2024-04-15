const express=require("express");
const App=express();
let port=process.env.PORT || 4500;
App.get("",(req,resp)=>{
    resp.send("hello mr/mrs "+req.query.name+" this is home page")
})
App.get("/about",(req,resp)=>{
    resp.send("this is about page");
})
App.get("*",(req,resp)=>{
    resp.send("<h1>404 page not found</h1>")
})
App.listen(port,()=>{
    console.log("App is running on port:"+port)
})