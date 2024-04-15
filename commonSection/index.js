const express=require("express");
const App=express();
const port=process.env.PORT || 5000;
App.set("view engine","ejs");
App.get("",(req,resp)=>{
resp.render("index");
})
App.get("/about",(req,resp)=>{
    resp.render("about");
})
App.get("*",(req,resp)=>{
    resp.send("<h1>oops! 404 page not found!")
})
App.listen(port,()=>{
    console.log("App is running on port:"+port)
})