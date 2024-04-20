const connection=require("./connection");
async function updateData(){
    let con=await connection();
    con.query("update nodeapi set name='Ram' where id=9",(error,result)=>{
        if(error){
            console.log("error")
        }
        else{
            console.log(result)
        }
    })
}
updateData();