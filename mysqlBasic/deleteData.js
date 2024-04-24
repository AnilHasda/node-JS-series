const connection=require("./connection")
async function delteData(){
let con=await connection();
con.query("delete from nodeapi where id=10",(error,result)=>{
    if(error){
         console.log("Error while deleting data",error);
    }
    else{
        console.log("Deletion operation success",result);
    }
})
}
delteData();