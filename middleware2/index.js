const express=require("express");
const App=express();
const check=require("./middleware/middleware")
const port=process.env.PORT || 5000;
const route=express.Router();
route.use(check);
route.get("",(req,resp)=>{
 resp.send("This is home page");
})
route.get("/about",(req,resp)=>{
    resp.send("Welcome to about section");
})
App.get("/contact",(req,resp)=>{
    resp.send("<h1>This is contact page</h1>");
})
App.use("/",route)
App.get("*",(req,resp)=>{
    resp.send("<h1>OOPS! 404 page not found");
})
App.listen(port,()=>{
    console.log("App is running on port:"+port);
});