const express=require("express");
const app=express();
const event=require("events");
const customEvent=new event();
let x=0;
customEvent.on("count",()=>{
console.log("Total number of times url hitted:"+x)
})
const port=process.env.PORT || 4000;
app.get("/",(req,resp)=>{
    x++;
    resp.send("This is test message");
    customEvent.emit("count")
})
app.listen(port,()=>{
    console.log("App is running on port:"+port);
})