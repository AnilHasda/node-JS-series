const mysql = require("mysql");
function connection() {
  return new Promise((res, rej) => {
    let con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "nodejs",
    });
    con.connect((error) => {
      if (error) {
        rej(error);
      } else {
        res(con);
      }
    });
  });
}
module.exports = connection;
