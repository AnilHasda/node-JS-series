const express=require("express");
const App=express();
const port=process.env.PORT || 4000;
App.set("view engine","ejs")
App.get("",(req,resp)=>{
    const data={
        name:"Anil Hasda",
        age:22,
        email:"abc@gmail.com"
    }
    resp.render("index",data)
})
App.get("/about",(req,resp)=>{
    const message={
        players:["cris","messi","neymar","marcelo"]
    }
    resp.render("about",message)
})
App.listen(port,()=>{
    console.log("App is running on port:"+port)
})