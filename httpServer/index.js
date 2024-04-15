let http=require("http");
let {a,b,data}=require("./module.js")
let dat=data()
let port = process.env.PORT || 4500;
http.createServer((req,resp)=>{
    resp.write("<h1>"+dat+"</h1>"+a+" "+b);
    resp.end()
}).listen(port,()=>{
    console.log("app is running on port:"+port)
})