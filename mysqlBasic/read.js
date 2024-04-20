const connection=require("./connection");
async function read(){
    let data=await connection()
    data.query("select * from nodeapi",(error,result)=>{
        if(error){
            console.log("error:",error)
        }
        else{
            console.log(result)
        }
    })
}
read();