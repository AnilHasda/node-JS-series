const express=require("express");
const port=process.env.PORT || 5000;
const App=express();
App.get("",(req,resp)=>{
    resp.send("this is home page")
})
App.get("/about",(req,resp)=>{
    resp.send("this is about page")
})
App.get("*",(req,resp)=>{
    resp.send("<h1>404 page not found</h1>")
})
App.listen(port,()=>{
    console.log("app is running on port:"+port)
})