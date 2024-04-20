const express=require("express");
const app=express();
const port=process.env.PORT || 4000;
app.use(express.json());
const connection=require("./connection")
app.get("/",async (req,resp)=>{
    let con=await connection();
    con.query("select * from nodeapi",(error,result)=>{
        if(error){
            resp.send("failed to fetched data!"+error)
        }
        else{
            resp.send(result)
        }
    })
})
app.post("/",async (req,resp)=>{
let con=await connection();
con.query(`insert into nodeapi set ?`,req.body,(error,result)=>{
    if(error){
        resp.send("error"+error)
    }
    else{
        resp.send(result);
    }
})
})
app.put("/",async (req,resp)=>{
    let con=await connection();
    let {name,age,address}=req.body;
    con.query(`update nodeapi set name='${name}',age=${age},address='${address}' where id=2`,(error,result)=>{
        if(error) resp.send(error) 
        else resp.send(result)
    }) 
})
app.delete("/:id",async (req,resp)=>{
    let con=await connection();

    con.query("delete from nodeapi where id="+req.params.id,(error,result)=>{
        if(error) resp.send(error)
        else resp.send(result)
    })
})
app.listen(port,()=>{
    console.log("App is running on port:"+port);
})