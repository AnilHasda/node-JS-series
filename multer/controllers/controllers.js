const getData=(req,resp)=>{
resp.render("index",{name:["anil","sarkar"]});
}
const insertData=(req,resp)=>{
console.log(req.body);
console.log(req.file)
if (req.fileFilterError) {
    return res.status(400).send(req.fileFilterError);
  }

resp.send("data sent successful")
}
export {getData,insertData};