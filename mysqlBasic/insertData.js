const connection=require("./connection");
async function insertData(){
let con=await connection();
con.query("insert into nodeapi (name,age,address) values ('Krishna',35,'India')",(error,result)=>{
    if(error){
        console.log("Error message:",error)
    }
    else{
        if(result.affectedRows>0){
            console.log("data inserted successfully")
        }
    }
})
}
insertData();