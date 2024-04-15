module.exports=check=(req,resp,next)=>{
    if(req.query.age){
        if(req.query.age<18){
            resp.send("Sorry! You are not ellible to visit this site")
        }
        else{
        next();
        }
    }
    else{
        resp.send("Please provide age to access this site")
    }
}