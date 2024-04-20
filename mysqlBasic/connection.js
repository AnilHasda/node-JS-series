const mysql = require("mysql");
function connection(){
  return new Promise((res,rej)=>{
    let con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "nodejs",
    });
    con.connect(error=>{
      if(error){
        console.log("errors while communicating")
        rej(error);
      }
      else{
        console.log("connection successful")
        res(con);
      }
    })
  })

}
module.exports=connection;
