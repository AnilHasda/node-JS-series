const express=require("express");
const App=express();
const port=process.env.PORT ||4500;
App.get("",(req,resp)=>{
    resp.send(
        `<h1>This is home page</h1>
        <input type="text"placeholder="enter your name">
        <input type="submit"value="submit">
        <a href="/about">go to about page</a>
    `)
    App.get("/about",(req,resp)=>{
        resp.send(
            `<h1>this is about page</h1>
<a href="/">goto home page</a>
            `)
    })
    App.get("/data",(req,resp)=>{
        resp.send([
            {
                name:"anil",
                age:23
            },
            {
                name:"sarkar",
                age:22
            }
        ])
    })
})
App.listen(port,()=>{
    console.log("App is running on port:"+port)
})