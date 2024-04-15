const express=require("express");
const App=express();
const port=process.env.PORT || 5000;
const check=(req,resp,next)=>{
if(!req.query.age){
    resp.send("Please provide age to access this site");
}
else if(req.query.age<18){
    resp.send("Sorry! You are not elligible to access this site")
}
else{
    next();
}
}
App.use(check)
App.get("",(req,resp)=>{
    resp.send("This is home page");
})
App.get("/about",(req,resp)=>{
    resp.send("Welcome to about us page")
})
App.listen(port,()=>{
    console.log("App is running on port:"+port)
})